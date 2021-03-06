import { Mesh, Material, Object3D, Geometry, Clock } from 'three';
import { BirdData } from '../interfaces/data';
import { translateLatLong } from './functions';


export class Bird {

    public object: Mesh;
    private clock = new Clock(false);
    private completed = false;

    constructor(private data: any, {geometry, material, model = null}) {
        if(!!model) {
            let body = model.getObjectByName('hum_body');
            body.material = material;
            this.object = model;
        } else {
            this.object = new Mesh(geometry, material);
        }
        // console.log(data);

        let temp = translateLatLong(data.lattitude, data.longitude, 10);
        // console.log(temp);
        this.object.position.copy(temp);
    }

    get update() {
        return () => {
            // this.object.rotateX(0.02);
            // this.animateTrajectory();
        }
    }

    private animateTrajectory() {
        // if(!this.clock.running && !this.completed) {
        //     this.clock.start();
        // }

        // let speed = 16;
        // let time = this.clock.getElapsedTime() * speed;

        // if(time < 360) {
        //     let temp = translateLatLong(this.data.lattitude, this.data.longitude + time, 5);
        //     this.object.position.set(temp.posX, temp.posY, temp.posZ);
        // } else {
        //     this.clock.stop();
        //     this.completed = true;
        // }
    }
}