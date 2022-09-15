// Code your solutions in this file
const cards = (['Guadalupe', 'Ollie', 'Aki'])
const event = "surprise"

function writeCards(cards, event){
    let firstName = []
    for (let x = 0; x < cards.length; x++){
        firstName.push(`Thank you, ${cards[x]}, for the wonderful ${event} gift!`)
    }
    return firstName
}
writeCards(cards)

function countDown() {

    let countDown = 10
    while (countDown >= 0) {
        console.log(countDown--)
    }
}