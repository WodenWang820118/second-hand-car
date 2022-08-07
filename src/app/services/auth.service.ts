import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { User } from './user.model';

export class Permissions {
  canActivate(user: any): boolean {
    if (user === null || user === undefined) {
      return false;
    }
    return true;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  user$: Observable<User | null | undefined>;

  constructor(
    private auth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private permissions: Permissions
  ) {
    this.user$ = this.getUser();
  }

  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.permissions.canActivate(this.user$);
  }

  getUser() {
    return this.auth.authState.pipe(
      switchMap(user => {
        if (user) {
          // use valueChanges to get the user Observable
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      })
    );
  }

  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.auth.signInWithPopup(provider);
    this.updateUserData(credential.user as any);
    this.router.navigate(['/mainpage']);
  }

  async signOut() {
    await this.auth.signOut();
    this.router.navigate(['/auth']);
  }

  private updateUserData(user: User) {
    if (user === null) { return; }
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    return userRef.set(data, { merge: true });
  }
}
