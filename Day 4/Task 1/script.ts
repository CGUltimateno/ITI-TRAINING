// 1-TYPES

var a = 57;
var b = "ahmed";
var c = true;
var d = [1, 2, 3, 4];
var e = ["a", "b", "c"];
var f = [5, "ahmed", false];

// 2-union types and intersection types
var w: (string | number);
w = 5;

// 3-Function with typed arguments and return type.
function sum(x: number, y: number): number {
    return x + y;
}

//4- Enum in typescript
enum color { red, green, blue };

// 5-Interfaces & classes & inheritance
class Color {
    name: string;
    constructor(n: string) {
        this.name = n;
    }
    showColor() {
        console.log(this.name);
    }
}
interface Color{
    showColor(): void;
}

class Red extends Color {
    constructor() {
        super("red");
    }
}
class Green extends Color {
    constructor() {
        super("green");
    }
}
var r = new Red();
var g = new Green();
r.showColor();
g.showColor();
console.log(color.red);
console.log(color.green);

// 6-Generics
function genericFunction<T>(argument: T): T[] {
    var arrayOfT: T[] = [];
    arrayOfT.push(argument);
    return arrayOfT;
}
var arrayFromString = genericFunction<string>("beep");
console.log(arrayFromString[0]);

// 7-Modules
module Shapes {
    export class Rectangle {
        constructor(public height: number, public width: number) { }
    }
}
import shapes = Shapes.Rectangle;


