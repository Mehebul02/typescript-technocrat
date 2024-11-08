{
    // Base class
class Person {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  // Derived class
  class Employee extends Person {
    employeeId: number;
  
    constructor(name: string, age: number, employeeId: number) {
      // Call the constructor of the base class
      super(name, age);
      this.employeeId = employeeId;
    }
  
    displayEmployeeInfo(): void {
      // Access method from the base class
      this.displayInfo();
      console.log(`Employee ID: ${this.employeeId}`);
    }
  }
  
  // Usage
  const employee = new Employee("John Doe", 30, 1234);
  employee.displayEmployeeInfo();
  
}