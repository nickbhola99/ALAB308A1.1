//ALAB 308A.1.1
function recur(){
    counter+=1;
    recur()
}
var counter = 0;
try{
    recur()
}
catch(error){
    console.log(error + " " + counter);
}   

// let counter = 0;
// function increment(){
//     try{
//         counter += 1;
//         increment();
//     }
//     catch (e) {
//         console.log(counter);
//         console.error(e + counter);   
//     }
// }
// increment()