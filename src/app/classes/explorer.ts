import { WebGLRenderer, Scene, Camera, PerspectiveCamera, SphereGeometry, MeshPhongMaterial, Mesh, DirectionalLight, Color, Light, PointLight, BoxGeometry, Object3D, MeshBasicMaterial } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { OBJLoader2 } from 'three/examples/jsm/loaders/OBJLoader2';
import { Globe } from './globe';

export class Explorer {

    // Declaration
    private rootScene: Scene;
    private camera: PerspectiveCamera;
    private control: OrbitControls;
    private lights: Light[] = [];
    private objects = [];
    private renderer: WebGLRenderer;

    constructor(private canvas: HTMLCanvasElement, private subscriptions: any) {

        // Scene
        this.rootScene = new Scene();
        this.rootScene.background =  new Color('#000000');

        // Camera
        this.createCamera();

        // Controls
        this.createControl();

        // Lights
        this.createLights();

        // Models
        this.loadModels();

        // Objects
        this.createObjects();

        // Renderer
        this.createRenderer();

        let animate = () => { this.update(); this.render(); }
        this.renderer.setAnimationLoop(animate);
    }

    private createCamera() {
        let fov = 45;
        let aspect = 2;
        let near = 0.1;
        let far = 600;
        this.camera = new PerspectiveCamera(fov, aspect, near, far);
        let x = 0, y = 0, z = 250;
        this.camera.position.set(x, y, z);
    }

    private createControl() {
        this.control = new OrbitControls(this.camera, this.canvas);
    }

    private createLights() {
        let color = new Color('#ffffff');
        let intensity = 1;
        let distance = 100;
        // let light = new PointLight(color, intensity, distance);
        let light = new DirectionalLight(color, intensity);
        let x = -2, y = 5, z = 5;
        light.position.set(x, y, z);
        this.lights.push(light);

        this.rootScene.add(light);
    }

    private loadModels() { 
        // let loader = new OBJLoader2();
        // loader.load('assets/HUMBIRD.OBJ', (obj) => {
        //     this.rootScene.add(obj);
        //     console.log(this.rootScene.children);
        // });
    }

    private createObjects() {
        if(this.subscriptions && this.subscriptions.birdData) {
            const globe = new Globe({ birdData: this.subscriptions.birdData });
            this.objects.push(globe);
            this.rootScene.add(globe.object);
        }
    }

    private createRenderer() {
        this.renderer = new WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        // let width = 600;
        // let height = 600;
        // this.renderer.setSize(width, height);

        // this.renderer.setPixelRatio(window.devicePixelRatio);
        // this.renderer.gammaFactor = 2.2;
        // this.renderer.gammaOutput = true;

        // this.renderer.physicallyCorrectLights = true;
    }

    public unsubscribe() {
        this.objects.forEach(obj => {
            if(!!obj.unsubscribe) {
                obj.unsubscribe();
            }
        });
    }

    private update() {
        this.objects.forEach(obj => { obj.update(); });
    }

    private render() {
        
        // Adjustment to canvas resizes
        if(this.canvas.width !== this.canvas.clientWidth || this.canvas.height !== this.canvas.clientHeight) {
            this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight, false);
            this.camera.aspect = this.canvas.clientWidth / this.canvas.clientHeight;
            this.camera.updateProjectionMatrix();
        }

        this.renderer.render(this.rootScene, this.camera);
    }
}
