import { SphereBufferGeometry, MeshBasicMaterial, Color, Mesh, BoxGeometry, Matrix4, Vector3, TextureLoader, AxesHelper, GridHelper, Clock, Geometry, Line, LineBasicMaterial, EllipseCurve, CatmullRomCurve3, BufferGeometry, QuadraticBezierCurve3, LineCurve3 } from 'three';
import { Bird } from './bird';
import { BirdData } from '../interfaces/data';

export class Globe {

    private radius = 100;

    private geometry: SphereBufferGeometry;
    private material: MeshBasicMaterial;
    public object: Mesh;
    private birdObjects = [];

    private loader = new TextureLoader();
    // private clock = new Clock(false);
    // private completed = false;

    constructor(private data?: any) {
        const color = '#87ceeb';
        this.geometry = new SphereBufferGeometry(this.radius, 32, 32);
        this.material = new MeshBasicMaterial({map: this.loader.load('assets/Albedo.png')});
        // this.material.wireframe = true;
        this.object = new Mesh(this.geometry, this.material);

        this.object.add(new AxesHelper(200));
        this.object.add(new GridHelper(240, 12));

        // this.object.applyMatrix(new Matrix4().makeScale(1.0, 1.0, 1.1)); // Makes the sphere ellipsoid 🤷 how not yet learned deep enough.

        let redMaterial = new MeshBasicMaterial({color: '#ff0000'});
        // let greenMaterial = new MeshBasicMaterial({color: '#00ff00'});
        // let blueMaterial = new MeshBasicMaterial({color: '#0000ff'});
        // let yellowMaterial = new MeshBasicMaterial({color: '#ffff00'});

        if(data && data.birdData) {
            data.birdData.subscribe((data: BirdData) => {

                // console.log(data);

                let material = new LineBasicMaterial({color: '#ffffff'});

                // line
                // let geometry = new Geometry();
                // geometry.vertices.push(new Vector3(100,0,0), new Vector3(-100, 0, 0), new Vector3(-100, 100, 0))
                // let line = new Line(geometry, material);
                // this.object.add(line);

                // ellipse curve
                // let curve = new EllipseCurve(0, 0, 110, 110, Math.PI / 2, Math.PI , false, Math.PI);
                // let geometry = new Geometry().setFromPoints(curve.getPoints(5));
                // let line = new Line(geometry, material);
                // this.object.add(line);

                // Catmull Rom Curve
                // let curve = new CatmullRomCurve3( [
                //     // new Vector3( 100, 0, 0 ),
                //     // new Vector3( 0, 100, 0 ),
                //     // new Vector3( 0, 0, 100 )
                //     new Vector3(110, 0, 0),
                //     new Vector3(110 * Math.cos(45 * (Math.PI / 180)), 110 * Math.sin(45 * (Math.PI / 180)), 0),
                //     new Vector3(0, 110, 0),
                //     new Vector3(0, 100, 100),
                //     new Vector3(0, 0, 110)
                // ], true, 'catmullrom');
                
                // Quadratic Bezier Curve
                // var curve = new QuadraticBezierCurve3(
                //     new Vector3(100, 0, 0),
                //     new Vector3(100, 0, 100),
                //     new Vector3(0, 0, 100)
                // );
                
                // Line Curve
                // let curve = new LineCurve3(new Vector3(100, 0, 0), new Vector3(0, 0, 100));

                // console.log(new Vector3(150 * Math.cos(45 * (Math.PI / 180)), 150 * Math.sin(45 * (Math.PI / 180)), 0));
            
                // let points = curve.getPoints( 50 );
                // let geometry = new BufferGeometry().setFromPoints( points );
                // let curveObject = new Line( geometry, material );
                // this.object.add(curveObject);

                // let width = 2; // temp
                // let bird = new Bird(data, {geometry: new BoxGeometry(width, width, width), material: redMaterial});
                // this.birdObjects.push(bird);
                // this.object.add(bird.object);
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
            this.birdObjects.forEach(child => { child.update() });
            this.object.rotateY(0.001);
        };
    }
}
