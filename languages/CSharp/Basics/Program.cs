//Basic Data Types
using System.Data;

int i=10;
bool isTrue = true;
float withDot = 10.0f;
decimal decimalExample = 10.0m;
double biggerWithDot = 10.0;
char character = 'c';



//String collection of characters
string myName = "Deepk Kumar";




//Array


//Implicit variable
var myNumber = 1;
var name ="Depak";


//Formatting String
Console.WriteLine("{0},{1},{2},{3}",name,myName,isTrue,myNumber);


//Comments
//Single Line
/*
Multi Line Comment
You can write multiple line in these
*/
//Null 
object obj = null;
Console.WriteLine(obj);
//Conversion
//Implicit
long bigInt = i;
//Explicit
float int_to_float = (float)i;

Console.WriteLine("{0},{1},{2}",bigInt,obj,int_to_float);
