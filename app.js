/*Wizard vs Witch Rules••••••• 1. 2. 3.• 1. 2. 3.• 1. 2. 3.•
The wizard is fighting the witch until either player wins by depleting the opponents health
Both players start with five health
If a player loses a round their health goes down by one
The Wizard always goes first The computer is the Witch*/


// creation of wizard with all linked properties
const wizard = {
    health = 5,
    attack = 1,
    shield = 1,
    absorb = 1
}

//creation of witch with all linked properties

const witch = {
    health = 5,
    attack = 1,
    shield = 1,
    absorb = 1
}

//creation of all 3 of the wizard's moves that will be linked to buttons

const wizardAttack = attack => {
    return attack;
}

const wizardShield = shield => {
    return shield;
}

const wizardAbsorb = Absorb => {
    return Absorb;
}

//creation of all 3 of the witch's moves that will be linked to buttons

const witchAttack = attack => {
    return attack;
}

const witchShield = shield => {
    return shield;
}

const witchAbsorb = Absorb => {
    return Absorb;
}

const round = () => {
    /* the wizards move box will change to an empty string
    the witchs move box will change to an empty string
    the round display number will increment by one
    a popup box will alert that it is the wizards turn
    after hitting ok
    the user must select a button on the wizards side
    after selecting a move button 
    a popup box will alert that it is the witchs turn
    after hitting ok
    the user must select a button on the wizards side
    after selecting a move button

    the wizards move box will change to the results of the selected button
    the witchs move box will change to the results of the selected button
     if someone won the round the opposing player will lose health
    a popup box will alert who the winner was or if it was a draw

    if someone won the round the opposing player will lose health

    if someones health is at or below 0 a 
    popup box will declare the other player the winner with the choice to start over
    if start over is clicked the game will send you to the start page */
}

//a while loop to run the game until either player loses

while (wizard.health > 0 && witch.health > 0) {
    round();
}


/* During each players turn they have the option to either Attack, Shield, or Absorb
If a player chooses attack
They draw
if the opponent attacks They lose
if the opponent shields They win
if the opponent absorbs
If a player chooses shield
They draw
if the opponent shields They lose
if the opponent absorbs They win
if the opponent attacks
If the player chooses absorb
They draw
if the opponent absorbs They lose
if the opponent attacks They win
if the opponent shields
Each round continues in succession until
a player wins• Once either player wins the game declares a winner 
and allows you to restart the game by selecting play again */