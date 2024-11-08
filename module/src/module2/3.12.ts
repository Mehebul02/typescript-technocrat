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

    const getSleepHours(param:Person)=>{
        param.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()

    getSleepHours(person1)
    getSleepHours(person2)
    getSleepHours(person3)
}