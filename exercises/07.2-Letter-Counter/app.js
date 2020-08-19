let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

for(let character of par){
    if(character != ' '){
        if(character.toLowerCase() in counts){
            counts[character.toLowerCase()] = counts[character.toLowerCase()] + 1;
        } else {
            counts[character.toLowerCase()] = 1;
        }
    }
}

// your code here

console.log(counts);