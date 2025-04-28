//  Friday April 25, 2025  11:07 a.m.   Christopher Jacobo

/*
                        CLASSES
    This file deals with the basics of classes in JavaScript
*/

// Classes vs Function creation - similar but OOP makes it better
// * Better
class Person{
    #firstName;
    #lastName;

    constructor(firstName="John", lastName="Smith"){
        this.#firstName = firstName;
        this.#lastName = lastName;
    }

    setFirstName(firstname){
        this.#firstName = firstname;
    }

    getFirstName(){ 
        return this.#firstName;
    }

    setLastName(lastname){ this.#lastName = lastname; }
    getLastName(){ return this.#lastName; }

    greet(){
        //  NOTE: for JavaScript, when referring to a method within the same class,
        //      one must use this.fellowMethodName()  
        //      Without this    , method says it's "undefined"
        var name = this.getFirstName() + " " + this.getLastName();
        console.log("Hi there, I'm " + name);
    }
}
// Create two instances with just one class
let person1 = new Person("Dimmsdale", "Dimmadome");
person1.greet();
let person2 = new Person();
person2.greet();
                        // NOTE: methodName() is necessary ie, parenthesis necessary
let personFName = person2.getFirstName();
console.log(personFName);

// Inheritence
class Employee extends Person{
    #idNumber;

    constructor(firstName="John", lastName="Smith", idNumber="00001"){
        super(firstName, lastName);
        this.#idNumber = idNumber;
    }

    setIDNumber(idNumber){ this.#idNumber = idNumber; }
    getIDNumber(){ return this.#idNumber; }

    calculatePay(){ return 25000; }
    greet(){
        super.greet();
        console.log("\nMy ID Number is: " + this.getIDNumber());
    }
}

let employee3 = new Employee();
console.log( employee3.greet() + "\n\tPay: " + employee3.calculatePay() );

//      Prototypes

// If you need to quickly change something about a class, we can access the "prototype"
//      property inherent to all classes (since they descend from class Object)
//      It's sort of a quick fix, a band-aid when we don't have access to the actual
//      javascript classes
Employee.prototype.stateDepartmentIn = function() {
    console.log("Hi, I'm in the State department");
}
employee3.stateDepartmentIn();
