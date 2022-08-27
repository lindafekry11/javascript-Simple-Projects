
var sum=0;
var avg=0;
var arr= [];

var count = Number(prompt("How many numbers you will enter? "));


for(var i=0 ; i <count ; i++){

var nums= arr.push(Number(prompt("enter number "+(i+1))));
}

console.log(arr);

for(var i=0 ; i <arr.length ; i++){
sum+=arr[i];
}

console.log(sum);
avg=sum/count;




alert("The summation of the " +count+ " " +"numbers is :"+" " +sum+" " +"and its average :" +" " +avg );


