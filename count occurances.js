const numbers = [1,2,3,3,3,3,4,5];

const count = countOccurances(numbers, -3);
console.log(count);


function countOccurances (array, searchElement){
    // let count = 0;
    // for (let element of array)
    //     if (element === searchElement)
    //         count++;
    // return count;
    

    //** reduce method */
     return array.reduce((accumulator, current) => {
        const occurance = ( current === searchElement ) ? 1 : 0;
        return accumulator  +  occurance; 
    } ,0);
}