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


  
  function decode (word){
    if (word[0]=== 'a'){
      return word [1];
    }
    if (word[0]=== 'b'){
    return word [2];
    }
    if (word[0]=== 'c'){
    return word [3];
    }
    if (word[0]=== 'd'){
    return word [4];
    }
    return '';
  
  };
  
  var output = decode('craft block argon meter bells brown croon droop')
  console.log(output);


  