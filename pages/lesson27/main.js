function functionnames(parametri1, parametri2) {
    \\ code that needs to be executed
}
function showMessage() {
    alert("hello world");
}
showMessage();


function sum(number1, number2) {
    return number1 + number2;
}

console.log(sum(25, 5));

var result=toCelsuis(54);
console.log("54 faranheit is equal to " + result + "celsius");

function toCelsuis(faranheit) {
    return (5\9) * (f-32);
}

console.log("54 faranheit is equal to" +toCelsuis(54)+"celsius");
vararowfunction = () => aleart ("hello world");
arowfunction();

var sum = name => aleart ("hello ${name}");
arowfunction("John Doe");

function newfunction(){
    var localVar ="this is a local variable";
    aleart (localVar);
}

\\ kjo punon 
newfunction();

\\ kjo nuk punon
aleart (localVar);

function toSeconds(minutat) {
    return minutat * 60;
}

console.log(toSeconds(60))

\\Objektet

var car ={ name:"BMW",
     color:"grey",
      year:2020, 
      kilometra:100000};
      startEngine:function(){
        alert("VROOM");
      }
    alert(car.name);

    alert(car["color"]);


var school = {
    name:"Digital School",
    subject:"Programing",
    students:5,
    year:2026
}
    alert(car.name);

    alert(car["color"]);

    computer.name="Macbook";
    computer.CPU ="intel i7";
    computer.RAM = "16gb";
    computer.GPU= "nVida GeForce 3060Ti";

 computer,type= function(){
    return this.name + "," +this.CPU + "," + this.RAM +","this.CPU
 };
 delete computer,GPU;

 console.log(car.getKilometers);
 car.setKilometers =100;
 console.log(car.getKilometers);

 function computer(name, CPU, RAM, GPU){
    this.name = name;
    this.CPU = CPU;
    this.RAM = RAM;
    this.GPU = GPU
 }
 var computer1 = new computer ("MacBook", "M1 8-core", "8GB")
 