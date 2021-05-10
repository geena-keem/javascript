class Animal {
    constructor(age, weight) {
        this.age = age;
        this.weight = weight;
    }

    eat() {return 'eat';}

    move() {return 'move';}
}

// 상속을 통해 Animal 클래스를 확장한 bird 클래스
class Bird extends Animal {
    fly() {return 'fly';}
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Bird);
console.log(bird instanceof Animal);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());