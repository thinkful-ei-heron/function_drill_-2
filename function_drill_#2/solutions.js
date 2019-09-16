function jediName(firstName, lastName){
    let lastThree = lastName.slice(0,3); 
    let lastTwo = firstName.slice(0,2)
    let newName =`${lastThree} ${lastTwo}`; 
    return newName;
}

console.log(jediName);

function beyond (num){
    if (num === -Infinity || num === Infinity) 
    {console.log('And beyond')} 
    else if (isFinite(num) && num > 0) 
    {console.log('To infinity')} 
    else if (isFinite(num) && num < 0)
    {console.log('Tonegative infinity')
    } 
    else if(num === 0){
      console.log('Staying home')
    }
  }
  
  console.log(beyond())