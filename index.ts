
// let num = 10;
// console.log(num);
// type Person = {
//     name: string;
// };

// const person: Person = {
//     name: "waiz",
// };
                                        //Annotation
// console.log(person.name);

// let Name: string = "waiz";
// console.log(Name);

// let no : number = 34;
// console.log(no)

// let opt : boolean = true;
// console.log(opt);
                                        //inference
// let fullname = "muhammad waiz";
// fullname = "nadeem mehfoz";
// let favno = 8;
// let tshard = true;
// console.log( fullname);
// console.log(typeof favno);
// console.log(typeof tshard);

                                     //any type  
// let colour : any  = "crimson";
// colour = 66;
// colour = false;
// console.log(colour)

                                    //function parameter Annotation
//  function addone(no:number){
//     return no+1;

//  }      
//  let res = addone(3);                             
//  console.log(res);
//  //double or more function
//  let double= (x : number,y: number)=>x/y;
//  const calc =double(30,2);
//  console.log(calc);

                            //default perm value
//  function greet(person :string ="annonomyus"){
//     return `hello ${person}`
//  }                          
//  const res = greet("waiz nadeem");
//  console.log(res); 

                            //rerutn Annotation
//  function double1(x:number) : number{
//     return x * x;
//  }               
//  const res = double1(2)
//  console.log(res);   
 
//  //arrow func
//   const double=(x:number):number => x*x;
//   const tot = double(5)
//   console.log(tot);

                              //void function   
// function printmessage(message : string) : void{
//    console.log(`"this is my message to learn and earn" ${message}`);
//    //here default void is present if there is not any void or any return value we put
// }                              
// printmessage("Message");

                                                      //never:no value store
// function throwerror(msg : string) : never{
// throw new Error(msg);
// }

// function infiniteLoop(): never{
// while(true){}
// }

// let x  : never;
// function neverreturn(): never{
//    while(true){}
// }
// x=neverreturn();

                                             //Arrays
//  const num:number[]=[1,5,9,7];
//  console.log(num);
//  const str:string[]=["one ","two ", "three"]
// console.log(str,num);

// const itemno : Array<number>=[1,2,4,5]
// console.log(itemno)

                                             //multi demensional Arrays
//   const multiarrays: number[][]=[[1,2,3,4],[4,3,2,1]]
//   console.log(multiarrays)    
//   const firstdi: number[] =[7,8,6]
//   const secondi: number[][]= [[7,8,6]] //multi demensional
// const tripledi : number[][][]= [[[7,8,6]]]
// console.log(firstdi,secondi,tripledi)


                                                //objects
// const person :{firstname: string; lastname:string;age:number} ={
//    firstname:"waiz",
//    lastname:"nadeem",
//    age:20,

// }            
// console.log(person)       

// function printdetail():{name:string; field : string; age : number}{
//    return{
//    name:"waiz",
//    field:"biotech",
//    age:20,
// }}
// const res = printdetail();
// console.log(res);

                                                //type aliases + optional properties
                                                // like ` ?` optional 
                                                // readonly :used for just one time cannot change the value
// type Class={
//    totalstudent:number;
//    HOdname?: string
//    readonly result: string
// }

// const printinfo =(MAO : Class)=>{
//    console.log(`total sdtudent in class ${MAO.totalstudent} , 
//       and hod name is ${MAO.HOdname}, and result of class is ${MAO.result} `)
// }

// const res =printinfo({totalstudent:50, HOdname:"shahbaz", result :"good result"});
// const res1 = printinfo({totalstudent:25,result:"medium"})

// console.log(res,res1);

// const printinfoofdialsingh=(dialsi:Class)=>{
//    console.log("total student" + dialsi.totalstudent
//       + "Hod name " + dialsi.HOdname
//       + "result is :" + dialsi.result
//    )
// }

// printinfoofdialsingh({totalstudent: 40, HOdname: "habibi",
//     result:"very bad"
//    })

// console.log(printinfoofdialsingh);

                                             //intersection type 
                                             // &
// type muslimid ={
//    religion:string;
//    gender:string;
// }                

// type info={
//    firstname:string;
//    secondname:string;
//    country : string;
// }
// type user = muslimid & info ;
// const waiz: user = {
//    religion: "islam",
//    gender: "male",
//    firstname: "waiz",
//    secondname: " Nadeem",
//    country: "pakistan",
// }
// console.log("religion :" + waiz.religion  
//    + "\n gender : " + waiz.gender 
//    + "\nname :" + waiz.firstname + waiz.secondname + "\ncountry :" + waiz.country 
// )
// console.log("happy birth day boy  \n may you live long");

                                                //union type
// const nu:string|number = "waiz"

// type jazz={
//    sim:string;
// }
// type ufone= {
//    card:string;
// }

// type contact = jazz|ufone;

// const call:contact ={
//    card:"jazz call ringing"
// }
// console.log(call)

