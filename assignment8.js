function myFunctionTest(expected, function2test) {
  let result = function2test();

  if (Array.isArray(expected)) {
    expected = expected.toString();
  }
  if (Array.isArray(result)) {
    result = result.toString();
  }
  if (expected === result) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + function2test();
  }
}

String.prototype.filterString = function(banned) {
  let output = "";
  for (const i of banned) {
    if (this.includes(i)) {
      let splitted = this.split(" ");
      for (const j of splitted) {
        if (i !== j) {
          output += j + " ";
        }
      }
    }
  }
  return output.trim();
};

const testCase = "this home is not nice".filterString(["not"]);

console.log(
  "Expected output filterString is : this home is nice " +
    myFunctionTest("this home is nice", function() {
      return testCase;
    })
);

Array.prototype.bubbleSort = function() {
  let arr = this;
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
  return arr;
};

const test = [6, 4, 0, 3, -2, 1];

console.log(
  "Expected output filterString is : [-2,0,1,3,4,6] " +
    myFunctionTest([-2, 0, 1, 3, 4, 6], function() {
      return test.bubbleSort();
    })
);

//Question 3 :
const Person = function(name) {
  this.name = name;
};
Person.prototype.teach = function(subject) {
  console.log(this.name + " is now teaching " + subject);
};

const teacher = new Person("Shivani");
teacher.teach("Java Core");

const PersonClass = {
  name: "",
  teach: function(subject) {
    console.log(this.name + " is now teaching " + subject);
  }
};

const teacher2 = Object.create(PersonClass);
teacher2.name = "Fabrice";
teacher2.teach("Algorithms");

//Question 4A :
class Person1 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greeting() {
    console.log(
      "Greetings, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old."
    );
  }

  salute() {
    console.log(
      "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
    );
  }
}

class Student extends Person1 {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  greeting() {
    console.log(
      "Hey, my name is " + this.name + " and I am studying " + this.major
    );
  }
}

class Professor extends Person1 {
  constructor(name, age, department) {
    super(name, age);
    this.department = department;
  }
  salute() {
    console.log(
      "Good day,my name is " +
        this.name +
        " and I am in the " +
        this.department +
        " department"
    );
  }
}

const professor = new Professor("fabrice", "22", "Compro");
const student = new Student("shivani", "29", "PhD");
professor.greeting();
professor.salute();
student.greeting();
student.salute();

const Person2 = function(name, age) {
  this.name = name;
  this.age = age;
};

console.log("-------Function Constructor-------");
Person2.prototype.greeting2 = function() {
  console.log(
    "Greetings, my name is " +
      this.name +
      " and I am " +
      this.age +
      " years old."
  );
};

Person2.prototype.salute2 = function() {
  console.log(
    "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
  );
};

const Student2 = function(name, age, major) {
  this.major = major;
  Person2.call(this, name, age, major);
};
Student2.prototype = Object.create(Person2.prototype);
Student2.prototype.greeting2 = function() {
  console.log(
    "Hey, my name is " + this.name + " and I am studying " + this.major
  );
};

const Professor2 = function(name, age, department) {
  this.department = department;
  Person2.call(this, name, age, department);
};

Professor2.prototype = Object.create(Person2.prototype);
Professor2.prototype.salute2 = function() {
  console.log(
    "Good day,my name is " +
      this.name +
      " and I am in the " +
      this.department +
      " department"
  );
};

const professor2 = new Professor2("Fabrice", "29", "Compro");
const student2 = new Student2("Shiva", "22", "PhD");
professor2.greeting2();
professor2.salute2();

student2.greeting2();
student2.salute2();
console.log("-------Object Prototype Inheritance-------");

const Person3 = {
  name: "",
  age: "",
  greeting3: function() {
    console.log(
      "Greetings, my name is " +
        this.name +
        " and I am " +
        this.age +
        " years old."
    );
  },
  salute3: function() {
    console.log(
      "Good morning!, and in case I dont see you, good afternoon, good evening and good night!"
    );
  }
};

const Student3 = Object.create(Person3);
Student3.greeting3 = function() {
  console.log(
    "Hey, my name is " + this.name + " and I am studying " + this.major
  );
};

const Professor3 = Object.create(Person3);
Professor3.salute3 = function() {
  console.log(
    "Good day,my name is " +
      this.name +
      " and I am in the " +
      this.department +
      " department"
  );
};

let professor3 = Object.create(Professor3);
professor3.name = "Fabrice";
professor3.age = "29";
professor.department = "Compro";
professor3.greeting3();
professor3.salute3();

let student3 = Object.create(Person3);
student3.name = "Shivani";
student3.age = "23";
student3.major = "MBA";
student3.greeting3();
student3.salute3();