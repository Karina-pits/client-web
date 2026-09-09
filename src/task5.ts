interface Shape {
    getArea(): number;
    getPerimeter(): number;
    scale(factor: number): void;
}

class Circle implements Shape {
    constructor(public radius: number) {}

    getArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    getPerimeter(): number {
        return 2 * Math.PI * this.radius;
    }

    scale(factor: number): void {
        this.radius *= factor;
    }
}

class Rectangle implements Shape {
    constructor(public width: number, public height: number) {}

    getArea(): number {
        return this.width * this.height;
    }

    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    scale(factor: number): void {
        this.width *= factor;
        this.height *= factor;
    }
}

class Triangle implements Shape {
    constructor(
        public sideA: number,
        public sideB: number,
        public sideC: number
    ) {}

    getPerimeter(): number {
        return this.sideA + this.sideB + this.sideC;
    }

    getArea(): number {
        const p = this.getPerimeter() / 2;
        return Math.sqrt(
            p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)
        );
    }

    scale(factor: number): void {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}

const shapes: Shape[] = [
    new Circle(5),
    new Rectangle(10, 20),
    new Triangle(3, 4, 5)
];

shapes.forEach((shape) => shape.scale(2));

const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
const totalPerimeter = shapes.reduce(
  (sum, shape) => sum + shape.getPerimeter(),
  0
);

console.log(`Загальна площа всіх фігур: ${totalArea.toFixed(2)}`);
console.log(`Загальний периметр всіх фігур: ${totalPerimeter.toFixed(2)}`);