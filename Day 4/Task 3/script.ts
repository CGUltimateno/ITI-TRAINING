// Make class point3D inherit class point2D and
// class point3D has z point and then calculate length with three points.

class Point2D {
    constructor(public x: number, public y: number) {}

    calculateDistance(otherPoint: Point2D): number {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}
class Point3D extends Point2D {
    constructor(public x: number, public y: number, public z: number) {
        super(x, y);
    }

    calculateDistance(otherPoint: Point3D): number {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y;
        const dz = this.z - otherPoint.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }
}

const point2D1 = new Point2D(1, 2);
const point2D2 = new Point2D(4, 6);
const distance2D = point2D1.calculateDistance(point2D2);
console.log(`2D Distance between point2D1 and point2D2 is: ${distance2D}`);

const point3D1 = new Point3D(1, 2, 3);
const point3D2 = new Point3D(4, 6, 9);
const distance3D = point3D1.calculateDistance(point3D2);
console.log(`3D Distance between point3D1 and point3D2 is: ${distance3D}`)