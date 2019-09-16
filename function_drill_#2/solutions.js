function jediName(firstName, lastName){
    let lastThree = lastName.slice(0,3); 
    let lastTwo = firstName.slice(0,2)
    let newName =`${lastThree} ${lastTwo}`; 
    return newName;
}

console.log(jediName);
