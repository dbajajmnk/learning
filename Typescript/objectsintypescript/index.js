/************************************* Object in Typescript  **************************************************/
/*********************************        Theory           ****************************************************/
/* Intoduction to Objects : object properties and methods.
                properties represent by key value pair
//Strictly Type object
/* Working with Objects   : practical
/* Type Aliase for Objects : give name to type

/* Nested Objects : Object inside object
/* index signautes with Objects : similer to arrow function
/* optional properties : as it's name suggest these are optional not required
/* ReadOnly : once assigned can't be changed
/* Union Types With Objects : How to union types with object
/* Discriminating Unions : All the union types have common properties and based we can differenciate and work
/* intersecion Types : similer to union but club all the types
/*

/**************************************   Theory End  *************************************************************/
/**************************************   Practical  **************************************************************/
/* Intoduction to Objects : object properties and methods.*/
//Create Object : Using object Literal
//Using Object : 
// let user= {
//    name:"Deepak",experience:15,subjects:["Python","JavaScript"]
// }
// let user:{}= {
//    name:"Deepak",experience:15,subjects:["Python","JavaScript"]
// }
var user = {
    name: "Deepak", experience: 15, subjects: ["Python", "JavaScript"]
};
console.log(user);
// //  let deepak:Expert = {name:"Deepak",experience:15,subjects:["Python","JavaScript"]}
// //  let sonika:Expert = {name:"Sonika",experience:2,subjects:["Python","JavaScript"]}
// //  let kapil:Expert = {name:"Sonika",experience:2,subjects:["Python","JavaScript"]}
// // type Address ={houseNo:string, street:string,city:string,state:string, country:string,pin:number}
// // type Subject = {name:string,level:string}
// // type Expert = {name:string,experience:number, subjects?:Subject[],address?:Address}
//  let deepak:Expert= {name:"Deepak",experience:15,subjects:[{name:"Python",level:"JavaScript"}],address:{houseNo:"M-1401", street:"Abc", city:"Moonak",state:"Haryana",country:"India",pin:148033}}
//  let sonika:Expert = {name:"Deepak",experience:15,subjects:[{name:"Python",level:"JavaScript"}]}
//  let kapil:Expert={name:"Deepak",experience:15}
/* Working with Objects   : practical
   Type Aliase for Objects : give name to type
    Nested Objects : Object inside object
    index signautes with Objects : similer to arrow function
    optional properties : as it's name suggest these are optional not required
     ReadOnly : once assigned can't be changed
    Union Types With Objects : How to union types with object
    Discriminating Unions : All the union types have common properties and based we can differenciate and work
   intersecion Types : similer to union but club all the types*/
/**************************************** Practical End *************************************************************/
/**************************************** Practice   ***************************************************************/
//How to create object
/****************************************** Practice  **************************************************************/
/************************************** Object in  Typescript End *******************************************/ 
