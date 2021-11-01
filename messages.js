// array of famous quotes

const messages = [
    "The greatest glory in living 7lies not in never falling, 8but in rising every time we fall.", 
    "The way to get started 7is to quit talking 8and begin doing.", 
    "Your time is limited, 7so don't waste it 8living someone else's life.",
    "If life were predictable 7it would cease to be life, 8and be without flavor.", 
    "If you look at what 7you have in life, you'll always have more. If you look at what 8you don't have in life, you'll never have enough.",
    "If you set your goals 7ridiculously high and it's a failure, 8you will fail above everyone else's success.",
    "Life is what happens 7when you're busy 8making other plans.",
    "Spread love everywhere 7you go. Let no one ever 8come to you without leaving happier.",
    "When you reach the end 7of your rope, tie a 8knot in it and hang on.",
    "Always remember that you 7are absolutely unique. 8Just like everyone else.",
    "Don't judge each day by 7the harvest you reap 8but by the seeds that you plant.",
    "The future belongs to 7those who believe in 8the beauty of their dreams.",
    "Tell me and I forget. 7Teach me and I remember. 8Involve me and I learn.",
    "The best and most beautiful 7things in the world cannot be 8seen or even touched — they must be felt with the heart.",
    "It is during our darkest 7moments that we must 8focus to see the light.",
    "Whoever is 7happy will make others 8happy too.",
    "Do not go where 7the path may lead, go instead where there is 8no path and leave a trail."
];    


// selecting random parts of the message

function partMessage(messagesBase, part){

    let rndNumber = Math.floor(Math.random() * (17));
    let randomPart = messagesBase[rndNumber];
    let pos7 = randomPart.indexOf('7');
    let pos8 = randomPart.indexOf('8');
        
    let newPart = '';

    switch (part){
        case 0: 
            newPart = randomPart.slice(0, pos7);
            break;
        case 1: 
            newPart = randomPart.slice(pos7+1, pos8);
            break;
        case 2: 
            newPart = randomPart.slice(pos8+1);
            break;
    };

    return newPart;
}

// creating random messages

function randomMessage(messagesBase){

    let part = 0;
    let newMessage = '';

    while( part < 3) {
        newMessage += partMessage(messagesBase, part);
        part++;
    }
    partMessage(messagesBase);

    return newMessage;
}

console.log(' ');
console.log('Someone very important someday maybe said :');
console.log(' ');
console.log(randomMessage(messages));