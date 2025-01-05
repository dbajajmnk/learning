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
 * multiple inheritance :
 * generics with interfaces
 * multiple types as generics
 * classes & Interfaces
 * access modifiers with interfaces
*/
var student = { name: "Deepak", age: 10, rollNo: 10, class: "B.Tech", testing1: "I am readOnly" };
console.log(student.age);
console.log(student.testing1);
var car = { radious: "45", size: 10, tark: 23, power: 45, name: "Honda", model: "Elevate" };
/** Generics  */
var Colors;
(function (Colors) {
    Colors["RED"] = "Red";
    Colors["GREEN"] = "Green";
    Colors["PURPLE"] = "Purple";
})(Colors || (Colors = {}));
var Companies;
(function (Companies) {
    Companies["HONDA"] = "Honda";
    Companies["MG"] = "MG";
    Companies["BYOD"] = "BYOD";
})(Companies || (Companies = {}));
var Enginges;
(function (Enginges) {
    Enginges["ONE"] = "ONE";
    Enginges["TWO"] = "TWO";
})(Enginges || (Enginges = {}));
var ferrair = { company: Companies.BYOD, colors: [Colors.GREEN, Colors.GREEN], engine: Enginges.ONE };
var bmw = { company: "Honda", colors: ["RED", "Green"], engine: "Tark One" };
//Classes With interface 
var MyClass = /** @class */ (function () {
    function MyClass(tark, power, radius, name, size, radious) {
        this.tark = tark;
        this.power = power;
        this.name = name;
        this.size = size;
        this.radious = radious;
    }
    MyClass.prototype.printMyClass = function () {
        console.log("Name : ".concat(this.name, " Power : ").concat(this.power, " Size: ").concat(this.size, " radious: ").concat(this.radious, " Trak: ").concat(this.tark));
    };
    return MyClass;
}());
var myClass = new MyClass(10, 20, "10", "Honda", 10, "Good");
myClass.printMyClass();
/***  */
/*************************************Practial End ********************************************/
/****************************** Practice  *****************************************************/ 
