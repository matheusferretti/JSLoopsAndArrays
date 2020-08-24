var chunk_one = [ 'Lebron', 'Aaliyah', 'Diamond', 'Dominique', 'Aliyah', 'Jazmin', 'Darnell' ];
var chunk_two = [ 'Lucas' , 'Jake','Scott','Amy', 'Molly','Hannah','Lucas'];
let chunk_three = [ ];

const mergeArrays = (firstArray, secondArray) => {
    //your code here
    for(let i = 0; i < firstArray.length; i++){
        chunk_three.push(firstArray[i]);
    }
    for(let b = 0; b < secondArray.length; b++){
        chunk_three.push(secondArray[b]);
    }
    return chunk_three;
}

console.log(mergeArrays(chunk_one, chunk_two));