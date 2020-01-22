export class User {
    uid: string
    email: string
    photoURL?: string
    displayName?: string
    constructor({uid, email, photoURL, displayName}: any) {
        this.uid = uid;
        this.email = email;
        this.displayName = this.displayName;
        this.photoURL = this.photoURL;
    }
}
