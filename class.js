class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  const john = new Person("John", 25);
john.sayHello(); 
class Student extends Person {
    constructor(name, age, grade) {
      super(name, age);
      this.grade = grade;
    }
  
    study() {
      console.log(`${this.name} is studying for the exams.`);
    }
  }
  const jane = new Student("Jane", 20, 12);
jane.sayHello(); 
jane.study();  