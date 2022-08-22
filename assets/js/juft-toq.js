let raqam=prompt("raqam kiriting")

function isOdd(num){
    return num%2;
}

let obj=["Bu juft raqam","Bu toq raqam"]

console.log(obj[isOdd(raqam)]);