// const sale:(number|boolean)[][] = [[4,2,false], [4,3]]
// console.log(sale)

                                                         //type litreal constant words|||
// let colour: "red" | "blue" | "green";
// colour = "red" 

// // colour = "black" // it give error
// console.log(colour)    

// let password : "waiz.pk" =  "waiz.pk";
// // password = "zayyan.pl" // it give erroor
// console.log(password)

                                                         //tuples
                                                         // sequence in arrays
// let uniinfo: [number , string] ;
// uniinfo = [20,"waiz"]        
// //prefer let over const
// var colinfo : [string,number];
// colinfo= ["waiz", 22]
// console.log(colinfo,uniinfo)


                                                           //Enums
                                        // we can make a constant value from this syntax
//  enum weathercondition {
//     sunny = "sunny",
//     cloudy ="cloudy",
//     rainy  = "rainy",
//     hazel = "hazel",
//  }   
 
//  const currentweather = weathercondition.hazel;
//  console.log("the currently weather condition is :" + currentweather)

                                                      // oop
                                                      //1 class
//  class person{
//    name:string;
//    age :number;
//    constructor(name:string,age:number){
//       this.name=name;
//       this.age=age;
//    }
//  }    
//  const Person = new person("waiz",20);
//  console.log(Person);   
                                                //2 access modefier
//public : inside outside class both
//private : inside class
//protected  : inside class and also in inherit class or object

// class person{
//     public name :string;
//     private lastname:string;
//     protected age:number;
//     constructor(name:string,lastname:string,age:number){
//         this.name=name;
//         this.lastname=lastname;
//         this.age = age;
//     }
//     getvlaue():string{
//         return`${this.name} ${this.lastname} ${this.age} `
//      }
//       setvalue(name:string,lastname:string,age:number):void{
//         this.name=name;
//         this.lastname=lastname;
//         this.age=age;
//       }
    
// }
// const P1 = new person("zayyan","nadeem",22);
// console.log(P1.getvlaue());
// P1.setvalue("waiz","nadeem",20)

// console.log(P1.getvlaue());

                                                        //interface
//  interface movie{
//     name:string;
//     rating:number;
//     remarks?:string;
//  }   
//  const watcher: movie ={
//     name:"pk",
//     rating:9.0,
//     // remarks:"good movie,"
//  }      
//  console.log(watcher) 
 
//  interface operation {
//   (x:number,y:number):number;
// }
// const add:operation=(a , b) => a+b;
// console.log(add(5,6));

// interface person{
//     firstname: string;
//     secondname: string;
//     age:number;
//     sayhello():void;
// }
// function greet(Person:person){
//     console.log("hello" + Person.firstname + Person.secondname)
//     Person.sayhello();
// }
// const waiz:person = {
// firstname:"waiz",
// secondname : "nadeem",
// age : 20,
// sayhello(){
//     console.log("hi there");
// },
// }
// greet(waiz);

// interface vehicle {
//     start(): void;
//     stop() : void;
// }
// class car implements vehicle{
//     start(): void {
//         console.log("the car is starting")
//     }
//     stop(): void {
//         console.log("the car is stopped")
//     }
// }
// const BMW = new car()
// BMW.start()
// BMW.stop()

                                            //declaration merging 
// interface car{
//     brand:string;
//     start() : void;
// }  
// interface car{
//     model:string;
//     stop() : void;
// }  
// const mycar :car={
// brand: "gtr",
// model: "m2",
// // start(){
// // console.log("the car is starting")
// // },
// // stop(){
// //     console.log("the car is stoppes")
// // },
// }      
// // console.log(mycar.brand),
// mycar.start() 
// // console.log(mycar.model)
// mycar.stop();                 

                                                            //generics
//  function genricstypefunc<T>(item:T,defaultvalue :T):[T,T]{
// return [item ,defaultvalue]
//  }      
 
//  const num = genricstypefunc<number>(20,21);
//  const str = genricstypefunc<string>("waiz " , "nadeem");
//  const bool = genricstypefunc<boolean>(true,true);
//  console.log(num),
//  console.log(str),
//  console.log(bool);

                                                            //type narrowing
                                                            //typeof
type Mytype = string |number;     

function example(value : Mytype) : void{
    if(typeof value === "string"){
        console.log(value.toUpperCase());
    } else{
        console.log(value.toFixed(2))
    }
}
example("waiz")
example(40)
                                                            //instance of
class dog{
    bark() : void{
    console.log("wow wow wow")
    }
}
class cat{
    bark() :void{
        console.log("meow meow")
    }
}
function animalsound(animal: dog|cat): void{
    if (animal instanceof dog){
        animal.bark()
    } else{
        animal.bark()
    }
}

const dog1 = new dog()
const cat1 = new cat()
console.log(dog1)
console.log(cat1)
animalsound(dog1)
animalsound(cat1)
                                                        // intersection
                                                        // we studied it previous "&"

                                                        