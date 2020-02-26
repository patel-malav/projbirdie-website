import { SphereBufferGeometry, MeshBasicMaterial, Color, Mesh, BoxGeometry, Matrix4, Vector3, TextureLoader, AxesHelper, GridHelper, Clock, Geometry, Line, LineBasicMaterial, EllipseCurve, CatmullRomCurve3, BufferGeometry, QuadraticBezierCurve3, LineCurve3, Object3D, MeshStandardMaterial } from 'three';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { Bird } from './bird';
import { BirdData } from '../interfaces/data';
import { translateLatLong } from './functions';
import { Track } from './track';

export class Globe {

    private radius = 100;

    private geometry: SphereBufferGeometry;
    private material: MeshBasicMaterial;
    public object: Mesh;
    private birdObjects = [];
    private trackObjects = [];

    private loader = new TextureLoader();
    private clock = new Clock(false);
    private completed = false;
    box: Mesh;

    constructor(private data?: any) {
        const color = '#87ceeb';
        this.geometry = new SphereBufferGeometry(this.radius, 32, 32);
        // this.material = new MeshBasicMaterial({map: this.loader.load('assets/Albedo.png')});
        this.material = new MeshBasicMaterial({map: this.loader.load(`https://i.imgur.com/45naBE9.jpg`)});
        // this.material = new MeshBasicMaterial({color: '#ff00ff'});
        // this.material.wireframe = true;
        this.object = new Mesh(this.geometry, this.material);

        // this.object.add(new AxesHelper(200));
        // this.object.add(new GridHelper(240, 12));

        // this.object.applyMatrix(new Matrix4().makeScale(1.0, 1.0, 1.1)); // Makes the sphere ellipsoid 🤷 how not yet learned deep enough.

        let redMaterial = new MeshStandardMaterial({color: '#ff0000'});
        let greenMaterial = new MeshBasicMaterial({color: '#00ff00'});
        // let blueMaterial = new MeshBasicMaterial({color: '#0000ff'});
        // let yellowMaterial = new MeshBasicMaterial({color: '#ffff00'});

        if(data && data.birdData) {
            data.birdData.subscribe((data: BirdData) => {

                // console.log(data);

                let material = new LineBasicMaterial({color: '#ffffff'});
                let track = new Track(data.path, {material});

                if(track.object) {
                    this.trackObjects.push(track);
                    this.object.add(track.object);
                }

                try {
                    let loader = new OBJLoader2();
                    loader.load('../../assets/HUMBIRD.OBJ', (obj: Object3D) => {
                        obj.scale.set(200, 150, 200);
                        let bird = new Bird(data.position, {model: obj, geometry: null, material: redMaterial});
                        if(bird.object) {
                            // bird.object.add(new AxesHelper(0.1));
                            this.birdObjects.push(bird);
                            this.object.add(bird.object);
                        }
                    }, null, null, null);
                } catch(e) {
                    console.log('img not loaded' + e);
                }
            });
        }
    }

    unsubscribe() {
        if(this.data && this.data.birdData) {
            this.data.birdData.unsubscribe();
        }
    }

    get update() {
        return () => {
            if(this.data.rotate) {
                this.object.rotateY(0.001);
            }
            this.birdObjects.forEach(child => { child.update() });
            this.move(this.birdObjects[0], this.trackObjects[0]);
        };
    }

    private move(bird: Bird, track: Track) {
        if(bird && track && track.curvePath) {
            if(!this.clock.running && !this.completed) {
                this.clock.start();
            }
            let speed = 0.02;
            let time = this.clock.getElapsedTime() * speed;            
            if(time < 0.99) {
                let point = track.curvePath.getPoint(time);
                bird.object.position.copy(point);
                let lookPoint = track.curvePath.getPoint(time + 0.01);
                this.object.localToWorld(lookPoint);
                bird.object.lookAt(lookPoint);
            } else {
                this.clock.stop();
                // this.completed = true;
            }
        }
    }
}
