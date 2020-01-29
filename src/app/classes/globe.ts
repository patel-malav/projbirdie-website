import { SphereBufferGeometry, MeshBasicMaterial, Color, Mesh, BoxGeometry, Matrix4, Vector3, TextureLoader, AxesHelper, GridHelper, Clock } from 'three';
import { Bird } from './bird';
import { translateLatLong } from './functions';

export class Globe {

    private radius = 100;

    private geometry: SphereBufferGeometry;
    private material: MeshBasicMaterial;
    public object: Mesh;
    private childObjects = [];

    private loader = new TextureLoader();
    // private clock = new Clock(false);
    // private completed = false;

    constructor() {
        const color = '#87ceeb';
        this.geometry = new SphereBufferGeometry(this.radius, 32, 32);
        this.material = new MeshBasicMaterial({map: this.loader.load('assets/Albedo.png')});
        // this.material.wireframe = true;
        this.object = new Mesh(this.geometry, this.material);

        this.object.add(new AxesHelper(200));
        this.object.add(new GridHelper(240, 12));

        // this.object.applyMatrix(new Matrix4().makeScale(1.0, 1.0, 1.1)); // Makes the sphere ellipsoid 🤷 idk how not yet learned deep enough.

        let redMaterial = new MeshBasicMaterial({color: '#ff0000'});
        // let greenMaterial = new MeshBasicMaterial({color: '#00ff00'});
        // let blueMaterial = new MeshBasicMaterial({color: '#0000ff'});
        // let yellowMaterial = new MeshBasicMaterial({color: '#ffff00'});

        // temp location is my home
        let lattitude = 23.0706, longitude = -72.5544, width = 2;
        let bird = new Bird({lattitude: lattitude, longitude: longitude}, {geometry: new BoxGeometry(width, width, width), material: redMaterial});
        this.childObjects.push(bird);
        this.object.add(bird.object);
    }

    get update() {
        return () => {
            this.childObjects.forEach(child => { child.update() });
            this.object.rotateY(0.001);
        };
    }
}
