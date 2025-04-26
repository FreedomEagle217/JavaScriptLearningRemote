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
let person1 = new Person("Dimmsdale", "Dimmadome");
person1.greet();
let person2 = new Person();
person2.greet();