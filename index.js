// Create a function theBeatlesPlay, which accepts two parameters--an array of musicians and an array of instruments.

function theBeatlesPlay (musicians, instruments) {
  const buildString = [];
  for (let i = 0; i< musicians.length && i< instruments.length; i++) {
    buildString.push(musicians[i] + " plays " + instruments[i]);
  }
  return buildString;
}

function johnLennonFacts (facts) {
  while (facts.length < 5) {
    let i = 0;
    facts[i] = facts[i] + "!!!";
    i = i+1;
  }
  return facts;
}

function iLoveTheBeatles (num) {
  let arr = [];
    do{
      arr.push("I love the Beatles!");
      num ++;    
    }
      while(num < 15);
  return arr;
}