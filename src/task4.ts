interface Animal {
    name: string;
    age: number;

    canWalk?: boolean;
    canFly?: boolean;
    camSwim?: boolean;

    move(): void;
}

class Cat implements Animal {
    name: string;
    age: number;
    canWalk: boolean = true;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} ходить і бігає на чотирьох лапках`);
    }
}

class Bird implements Animal {
    name: string;
    age: number;
    canWalk: boolean = true;
    canFly: boolean = true;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} літає  повітрі та ходить на двох лапках`);
    } 
}

class Fish implements Animal {
    name: string;
    age: number;
    canSwim: boolean = true;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    move(): void {
        console.log(`${this.name} плаває у воді`);
    }
}

const myCat = new Cat("Мурчик", 3);
const myBird = new Bird("Кеша", 2);
const myFish = new Fish("Немо", 1);

myCat.move();
myBird.move();
myFish.move();