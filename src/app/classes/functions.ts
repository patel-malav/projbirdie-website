import { Vector3 } from 'three';

export function translateLatLong(lat: number, long: number, alti = 0, radius = 100) {
    let x = 0, y = 0, z = 0;
    radius += alti;
    
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (long + 180) * (Math.PI / 180);
  
    return new Vector3(
      - radius * Math.sin(phi) * Math.cos(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.sin(theta)
    );
    // const radian = Math.PI / 180, mag = alti +  radius;
    // lat *= radian;
    // long *= radian;
    // // let f = 0; // flatting
    
    // x = mag * Math.cos(lat) * Math.cos(long);
    // y = mag * Math.sin(lat);
    // z = mag * Math.sin(long) * Math.cos(lat);

    // return new Vector3(-x, y, z);
}