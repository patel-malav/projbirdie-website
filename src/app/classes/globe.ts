import { SphereBufferGeometry, MeshBasicMaterial, Color, Mesh, BoxGeometry, Matrix4, Vector3, TextureLoader } from 'three';

export class Globe {

    private geometry: SphereBufferGeometry;
    private material: MeshBasicMaterial;
    public object: Mesh;

    private loader = new TextureLoader();

    private radius = 50;

    constructor() {
        
        const color = '#87ceeb';
        
        this.geometry = new SphereBufferGeometry(this.radius, 32, 32);
        this.material = new MeshBasicMaterial({map: this.loader.load('assets/Albedo.png')});
        this.material.wireframe = true;
        this.object = new Mesh(this.geometry, this.material);

        // this.object.applyMatrix(new Matrix4().makeScale(1.0, 1.0, 1.1)); // Makes the sphere ellipsoid 🤷 idk how not yet learned deep enough.

        let redMaterial = new MeshBasicMaterial({color: '#ff0000'});
        let greenMaterial = new MeshBasicMaterial({color: '#00ff00'});
        let blueMaterial = new MeshBasicMaterial({color: '#0000ff'});
        let yellowMaterial = new MeshBasicMaterial({color: '#ffff00'});

        let cubeX = new Mesh(new BoxGeometry(100, 1, 1), redMaterial);
        cubeX.position.set(0, 0, 0);
        let cubeY = new Mesh(new BoxGeometry(1, 50, 1), greenMaterial);
        cubeY.position.set(0, 25, 0);
        let cubeZ = new Mesh(new BoxGeometry(1, 1, 50), blueMaterial);
        cubeZ.position.set(0, 0, 25);

        this.object.add(cubeX, cubeY, cubeZ);

        let bird1 = new Mesh(new BoxGeometry(), yellowMaterial);
        let bird2 = new Mesh(new BoxGeometry(), redMaterial);

        let temp = Globe.translateLatLong(45, 0, 5);
        bird1.position.set(temp.x, temp.y, temp.z);
        temp = Globe.translateLatLong(-45, 0, 5);
        bird2.position.set(temp.x, temp.y, temp.z);

        this.object.add(bird1, bird2);
    }

    // I dont know how this works i need an expert help to decode this formula.
    // Explanation given @ https://de.mathworks.com/help/aeroblks/llatoecefposition.html
    // Converts latitude & longitude to cartesian coordiante system.

    static translateLatLong(lat: number, long: number, alti = 0, radius = 50) {
        const radian = Math.PI / 180;
        long *= radian;
        lat *= radian;
        let f = 0; // flatting
        let ls = Math.atan((1 - f) * (1 - f) * Math.tan(lat)); // lambda 🤷 

        let x = radius * Math.cos(ls) * Math.cos(long) + Math.cos(lat) * Math.cos(long);
        let z = radius * Math.cos(ls) * Math.sin(long) + Math.cos(lat) * Math.sin(long);
        let y = radius * Math.sin(ls) + alti * Math.sin(lat);

        return {x, y, z};
    }

    get update() {
        return () => {
            this.object.rotateY(0.001);
        };
    }
}
