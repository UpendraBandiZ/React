let age:number;
age=12;
let username:string;
username='hero';
//arrays
let hobbies:string[];
hobbies=['string1','string2','string3'];
//objects and array of objects
type Person={
    name:string;
    age:number;

};
let person:Person;
person={
    name:'max',
    age:32
};


let people:Person[];
// or 
//type inference
let course="hello welcome to course";
//course=123; error

//union
let course2:string | number="welcome to course2"
course2=123; //no error




//function types and paranmeters


function add(a:number,b:number):number
{ 
    return a+b;

}

//Generics
function insertAtBeginning<T>(array:T[],value:T)
{
    const newArray=[value,...array];
    return newArray;
}
const demoArray=[1,2,3];
const updatedArray=insertAtBeginning(demoArray,-1);

// updatedArray[0].split('');