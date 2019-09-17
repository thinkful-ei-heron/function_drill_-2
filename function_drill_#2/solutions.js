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

  function daysInAMonth(month, leapYear){
    let days;
    switch(month){
      case 'January':
      case 'March':
      case 'May':
      case 'July':
      case 'August':
      case 'October':
      case 'December':
        days = 31;
        break;
  
      case 'April':
      case 'June':
      case 'September':
      case 'November':
        days = 30;
        break;
  
      case 'February':
        if (leapYear === true){
          days = 29;
        } else {
          days = 28;
        }
        break;    
    }
  
    return `${month} has ${days} days!`;
  }

  function rockPaperScissors(){
    let player1 = prompt('Choose 1 for rock, 2 for paper, and 3 for scissor!');
    const randomNo = Math.floor(Math.random() * 3) + 1;
    if (player1 == randomNo){
      alert('It\'s a tie!');
    } else if (player1 == 1) {
      if (randomNo == 2){
        alert('You lost!');
      } else if (randomNo == 3){
        alert('You won!');
      }
    } else if (player1 == 2){
      if (randomNo == 1){
        alert('You won!');
      } else {
        alert('You lost!');
      }
    } else if (player1 == 3){
      if (randomNo == 1){
        alert('You lost!');
      } else if (randomNo == 2){
        alert('You won!');
      }
    }
    if (player1 != 1 && player1 != 2 && player1 != 3){
      throw new Error('not a 1, 2, or 3!')
    };
  }
  

  