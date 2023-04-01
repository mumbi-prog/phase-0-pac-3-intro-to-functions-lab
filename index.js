const string = "Hello"

//Task1
function shout(string) {
    return string.toUpperCase();
}
console.log(shout(string));

//Task2
function whisper(string) {
    return string.toLowerCase();
}
console.log(whisper(string));

//Task3
function logShout(string){
    return console.log(string.toUpperCase());
}
logShout(string);

//Task4
function logWhisper(string){
    return console.log(string.toLowerCase());
}
logWhisper(string);

//Task5
function sayHiToHeadphonedRoommate(string){
    if(string === string.toLowerCase()){
        return "I can't hear you!";
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!";
    }
    else if (string === `Let\'s have dinner together!`) {
        return `I would love to!`;
      }
}
