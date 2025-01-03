/************************************************************Types in Typscript **********************************************************************************************************/
/**************************Theory ************************ 
 * *New Types
 *  any : if you want to achieve default behaviour of javascript then you will use any
 *  unknown : as its name suggest, in typescript when you don't know type of the variable then you will use . its much than any
 *  custom types : apart we can our own type with the of type keyword which will suit to our project aplicaiton requirement
 * * Type Terms
 *  DuckTyping : if it's walk like a duck and quake like duck. then its duck
 *  Example : 
 *       name
 *       age 
 *  Declaration : When we will declare custom type 
 *  Annotation : when we will provide the type information of variable, paramter etc. 
 *  Inference  : When typescript compiler understand the type by istself
 * * 
 *  Union type : When we will combine two or more than two types together its called union type
 *  Literal type :  you can use literal value as type
 *  Conditional type : base on condition will decide
 *               
 *  TypeCasing : Convert one type to another 
 *  Type alias  : Create custom or given name to existing primitive type is called type alias
 *                 its start from type 
 *                 name should Pascal or Upper Camel Case
 *  
 * **********************************************************************End of Theory***********************************************************/

/************************************************************************* Practical *****************************************************************/


/**any *
let test :any = 1000;
    test="hello"
    test=true
    test ={}
    test = []
    function addTwo(name:any)
    {
        return name+2; // No Complain
    }
console.log(addTwo(1))
console.log(addTwo({name:"Deepak"}))**/
/*
 *  unknown 

    function addTwo(name:unknown)
    {
        if(typeof name=='number')
        {
            return name+2; 
        }
        return "Please provide number input for operation"
       // No Complain
    }
console.log(addTwo(1))
console.log(addTwo({name:"Deepak"}))
**/
/** 
 *  custom types **/
type CustomString = string;
type CustomNumber = number;

let test:CustomString = "Deepak"
let testForCustomString : CustomString = "Name";

type Animal = {name:string
               age :number
               breed:string
}

type Cat = {name:string
    age :number
    breed:string
    meow:boolean
}

type Dog = {name:string
    age :number
    breed1:string
    breed:string
    bark:boolean
}

function printNumberOnly(p:number)
{
    console.log(p);
}
printNumberOnly(10)
//printNumberOnly("Hello");//problem

function printAnimal(animal:Animal){
    console.log(animal)
}

let animal: Animal = {name:"Lusy",
    age :2,
    breed:"don't know",
}
let dog: Dog = {name:"Lusy",
    age :2,
    breed1:"don't know",
    breed:"hello",
    bark:true
}
let cat: Cat = {name:"Lusy",
    age :2,
    breed:"don't know",
    meow:true
}

let catDogMix:CatAndDog =  {name:"Lusy",
    age :2,
    breed1:"don't know",
    bark:true,
    breed:"hello",

    
}
 catDogMix =  {
    name:"Lusy",
    age :2,
    breed:"don't know",
    meow:true,
    bark:true
    
}

printAnimal(animal)
printAnimal(dog)
printAnimal(cat)
/** inference */
let stringValue = "Deepak"
let numberValue:number= 10;


type UnionExample = number|string|boolean;
let unionTest :UnionExample = 10;
unionTest="Deepak";
unionTest=true;

type CatAndDog = Cat|Dog;
let catAndDog:CatAndDog = cat;
catAndDog = dog;

type NumberLiteral = 10|20;
let numberLiteral:NumberLiteral = 20;//Type '20' is not assignable to type '10'
type IsString = 1 extends string  ? string : number;
let isString : IsString = 1;

//let typeCateing = "Mark" as any;

let typeCateing = <any>"Mark" ;
typeCateing="Deepak";
typeCateing=10;


type User = {name:string, age :number, phone:number}


function fetchData()
{

    return {name:"Deepak", age :40, phone:931162345} as User
}

let userData = fetchData();


/******************************************     Practics  ********************************/
numberLiteral = 50  //Invalid
numberLiteral = 20  //valid
  cat = {} //Ivalid
 /* dog = {   //invalid : breed1 is missing 
    name:"Lusy",
    age :2,
     breed:"hello",
    bark:true
}
dog = {  //invalid : price is not available in Dog type
    name:"Lusy",
    age :2,
    price:100
     breed:"hello",
    bark:true
}    
    /**valid Cat
     *  Simran
     *  Kapil
     *  Manish
     *  akash
     */
    /**Invalid
     * Pankaj
     */
/*
//invalid:  age itype is number but we taking string ,breed one */
dog = {  
    name:"Lusy",
    age :345,
    breed1:"hello",
     breed:"hello",
    bark:true
}

//
//
//
//



/************************************************** */









/** 
 *  DuckTyping 
 *  Declaration 
 *  Annotation
 *  Inference  
 * * 
 *  Union type 
 *  Literal type
 *  Conditional Type
 *  TypeCasing  
 *  Type alias  

/*****************************Create a Typscript Project **********************************************************/
/** Prequistics
 *  Node js
 *  Npm 
 * * Install typscript : 
 *    npm i -g typscript
 *    tsc --verion
 * * How to create new project
 *   tsc --init 
 * * How to run a tsc project
 *   create a newfile with .ts  exension in side your project
 *    console.log("Hello world")
 *   in current project directory compile your ts file with tsc filepath
 *   above command will create a js file againt your ts file 
 *   To check the output you need to run the js file with node your javascript file name your able your project
 */


/*****************************End Typecrript Project Creation ******************************************************/
