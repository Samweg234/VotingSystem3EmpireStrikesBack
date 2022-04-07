const { Console } = require("console");

const Players = [];

const PlayerTemplate = { votes: 0, name: "NA", isOddOneOut: false };

const Sam = { votes: 0, name: "Sam", isOddOneOut: false };
Players.push(Sam);
const Sam2 = { votes: 0, name: "Sam2", isOddOneOut: false };
Players.push(Sam2);
const Sam3 = { votes: 0, name: "Sam3", isOddOneOut: false };
Players.push(Sam3);
const Sam4 = { votes: 0, name: "Sam4", isOddOneOut: false };
Players.push(Sam4);
const Sam5 = { votes: 0, name: "Sam5", isOddOneOut: false };
Players.push(Sam5);
const Sam6 = { votes: 0, name: "Sam6", isOddOneOut: false };
Players.push(Sam6);

function SelectImposter() {
    for (var i = 0; i < Players.length; i++) {
        Players[i].isOddOneOut = false;
    }
    Players[Math.floor(Math.random() * Players.length)].isOddOneOut = true;
} 

function RevealImposter() {
    for (var i = 0; i < Players.length; i++) {
        if (Players[i].isOddOneOut == true) {
            console.log(Players[i].name + " is the odd one out.");
        }
    }
}


function NoOfVotes() {
    var numberOfVotes = 0;
    for (var i = 0; i < Players.length; i++) {
        numberOfVotes = numberOfVotes + Players[i].votes;
    }
    return numberOfVotes;
}

function VoteFor(string) {
    if (NoOfVotes() < Players.length) {
        for (var i = 0; i < Players.length; i++) {
            if (string == Players[i].name) {
                Players[i].votes = Players[i].votes + 1;
            }
        }
    }
}

function MostVotes() {
    var mostVotedFor = PlayerTemplate;
    for (var i = 0; i < Players.length; i++) {
        if (mostVotedFor.votes < Players[i].votes) {
            mostVotedFor = Players[i];
        }
    }
    console.log("The most voted for player is " + mostVotedFor.name + " with " + mostVotedFor.votes + " votes.");
}

SelectImposter();

VoteFor("Sam5");
VoteFor("Sam");
VoteFor("Sam2");
VoteFor("Sam5");
VoteFor("Sam5");
VoteFor("Sam6");
VoteFor("Sam6");
VoteFor("Sam6");

for (var i = 0; i < Players.length; i++) {
    console.log(Players[i].name + ": " + Players[i].votes);
}

MostVotes();
RevealImposter();