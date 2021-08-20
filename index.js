const thankYouCards = [];

function writeCards(array, event) {
for (let i = 0; i < array.length; i++) {
    thankYouCards.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
}
return thankYouCards;
}


function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
    
}