export function translateLatLong(lat: number, long: number, alti = 0, radius = 100) {
    let posX = 0, posY = 0, posZ = 0;
    const radian = Math.PI / 180, mag = alti +  radius;
    lat *= radian;
    long *= radian;
    // let f = 0; // flatting
    
    posX = mag * Math.cos(lat) * Math.cos(long);
    posY = mag * Math.sin(lat);
    posZ = mag * Math.sin(long) * Math.cos(lat);

    return {posX, posY, posZ};
}