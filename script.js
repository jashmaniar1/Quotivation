const quotes = [
        "Believe you can and you're halfway there.",
        "The only way to achieve the impossible is to believe it is possible.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "You are never too old to set another goal or to dream a new dream.",
        "The secret of getting ahead is getting started.",
        "In the middle of every difficulty lies opportunity.",
        "Don't watch the clock; do what it does. Keep going.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "You don't have to be great to start, but you have to start to be great.",
        "It's not whether you get knocked down, it's whether you get up.",
        "Failure will never overtake me if my determination to succeed is strong enough.",
        "Success is stumbling from failure to failure with no loss of enthusiasm.",
        "The only place where success comes before work is in the dictionary.",
        "The road to success and the road to failure are almost exactly the same.",
        "Hardships often prepare ordinary people for an extraordinary destiny.",
        "Opportunities don't happen, you create them.",
        "If you can dream it, you can achieve it.",
        "The only person you are destined to become is the person you decide to be.",
        "Success usually comes to those who are too busy to be looking for it.",
        "It always seems impossible until it is done.",
        "Don’t be afraid to give up the good to go for the great.",
        "The future belongs to those who believe in the beauty of their dreams.",
        "The best way to predict the future is to create it.",
        "I find that the harder I work, the more luck I seem to have.",
        "Success is not the key to happiness. Happiness is the key to success.",
        "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
        "You are never too old to set another goal or to dream a new dream.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "You don't have to be great to start, but you have to start to be great.",
        "It's not whether you get knocked down, it's whether you get up.",
        "Our greatest glory is not in never falling, but in rising every time we fall.",
        "The only way to do great work is to love what you do.",
        "Strive not to be a success, but rather to be of value.",
        "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        "Life is 10% what happens to us and 90% how we react to it.",
        "The only person you are destined to become is the person you decide to be.",
        "The future depends on what you do today.",
        "You miss 100% of the shots you don't take.",
        "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
        "Don't wait. The time will never be just right.",
        "The harder the conflict, the more glorious the triumph.",
        "Success is not in what you have, but who you are.",
        "There are no shortcuts to any place worth going.",
        "You are the master of your fate, the captain of your soul.",
        "Challenges are what make life interesting and overcoming them is what makes life meaningful.",
        "The best revenge is massive success.",
        "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
        "The only way to predict the future is to create it.",
        "In the end, we only regret the chances we didn't take.",
];

const colors = [
    "#FFD1DC", // Pastel Pink
    "#AEC6CF", // Pastel Blue
    "#B0E57C", // Pastel Green
    "#B19CD9", // Pastel Purple
    "#FFFACD", // Pastel Yellow
    "#F7B26A", // Pastel Orange
    "#AFEEEE", // Pastel Turquoise
    "#FFDAB9", // Pastel Peach
    "#E6E6FA", // Pastel Lavender
    "#98FF98", // Pastel Mint
    "#FF847C", // Pastel Coral
    "#C8A2C8", // Pastel Lilac
    "#87CEEB", // Pastel Sky Blue
    "#98FF98", // Pastel Mint Green
    "#F9966B", // Pastel Salmon
    "#FFDAB9", // Pastel Peach (again for variety)
    "#FFE4E1", // Pastel Rose
    "#7FDBFF", // Pastel Aqua
    "#FDFD96", // Pastel Yellow (again for variety)
    "#E0BBE4"  // Pastel Lavender (again for variety)
];

document.body.onkeyup = function(e) {
    if (e.keyCode == 32) {
        changeQuoteAndColor();
    }
}

function changeQuoteAndColor() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.getElementById("quote").innerText = randomQuote;
    document.body.style.backgroundColor = randomColor;
}

