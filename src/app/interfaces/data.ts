export interface Coordinates {
    lattitude: number; // change it to string
    longitude: number; // change it to string and modify method to handle directions
}

interface Path {
    start: Coordinates,
    end: Coordinates
}

export interface BirdData {
    birdId?: string;
    comName?: string;
    sciName?: string;
    position: Coordinates;
    path?: Path[];
}

export interface UserData {
    uid: string
    email: string
    photoURL?: string
    displayName?: string
}
