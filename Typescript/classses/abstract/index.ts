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

/*********************************** Theory End *************************************************/
/********************************** Practical  *************************************************/
type Holiday={
    date : Date;
    reason:string;
}
type Holidays = Holiday[];
abstract class Department{
    protected  abstract holidays:Holidays
    protected constructor(protected name:string){}
    public addHolidays(holidays:Holidays)
    {
        if(Array.isArray(holidays))
        {
            for(const holiday of holidays)
            {
                this.holidays.push(holiday);
            }
        }
    }
    public abstract printHolidays():void

    // public printHolidays()
    // {
    //     if(this.holidays.length===0)
    //     {
    //         return "No Holidays available";
    //     }
    //     console.log("Here is the List of Holidays")
    //     for (const holiday of this.holidays) 
    //         {
    //             console.log(`Holiday on ${holiday.date} on occasion of ${holiday.reason}`)
    //         }
        
    // }

}
class ITDepartment extends Department
{
    protected holidays: Holidays=[];
    constructor(){
        super("IT Department")
    }
    public printHolidays()
    {
        if(this.holidays.length===0)
        {
            return "No Holidays available";
        }
        console.log("Here is the List of Holidays of IT Department")
        for (const holiday of this.holidays) 
            {
                console.log(`Holiday on ${holiday.date} on occasion of ${holiday.reason}`)
            }
        
    }

}
class AdminDepartment extends Department
{
    protected holidays: Holidays=[];
    constructor()
    {
        super("Admin Department");
    }
    public printHolidays()
    {
        
        if(this.holidays.length===0)
        {
            return "No Holidays available";
        }
        console.log("Here is the List of Holidays of Admin Department")
        for (const holiday of this.holidays) 
            {
                console.log(`Holiday on ${holiday.date} on occasion of ${holiday.reason}`)
            }
        
    }

}
/** Problem with public constructor  in abstract class*/
//let itDepartment= new ITDepartment("IT Department");
//let amdinDepart = new AdminDepartment("Admin Department");

let itDepartHolidays:Holidays = [{date:new Date(2025,12,1),reason:"IT Department Day"},
    {date:new Date(2025,2,1),reason:"Labour Day"},
    
]
let adminDepartHolidays:Holidays = [{date:new Date(2025,12,1),reason:"Admin Department Day"},
    {date:new Date(2025,12,25),reason:"Chrishmis"},
    
]
let itDepartment = new ITDepartment();
let adminDepartment = new AdminDepartment();
itDepartment.addHolidays(itDepartHolidays);
adminDepartment.addHolidays(adminDepartHolidays);
console.log(itDepartment);
console.log(adminDepartment);
itDepartment.printHolidays();
adminDepartment.printHolidays();


/***  */
/*************************************Practial End ********************************************/
/****************************** Practice  *****************************************************/