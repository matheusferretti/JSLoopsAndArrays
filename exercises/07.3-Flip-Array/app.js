var arr = [45,67,87,23,5,32,60];
var new_arr = []; 

//Your code here.
for(var i = arr.length - 1; i >= 0; i--){
    new_arr.push(arr[i]);
}

console.log(new_arr);