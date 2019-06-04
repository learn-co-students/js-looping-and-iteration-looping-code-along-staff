function writeCards(nameList, message) {
  const cards = [];
  for (let i=0; i<nameList.length; i++) {
    cards.push(`Thank you, ${nameList[i]}, for the wonderful ${message} gift!`);
  }
  return cards;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
