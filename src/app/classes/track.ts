import { Line, Vector3, CatmullRomCurve3, Geometry, QuadraticBezierCurve3, QuadraticBezierCurve, CurvePath } from 'three';
import { translateLatLong } from './functions';
import { Coordinates } from '../interfaces/data';

export class Track {

    public object: Line; 

    constructor(private data: any, {material, model=null}) {
        let geometry = new Geometry();
        if(!!model) {
            this.object = model;
        } else {
            if(this.data && this.data.length > 0) {

                // console.log(data);

                // ❌ Catmull Rom Curve
                // let points: Vector3[] = [];
                // this.data.forEach(path => {
                //     // points.push(translateLatLong(path.start.lattitude, path.start.longitude, 5));
                //     // points.push(translateLatLong(path.end.lattitude, path.end.longitude, 5));
                //     points.push(
                //         translateLatLong(0, 0, 5), 
                //         translateLatLong(22.5, 0, 5), 
                //         translateLatLong(45, 0, 5), 
                //         translateLatLong(67.5, 0, 5), 
                //         translateLatLong(90, 0, 5),
                //         translateLatLong(67.5, 90, 5),
                //         translateLatLong(45, 90, 5),
                //         translateLatLong(22.5, 90, 5),
                //         translateLatLong(0, 90, 5)
                //         );
                // });
                // let curve = new CatmullRomCurve3(points, false, null, 0);
                // geometry.setFromPoints(curve.getPoints(50));


                // ❌ Quadratic Bezier Curve
                // let points: Vector3[] = [];
                let curvePath = new CurvePath();
                let segments = this.data.map(path => {
                    let v0 = translateLatLong(path.start.lattitude, path.start.longitude, 5);
                    let v2 = translateLatLong(path.end.lattitude, path.end.longitude, 5);
                    let v1 = new Vector3().addVectors(v0, v2);
                    return {v0, v1, v2};
                });
                // console.log(segments);
                segments.forEach(segment => {
                    let curve = new QuadraticBezierCurve3(segment.v0, segment.v1, segment.v2);
                    // points.push(...curve.getPoints(50));
                    curvePath.add(curve);
                });
                // console.log(curvePath.curves);
                // @ts-ignore
                geometry.setFromPoints(curvePath.getPoints(50));
                // geometry.setFromPoints(points);

                // Cubic Bezier Curve

                this.object = new Line(geometry, material);
            }
        }
    }
    
}


        // Catmull Rom Curve
        // let curve = new CatmullRomCurve3( [
        //     // new Vector3( 100, 0, 0 ),
        //     // new Vector3( 0, 100, 0 ),
        //     // new Vector3( 0, 0, 100 )
        //     new Vector3(110, 0, 0),
        //     new Vector3(...translateLatLong(45, 0, 10)),
        //     // new Vector3(0, 110, 0),
        //     new Vector3(...translateLatLong(45, 90, 10)),
        //     new Vector3(0, 0, 110)
        // ], true);
        
        // Quadratic Bezier Curve
        // var curve = new QuadraticBezierCurve3(
        //     new Vector3(100, 0, 0),
        //     new Vector3(100, 0, 100),
        //     new Vector3(0, 0, 100)
        // );
        
        // Line Curve
        // let curve = new LineCurve3(new Vector3(100, 0, 0), new Vector3(0, 0, 100));
