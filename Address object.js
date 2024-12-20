let address = {
    street: 'A',
    city: 'B',
    zipCode: 'C'
};

function showAddress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAddress(address);