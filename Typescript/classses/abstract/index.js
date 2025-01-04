/*********************************** Theory ****************************************************
 ** What we cover
 * Static Properties : What are the staic properties of a class along with real work examples of static properties already use in JavaScript
 * abastract classes : Everything about abstract classes and how are they different from normal classes along with examples of inheritance and their use with child classes
 * *All About Abstract Classes
 *  Abstract class :
 *      Can't create instace of the class mean can't use new keyword with abstract class
 *      Only used to create subclasses
 *      it can contain abstract method and propeties
 *      abstract members and methods need to be implmeented by child classes of abstract class
 *      Example : Use case lets create a abstract class for department with
 *                abstract property of holidays
 *                shared method of addHolidays(holidays:Holidays)
 *                Expectation :
 *                              Departent name can't be changed
 *
 * Shared methods
 * constructur methods
 * abstract properties
 * abstract methods
 * method overriding
 * inheritance
 * * All about Interfaces
 * introduction
 * multiple inheritance
 * generics with interfaces
 * multiple types as generics
 * classes & Interfaces
 * access modifiers with interfaces
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.addHolidays = function (holidays) {
        if (Array.isArray(holidays)) {
            for (var _i = 0, holidays_1 = holidays; _i < holidays_1.length; _i++) {
                var holiday = holidays_1[_i];
                this.holidays.push(holiday);
            }
        }
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment() {
        var _this = _super.call(this, "IT Department") || this;
        _this.holidays = [];
        return _this;
    }
    ITDepartment.prototype.printHolidays = function () {
        if (this.holidays.length === 0) {
            return "No Holidays available";
        }
        console.log("Here is the List of Holidays of IT Department");
        for (var _i = 0, _a = this.holidays; _i < _a.length; _i++) {
            var holiday = _a[_i];
            console.log("Holiday on ".concat(holiday.date, " on occasion of ").concat(holiday.reason));
        }
    };
    return ITDepartment;
}(Department));
var AdminDepartment = /** @class */ (function (_super) {
    __extends(AdminDepartment, _super);
    function AdminDepartment() {
        var _this = _super.call(this, "Admin Department") || this;
        _this.holidays = [];
        return _this;
    }
    AdminDepartment.prototype.printHolidays = function () {
        if (this.holidays.length === 0) {
            return "No Holidays available";
        }
        console.log("Here is the List of Holidays of Admin Department");
        for (var _i = 0, _a = this.holidays; _i < _a.length; _i++) {
            var holiday = _a[_i];
            console.log("Holiday on ".concat(holiday.date, " on occasion of ").concat(holiday.reason));
        }
    };
    return AdminDepartment;
}(Department));
/** Problem with public constructor  in abstract class*/
//let itDepartment= new ITDepartment("IT Department");
//let amdinDepart = new AdminDepartment("Admin Department");
var itDepartHolidays = [{ date: new Date(2025, 12, 1), reason: "IT Department Day" },
    { date: new Date(2025, 2, 1), reason: "Labour Day" },
];
var adminDepartHolidays = [{ date: new Date(2025, 12, 1), reason: "Admin Department Day" },
    { date: new Date(2025, 12, 25), reason: "Chrishmis" },
];
var itDepartment = new ITDepartment();
var adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itDepartHolidays);
adminDepartment.addHolidays(adminDepartHolidays);
console.log(itDepartment);
console.log(adminDepartment);
itDepartment.printHolidays();
adminDepartment.printHolidays();
/***  */
/*************************************Practial End ********************************************/
/****************************** Practice  *****************************************************/ 
