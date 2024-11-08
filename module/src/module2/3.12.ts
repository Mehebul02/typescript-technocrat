{

    // Polymorphism

  

    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hour per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hour per day`);
        }
    }

    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 6 hour per day`);
        }
    }

    const getSleepHours(param: Person) => {
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepHours(person1)
    getSleepHours(person2)
    getSleepHours(person3)



    // pi * r*r

    class Shape{
        getArea():number{
            return 0
        }
    }

    class Circle  extends Shape{
        radius: number;
        constructor(radius: number) {
            super();
            this.radius = radius
        }

        getArea(): number {
            return Math.PI * this.radius * this.radius

        }
    }

    // rectangular
    
    class Rectangle  extends Shape{
        width: number;
        height:number
        constructor(width: number, height:number) {
            super();
            this.width = width
            this.height = height
        }

        getArea(): number {
            return this.width * this.height

        }

    }
    const getShapeArea=(param:Shape)=>{
        console.log(param.getArea());
    }

    const shape1 =new Shape()
    const shape2 = new Circle(10)
    const shape3 = new Rectangle(44,88)

    getShapeArea(shape1)
    getShapeArea(shape2)
    getShapeArea(shape3)
}