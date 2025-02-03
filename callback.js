setTimeout(doSomething,2000);

function doSomething(){
    console.log("Demonstrating the callbacks");
}
console.log("The application is started");

// sama anonyymi funktiona
setTimeout(function(){
    console.log("ANONYYMI: Demonstrating the callbacks");
},2000);
console.log("The application is started");

// sama nuolifunktiolla 
setTimeout(()=>{
    console.log("NUOLI: Demonstrating the callbacks");
},2000);
console.log("The application is started");