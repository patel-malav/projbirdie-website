import { Line, Vector3, CatmullRomCurve3, Geometry, QuadraticBezierCurve3, QuadraticBezierCurve, CurvePath, Curve, CubicBezierCurve3 } from 'three';
import { geoInterpolate } from 'd3-geo';
import { translateLatLong } from './functions';
import { Coordinates } from '../interfaces/data';

export class Track {

    public object: Line;
    public curvePath: CurvePath<Vector3>;

    constructor(private data: any, {material, model=null}) {
        let geometry = new Geometry();
        if(!!model) {
            this.object = model;
        } else {
            if(this.data && this.data.length > 0) {

                // console.log(data);

                // ❌ Cubic Bezier Curve
                this.curvePath = new CurvePath();
                let segments = this.data.map(path => {

                    let startLat = path.start.lattitude, startLong = path.start.longitude;
                    let endLat = path.end.lattitude, endLong = path.end.longitude;

                    const v0 =  translateLatLong(startLat, startLong, 5);
                    const v3 = translateLatLong(endLat, endLong, 5);

                    const min_alti = 25, max_alti = 30;
                    const alti = this.clamp(v0.distanceTo(v3) * .75, min_alti, max_alti);

                    const interpolate = geoInterpolate([startLong, startLat], [endLong, endLat]);
                    let midCord1 = interpolate(0.4), midCord2 = interpolate(0.6);
                    
                    const v1 = translateLatLong(midCord1[1], midCord1[0], alti);
                    const v2 = translateLatLong(midCord2[1], midCord2[0], alti);                    
                    return {v0, v1, v2, v3};
                });
                // console.log(segments);
                segments.forEach(segment => {
                    let curve = new CubicBezierCurve3(segment.v0, segment.v1, segment.v2, segment.v3);
                    this.curvePath.add(curve);
                });
                
                // @ts-ignore
                geometry.setFromPoints(this.curvePath.getPoints(50));

                this.object = new Line(geometry, material);
            }
        }
    }

    private clamp(num, min, max) {
        return num <= min ? min : (num >= max ? max : num);
    }
}
