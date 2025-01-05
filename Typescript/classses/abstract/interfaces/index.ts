/*********************************** Theory ****************************************************
 ** What we cover 
 * Static Properties : What are the staic properties of a class along with real work examples of static properties already use in JavaScript
 * abastract classes : Everything about abstract classes and how are they different from normal classes along with examples of inheritance and their use with child classes
 * * All about Interfaces
 * introduction : An Interface is a Binding Contract Between Two or More Components of an Application.
 *   Example USB interface
 *           User interfce
 * In Typescript a interface can extends multiple interfaces
 * Create interface : use keyworkd interface followed by interface name and {} object lieteral with properties and methods 
 * Extending interfacs using extends keyword
 * multiple inheritance : 
 * generics with interfaces
 * multiple types as generics
 * classes & Interfaces
 * access modifiers with interfaces
 * Declaration Merging Interfaces : You have one interface exmple IUser with two properties and you want to add another property in it. you can declare same intrace again with that property and typescript treat both declaration as single unit and add new added property in same interface and implement go impacted
 * Difference between type and interface
 *    type you can create unions and intersection
 *    type can tuples
 *    Declarton merging is not possible in type
 *    Types can't extends each anothers
 *    with type multiple inheritance not available
 * * Difference between abstract classes and interfaces
 *      interface can't contains method implementation but abstract able to do that
 *      Interface  suport multiple intherence but abastract class not
 *      type we can implement static classes
 */

/*********************************** Theory End *************************************************/
/********************************** Practical  *************************************************/
interface Person  {
    name:string,
    age:number

}
interface Student extends Person {
        rollNo:number;
        class:string;
        testing?:string,
        readonly testing1:string
}

let student:Student = {name:"Deepak",age:10,rollNo:10,class:"B.Tech",testing1:"I am readOnly"};
console.log(student.age);
console.log(student.testing1);
//student.testing1="Hello";

/** Multiple Inheritance */
interface Wheel 
{
    radious:string;

}
interface Stairing
{
    name:string,
    size:number

}
interface Engine
{
    tark:number
    power:number
}
interface Company
{
    name:string

}
interface Car extends Wheel,Stairing,Engine,Company{
        model:string

}

let car :Car = {radious:"45",size:10,tark:23,power:45,name:"Honda",model:"Elevate"}

/** Generics  */

enum Colors {
    RED="Red",
    GREEN="Green",
    PURPLE="Purple"

}
enum Companies {
    HONDA="Honda",
    MG="MG",
    BYOD="BYOD"
}
enum Enginges {
    ONE="ONE",
    TWO="TWO"
}
interface BrandedCar<T,C,E> {
    company:T;
    colors : C[];
    engine: E;


}

let ferrair: BrandedCar<Companies,Colors,Enginges> = {company:Companies.BYOD,colors:[Colors.GREEN,Colors.GREEN],engine:Enginges.ONE};
let bmw : BrandedCar<string,string,string> = {company:"Honda",colors:["RED","Green"],engine:"Tark One"}
//Classes With interface 

class MyClass implements Engine,Wheel,Stairing
{
    tark: number;
    power: number;
    name: string;
    size: number;
    radious: string;
    constructor(tark:number,power:number,radius:string,name:string,size:number,radious:string){
        this.tark = tark;
        this.power = power;
        this.name=name;
        this.size=size;
        this.radious = radious;
    }
   
    printMyClass(){
       console.log(`Name : ${this.name} Power : ${this.power} Size: ${this.size} radious: ${this.radious} Trak: ${this.tark}`);
    }
    
    
}

let myClass  = new MyClass(10,20,"10","Honda",10,"Good");
myClass.printMyClass();


//Declaration Merging Interfaces

interface IUser {
    name:string;
}
interface IUser
{
    age:number;
}

class User implements IUser{
     name: string;
    age: number;
    constructor(name:string,age:number)
    {
        this.name =name;
        this.age=age
    }
   
}




/***  */
/*************************************Practial End ********************************************/
/****************************** Practice  *****************************************************/