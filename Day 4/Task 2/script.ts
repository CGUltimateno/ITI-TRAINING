// -Create class point2D that has x and y and then create constructor in the class and
// then implement method to calculate  length between two points

class Point2D {
    constructor(public x: number, public y: number) {}

    calculateDistance(otherPoint: Point2D): number {
        const dx = this.x - otherPoint.x;
        const dy = this.y - otherPoint.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
}

// Example usage:
const point1 = new Point2D(1, 2);
const point2 = new Point2D(4, 6);
const distance = point1.calculateDistance(point2);
console.log(`Distance between point1 and point2 is: ${distance}`);