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
 *  unknown **/
function addTwo(name) {
    if (typeof name == 'number') {
        return name + 2;
    }
    return "Please provide number input for operation";
    // No Complain
}
console.log(addTwo(1));
console.log(addTwo({ name: "Deepak" }));
/**
 *  custom types
 *  DuckTyping
 *  Declaration
 *  Annotation
 *  Inference
 * *
 *  Union type
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
