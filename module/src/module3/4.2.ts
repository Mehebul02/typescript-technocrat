{

    // inheritance in oop

    class Parent{
        name:string;
        age:number;
        address:string

        constructor(name:string, age:number, address:string) {

            this.name=name;
            this.age= age;
            this.address=address;
            
        }

        getSleep(numHours:number){
            console.log(`${this.name} will sleep for ${numHours}`);
        }

    }


    class Student extends Parent{
       
        constructor(name:string, age:number, address:string) {

         super(name, age, address)
            
        }

        getSleep(numHours:number){
            console.log(`${this.name} will sleep for ${numHours}`);
        }
    }

    const student1 = new Student('Mehebul Alif', 22 , 'Kushtia')
 


    
    class Teacher extends Parent{
        
        designation:string

        constructor(name:string, age:number, address:string, designation:string) {
            super(name,age, address)
            this.designation=designation
           
            
        }

        takeClass(numOfClass:number){
            console.log(`${this.name} will take ${numOfClass}`);
        }
    }

    const teacher = new Teacher('Mr. Teacher', 40, 'Kushtia', 'Professor')






}