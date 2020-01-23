import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import * as md from 'mobile-detect';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private authState: any = null;

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    // Checks for logged-in user
    this.afAuth.auth.getRedirectResult().then((credential) => {
      if(credential.user) {
        this.authState = auth;
        this.updateUserData();
        this.router.navigate(['account']);
      }
    }).catch((err) => { console.log(err); });
    this.afAuth.authState.subscribe( auth => {
      this.authState = auth;
    });
  }

  // Returns true if user loggedin
  get autheticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user
  get currentUser(): any {
    return this.autheticated ? this.authState : null;
  }

  // Returs current user as Observable
  get currentUser$(): Observable<firebase.User> {
    return this.afAuth.authState;
  }

  // Returns current user's UID
  get currentUserID(): string {
    return this.autheticated ? this.authState.uid : '';
  }

  // Social Login - private method
  private async socialSignIn(provider: any) {
    try {
      if(new md(window.navigator.userAgent).mobile()) {
        // console.log('MOBILE');
        // alert('Mobile');
        this.afAuth.auth.signInWithRedirect(provider);
      } else {
        // console.log('Browser');
        const credential = await this.afAuth.auth.signInWithPopup(provider);
        this.authState = credential.user;
        this.updateUserData();
        this.router.navigate(['account']);
      }
    } catch(err) {
      console.log(err);
    }
  }

  // GitHub Login
  githubLogin() {
    const provider = new auth.GithubAuthProvider()
    return this.socialSignIn(provider);
  }

  // Google Login
  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    return this.socialSignIn(provider);
  }

  // Facebook Login
  facebookLogin() {
    const provider = new auth.FacebookAuthProvider()
    return this.socialSignIn(provider);
  }

  // Twitter Login
  twitterLogin(){
    const provider = new auth.TwitterAuthProvider()
    return this.socialSignIn(provider);
  }

  //// Email/Password Auth ////
  async emailSignUp(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.updateUserData();
      this.router.navigate(['account']);
    } catch(err) {
      console.log(err);
    }
  }

  async emailSignIn(email: string, password: string) {
    try {
      const user = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.updateUserData();
      this.router.navigate(['account']);
    } catch(err) {
      console.log(err);
    }
  }

  //// Email Reset Password ////
  async resetPassword(email: string) {
    try {
      const conf = await this.afAuth.auth.sendPasswordResetEmail(email);
      console.log('email sent');
    } catch(err) {
      console.log(err);
    }
  }

  //// Sign Out ////
  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigate(['']);
  }

  // User Data
  private updateUserData() {
    console.log('User Data updated');
  }
}
