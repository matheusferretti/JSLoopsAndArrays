let list_of_numbers = [4, 80, 85,	59,	37,25,	5,	64,	66,	81,20,	64,	41,	22,	76,76,	55,	96,	2,	68];
let odd = [];
let even = [];
let odeven = [];

// your code here
let mergeTwoList = (list_of_numbers) => {
    for(let i = 0; i < list_of_numbers.length; i++){
       
        if(list_of_numbers[i]%2 === 0)
        {
            even.push(list_of_numbers[i]);
        }
        else
        {
            odd.push(list_of_numbers[i]);
        }
    }
    odeven.push(odd);
    odeven.push(even);
    return odeven;
}
    

console.log(mergeTwoList(list_of_numbers).toString());