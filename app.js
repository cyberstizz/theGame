// creation of wizard with all required properties
const wizard = {
    health: 5,
    attack: 1,
    shield: 1,
    absorb: 1
}

//creation of witch with all required properties

const witch = {
    health: 5,
    attack: 1,
    shield: 1,
    absorb: 1
}

//creation of a variable to count rounds

let theDomRound = 0;


//creation of all 3 of the wizard's moves that will be linked to buttons

let hisMove = "";


//creation of the witch's move that will later be set to different values
let herMove = "";

//creation of variables for all required interactive elements in the dom

//Wizard move declaration element
let wizardMove = document.getElementById('wizardMove');

//Round declaration element
let round = document.getElementById('roundNumber');

//Witch move declaration element
let witchMove = document.getElementById("witchMove");

/* Now selecting each individual health square to represent 
visually in game as health goes down attack by attack */


//Wizard
let wizHealthSquareOne = document.getElementById("wizbar1");
let wizHealthSquareTwo = document.getElementById("wizbar2");
let wizHealthSquareThree = document.getElementById("wizbar3");
let wizHealthSquareFour = document.getElementById("wizbar4");
let wizHealthSquareFive = document.getElementById("wizbar5");


//Witch
let witchHealthSquareOne = document.getElementById("witchBar1");
let witchHealthSquareTwo = document.getElementById("witchBar2");
let witchHealthSquareThree = document.getElementById("witchBar3");
let witchHealthSquareFour = document.getElementById("witchBar4");
let witchHealthSquareFive = document.getElementById("witchBar5");

//turn declaration element
let turn = document.getElementById("turnDisplay");

turn.innerHTML = "<h2>Wizards Turn</h2>"

//Declaration of each button element for both characters witch' is only for two player mode

//wizard buttons
let wizAttack = document.getElementById('wizbuttonAttack');
let wizShield = document.getElementById('wizbuttonShield');
let wizAbsorb = document.getElementById('wizbuttonAbsorb');

//witch buttons

let witchesAttack = document.getElementById('witchbuttonAttack');
let witchesShield = document.getElementById('witchbuttonShield');
let witchesAbsorb = document.getElementById('witchbuttonAbsorb');


//battle animation element
let battleSpace = document.getElementById('animationSpace ');

//hidden popup that will appear when the game is finished

let ending = document.getElementById('gameOver');




const wizardAttack =  async () => {
    hisMove = 'attack';

    //the wizards move box will change to the results of the selected button
    if (hisMove === 'attack') {
        wizardMove.innerHTML = "Wizard Chose Attack"
    } else if (hisMove === 'shield') {
        wizardMove.innerHTML = "Wizard Chose Shield"
    } else if (hisMove === 'absorb') {
        wizardMove.innerHTML = "Wizard Chose Absorb"
    }

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };

    //the wizards move box and selected move will change to an empty string

    wizardMove = "";

    let roundResults = "";

    //the witchs move box and selected move will change to an empty string

    witchMove = "";

    herMove = "";


    //the round display number will increment by one

    round = `${theDomRound++}`;

    //The turn display text will say wizards turn

    turn.innerHTML = "<h2>Wizards Turn</h2>"


    //a popup box will alert that it is the witchs turn

    alert('It is the Witchs turn! What will she do? Lets see!');

    //after hitting ok

    //creation of function to generate a random number which will be stored in witch move

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    herMove = random(1, 3);

    // if else statements to determine who wins the round

    //for each statement check the display box will display each characters selected move

    if (hisMove === 'attack' && herMove === 1) {
        roundResults = "draw nobody";
    } else if (hisMove === 'attack' && herMove === 2) {
        roundResults = "witch";
    } else if (hisMove === 'attack' && herMove === 3) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 1) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 2) {
        roundResults = "draw nobody";
    } else if (hisMove === 'shield' && herMove === 3) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 1) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 2) {
        roundResults = "wizard";
    } else if (hisMove === 'absorb' && herMove === 3) {
        roundResults = "draw nobody";
    }


    //the witchs move box will change to the results of the selected button

    if (herMove === 'attack') {
        witchMove.innerHTML = "Witch Chose Attack"
    } else if (herMove === 'shield') {
        witchMove.innerHTML = "Witch Chose Shield"
    } else if (herMove === 'absorb') {
        witchMove.innerHTML = "Witch Chose Absorb"
    }


    //an alert will let you know which move the wizard chose

    alert(`The wizard chose ${hisMove}`)

    //an alert will let you know which move the witch chose

    alert(`The witch chose ${herMove}`)


    //if someone won the round the opposing player will lose health or gain health


    if (roundResults === 'wizard') {
        witch.health -= 1;
    } else if (roundResults === 'witch') {
        wizard.health -= 1;
    };

    //a popup box will alert who the winner was or if it was a draw

    alert(`${roundResults} won the round`)

    //after hitting ok 

    //if someone won the round the opposing player will lose a health bar

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };
    //if someones health is at or below 0 a 
    //popup box will declare the other player the winner with the choice to start over

    if (wizard.health <= 0) {
        alert('Game Over You Lose!');
        ending.style.visibility = 'visible';
    } else if (witch.health <= 0) {
        alert('Game Over You Win!');
        ending.style.visibility = 'visible';
    } else {
        alert('It is the Wizards turn! What will you do? Choose a move');
        turn.innerHTML = "<h2>Wizards Turn</h2>";
    };
}

