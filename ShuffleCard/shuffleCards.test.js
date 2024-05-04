const shuffleCards = require('./shuffleCards');

test('shuffle cards', () => {
    // Create an array of cards from 1 to 10
    const cards = Array.from({ length: 10 }, (_, index) => index + 1);

    // Shuffle the cards
    const shuffledCards = shuffleCards(cards.slice()); // Create a copy of the cards array before shuffling

    // Check if the length remains the same
    expect(shuffledCards.length).toBe(cards.length);

    // Check if at least one pair of adjacent elements has different positions
    let hasOrderChanged = false;
    for (let i = 0; i < cards.length - 1; i++) {
        if (shuffledCards[i] !== cards[i] || shuffledCards[i + 1] !== cards[i + 1]) {
            hasOrderChanged = true;
            break;
        }
    }

    // Assert that the order has changed in at least one pair of adjacent elements
    expect(hasOrderChanged).toBe(true);
});
