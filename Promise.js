function Async1 (){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data 1");
            resolve("Success");},2000);
    });
}

function Async2 (){
    return new Promise((resolve,reject) => {
        setTimeout(()=>{
            console.log("Data 2");
            resolve("Success");},2000);
    });
}

console.log("Fetching Data 1 ......!");
let p1=Async1();
p1.then((res) =>{
    console.log(res)
    console.log("Fetching Data 2 ....!")
let p2 = Async2();
p2.then((res) =>{
    console.log(res);
});
});