const wizardShield =  async () => {
    hisMove = 'shield';

    //the wizards move box will change to the results of the selected button

    if (hisMove === 'attack') {
        wizardMove.innerHTML = "Wizard Chose Attack"
    } else if (hisMove === 'shield') {
        wizardMove.innerHTML = "Wizard Chose Shield"
    } else if (hisMove === 'absorb') {
        wizardMove.innerHTML = "Wizard Chose Absorb"
    }

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };


    //the wizards move box and selected move will change to an empty string

    wizardMove = "";

    //the witchs move box and selected move will change to an empty string

    witchMove = "";

    herMove = "";


    //the round display number will increment by one

    round = `${theDomRound++}`;

    //The turn display text will say wizards turn

    turn.innerHTML = "<h2>Wizards Turn</h2>"


    //a popup box will alert that it is the witchs turn

    alert('It is the Witchs turn! What will she do? Lets see!');

    //after hitting ok

    //creation of function to generate a random number which will be stored in witch move

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    herMove = random(1, 3);

    // if else statements to determine who wins the round

    //for each statement check the display box will display each characters selected move

    if (hisMove === 'attack' && herMove === 1) {
        roundResults = "draw nobody";
    } else if (hisMove === 'attack' && herMove === 2) {
        roundResults = "witch";
    } else if (hisMove === 'attack' && herMove === 3) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 1) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 2) {
        roundResults = "draw nobody";
    } else if (hisMove === 'shield' && herMove === 3) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 1) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 2) {
        roundResults = "wizard";
    } else if (hisMove === 'absorb' && herMove === 3) {
        roundResults = "draw nobody";
    }


    //the witchs move box will change to the results of the selected button

    if (herMove === 'attack') {
        witchMove.innerHTML = "Witch Chose Attack"
    } else if (herMove === 'shield') {
        witchMove.innerHTML = "Witch Chose Shield"
    } else if (herMove === 'absorb') {
        witchMove.innerHTML = "Witch Chose Absorb"
    }


    //an alert will let you know which move the wizard chose

    alert(`The wizard chose ${hisMove}`)

    //an alert will let you know which move the witch chose

    alert(`The witch chose ${herMove}`)


    //if someone won the round the opposing player will lose health or gain health


    if (roundResults === 'wizard') {
        witch.health -= 1;
    } else if (roundResults === 'witch') {
        wizard.health -= 1;
    };

    //a popup box will alert who the winner was or if it was a draw

    alert(`${roundResults} won the round`)

    //after hitting ok 

    //if someone won the round the opposing player will lose a health bar

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };
    //if someones health is at or below 0 a 
    //popup box will declare the other player the winner with the choice to start over

    if (wizard.health <= 0) {
        alert('Game Over You Lose!');
        ending.style.visibility = "visible";
    } else if (witch.health <= 0) {
        alert('Game Over You Win!');
        ending.style.visibility = "visible";
    } else {
        alert('It is the Wizards turn! What will you do? Choose a move');
        turn.innerHTML = "<h2>Wizards Turn</h2>";
    };
}

