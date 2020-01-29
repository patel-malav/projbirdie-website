export interface BirdData {
    lattitude: number; // change it to string
    longitude: number; // change it to string and modify method to handle directions
}

export interface UserData {
    uid: string
    email: string
    photoURL?: string
    displayName?: string
    // constructor({uid, email, photoURL, displayName}: any) {
    //     this.uid = uid;
    //     this.email = email;
    //     this.displayName = this.displayName;
    //     this.photoURL = this.photoURL;
    // }
}
