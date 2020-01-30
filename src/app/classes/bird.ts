import { Mesh, Material, Object3D, Geometry, Clock } from 'three';
import { BirdData } from '../interfaces/data';
import { translateLatLong } from './functions';


export class Bird {

    public object: Mesh;
    private clock = new Clock(false);
    private completed = false;

    constructor(private data: BirdData, {model = null, geometry, material}) {
        if(!!model) {
            this.object = model;
        } else {
            this.object = new Mesh(geometry, material);
        }

        let temp = translateLatLong(data.position.lattitude, data.position.longitude, 10);
        this.object.position.set(temp.posX, temp.posY, temp.posZ);
        // console.log(data);

    }

    get update() {
        return () => {
            this.object.rotateX(0.02);
            this.animateTrajectory();
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