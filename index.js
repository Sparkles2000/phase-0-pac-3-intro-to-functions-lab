function shout(string) { `Hello!`.toUpperCase(); // `HELLO!`
}

function shout(string) { 
    return string.toUpperCase();
  }

  function whisper(string) { `hello`.toLowerCase(); // `hello`
}
function whisper(string) {
    return string.toLowerCase(); `hello`
} 

function logShout(string) {`Hello`.toUpperCase(); // `HELLO`

}
function logShout(string) {
    console.log ( `HELLO`)

}

function logWhisper(string) { `hello`.toLowerCase(); // `hello`

}

function logWhisper(string) {
    console.log ( `hello` )
}
function sayHiToGrandma(string) {
    // if the string is lowercase
    if (string.toLowerCase() === string) {
        return `I can't hear you!`;
    }
    
    //if the string is uppercase
    if (string.toUpperCase() === string) {
        return `YES INDEED!`;
    }

    if (string === `I love you, Grandma.`) {
        return `I love you, too.`;
    }
}
