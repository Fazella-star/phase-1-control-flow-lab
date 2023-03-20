function scuberGreetingForFeet(value){
  // Write your code here!
  //let value;
  if( value<= 400) {
    return 'This one is on me!'
    } else if(value >2000 && value<= 2500) {
    return 'I will gladly take your thirty bucks.'
    }
    else {
    return 'No can do.'
    }
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city==='NYC'){
    return "Ok, sounds good.";
}
else {
  return 'No go.';
}
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  if(tipAmount==='generous'){
    return 'Thank you so much.';}
else if (tipAmount=== 'not as generous'){
  return'Thank you.';
} else{
  return 'Bye.';
}
}