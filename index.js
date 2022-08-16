function scuberGreetingForFeet(distance){
  // Write your code here!
  let ride;
  if (distance <= 400) {
    ride ='This one is on me!';
  } 
   else if (distance <= 2500) {
    ride = 'I will gladly take your thirty bucks.';
  }
  else if (distance > 2500) {
    ride = 'No can do.';
  }
  console.log(ride);
  return ride;
}

function ternaryCheckCity(city){
  // Write your code here!
  const message = city === "NYC"?  "Ok, sounds good." : "No go.";

  return message;
}

function switchOnCharmFromTip(message){
  // Write your code here!
  let tip;

  switch (message) {

    case 'generous' :
      tip = "Thank you so much.";
      break;
      
    case "not as generous" :
      tip = "Thank you.";

     break;

    default:
      tip = "Bye.";
      break;
  
  }
  return tip;
}