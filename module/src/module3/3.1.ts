
{

    // oop class 

    class Animal {
        // public name: string;
        // public species: string
        // public sound: string
// perimeter property 
        constructor( public name: string, public species: string,public sound: string) {
            // this.name = name;
            // this.species = species;
            // this.sound = sound
        }

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const dog = new Animal('German sheparad', 'dog', 'Ghew Ghew')
    const cat = new Animal('Biral', 'Cat', 'Mew Mew')

    dog.makeSound()

}