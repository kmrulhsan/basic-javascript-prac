let address = createAddress('a', 'b', 'c');
console.log(address);

//factory  function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}

let addresses = new Address('v', 'n' ,'w');
console.log (addresses);

//constructor function
function Address (street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}