const wizardAbsorb =  async () => {
    hisMove = 'absorb';

    //the wizards move box will change to the results of the selected button

    if (hisMove === 'attack') {
        wizardMove.innerHTML = "Wizard Chose Attack"
    } else if (hisMove === 'shield') {
        wizardMove.innerHTML = "Wizard Chose Shield"
    } else if (hisMove === 'absorb') {
        wizardMove.innerHTML = "Wizard Chose Absorb"
    }

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };

    //the wizards move box and selected move will change to an empty string

    wizardMove = "";

    let roundResults = "";

    //the witchs move box and selected move will change to an empty string

    witchMove = "";

    herMove = "";


    //the round display number will increment by one

    round = `${theDomRound++}`;

    //The turn display text will say wizards turn

    turn.innerHTML = "<h2>Wizards Turn</h2>"


    //a popup box will alert that it is the witchs turn

    alert('It is the Witchs turn! What will she do? Lets see!');

    //after hitting ok

    //creation of function to generate a random number which will be stored in witch move

    const random = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    herMove = random(1, 3);

    // if else statements to determine who wins the round

    //for each statement check the display box will display each characters selected move

    if (hisMove === 'attack' && herMove === 1) {
        roundResults = "draw nobody";
    } else if (hisMove === 'attack' && herMove === 2) {
        roundResults = "witch";
    } else if (hisMove === 'attack' && herMove === 3) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 1) {
        roundResults = "wizard";
    } else if (hisMove === 'shield' && herMove === 2) {
        roundResults = "draw nobody";
    } else if (hisMove === 'shield' && herMove === 3) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 1) {
        roundResults = "witch";
    } else if (hisMove === 'absorb' && herMove === 2) {
        roundResults = "wizard";
    } else if (hisMove === 'absorb' && herMove === 3) {
        roundResults = "draw nobody";
    }


    //the witchs move box will change to the results of the selected button

    if (herMove === 'attack') {
        witchMove.innerHTML = "Witch Chose Attack"
    } else if (herMove === 'shield') {
        witchMove.innerHTML = "Witch Chose Shield"
    } else if (herMove === 'absorb') {
        witchMove.innerHTML = "Witch Chose Absorb"
    }


    //an alert will let you know which move the wizard chose

    alert(`The wizard chose ${hisMove}`)

    //an alert will let you know which move the witch chose

    alert(`The witch chose ${herMove}`)


    //if someone won the round the opposing player will lose health or gain health


    if (roundResults === 'wizard') {
        witch.health -= 1;
    } else if (roundResults === 'witch') {
        wizard.health -= 1;
    };

    //a popup box will alert who the winner was or if it was a draw

    alert(`${roundResults} won the round`)

    //after hitting ok 

    //if someone won the round the opposing player will lose a health bar

    if (wizard.health === 5) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'green';
    } else if (wizard.health === 4) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'green';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 3) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'green';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 2) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'green';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 1) {
        wizHealthSquareOne.style.backgroundColor = 'green';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    } else if (wizard.health === 0) {
        wizHealthSquareOne.style.backgroundColor = 'red';
        wizHealthSquareTwo.style.backgroundColor = 'red';
        wizHealthSquareThree.style.backgroundColor = 'red';
        wizHealthSquareFour.style.backgroundColor = 'red';
        wizHealthSquareFive.style.backgroundColor = 'red';
    };

    //Same goes for the witch

    if (witch.health === 5) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'purple';
    } else if (witch.health === 4) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'purple';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 3) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'purple';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 2) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'purple';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 1) {
        witchHealthSquareOne.style.backgroundColor = 'purple';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    } else if (witch.health === 0) {
        witchHealthSquareOne.style.backgroundColor = 'red';
        witchHealthSquareTwo.style.backgroundColor = 'red';
        witchHealthSquareThree.style.backgroundColor = 'red';
        witchHealthSquareFour.style.backgroundColor = 'red';
        witchHealthSquareFive.style.backgroundColor = 'red';
    };
    //if someones health is at or below 0 a 
    //popup box will declare the other player the winner with the choice to start over

    if (wizard.health <= 0) {
        alert('Game Over You Lose!');
        ending.style.visibility = "visible";
    } else if (witch.health <= 0) {
        alert('Game Over You Win!');
        ending.style.visibility = "visible";
    } else {
        alert('It is the Wizards turn! What will you do? Choose a move');
        turn.innerHTML = "<h2>Wizards Turn</h2>";
    };

};
wizAttack.addEventListener("click", wizardAttack);
wizShield.addEventListener("click", wizardShield);
wizAbsorb.addEventListener("click", wizardAbsorb);