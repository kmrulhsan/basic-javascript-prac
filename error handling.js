try{
    const numbers = [1,2,3,3,3,3,4,5];
    const count = countOccurances(null, 1);
    console.log(count);
}
catch(e){
    console.log(e.message);
}

function countOccurances (array, searchElement){
    //** reduce method */
    
    if ( !Array.isArray(array))
        throw new Error ('Invalid Array.')


     return array.reduce((accumulator, current) => {
        const occurance = ( current === searchElement ) ? 1 : 0;
        return accumulator  +  occurance; 
    } ,0);
}