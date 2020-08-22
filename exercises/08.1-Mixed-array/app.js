var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];
var typesMix = []
//your code here
for(let i = 0; i <= mix.length - 1; i++){
    typesMix.push(typeof mix[i]);
}

console.log(typesMix);  
