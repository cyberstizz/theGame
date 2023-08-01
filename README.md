

![](./Screenshot%202023-07-31%208.59.22%20PM.png)


#             **Witch Vs Wizard**

## This is a Javascript application

### this project includes
* Javascript
* Some pretty amateur looking gifs and background images


### Synopsis
Wizard vs Witch is a Javascript game that I created in 2020 shortly after learning about dom manipulation. It was a school project and deemed to be a mid term of sorts. The cool thing is, that I have gathered a lot of insight
in retrospect. 

You see the truth is.... what I did not know then, was that my instructors had designed this coding project to teach us about asynchronous code. They wanted us
to learn about async await to get us ready for the fetch api and calling the server.

### Why is this important to me
this is important because it serves as a sort of artistic relic of the past for me. The reason being that, I did not understand the concept of async await at all. In fact, I had not even been introduced to it yet. So for me this serves as a reminder that when we do not have all the tools to do a specific job, we will improvise and this sometimes makes us more creative. this project just so happened to work by luck.


### ### Code Review

this game does not use asyn await at all which is CRAZY. after learning about how some functions(like api calls) require time to wait for the response, it would never even be considered that a program can work such as a game without it, since a user would need to give the game feedback and the game would have to respond. well this is definitely true, but the game works because of a weird reason. 

since the game is focused on dom manipulation, I set the health bars of each character on the dom to be turned red from its original yellow(which I stole from games like street fighter) and this represented the health. the entire game is one function, but once executed, it can ask for and process the users response all withing one iteration of the code. What ultimately happens is every time a move is made the entire program runs again, and when the game is potentially over, the last move made will run the program and end the game apporpriately.


## revelation
this revelation about async await was a huge breath of fresh air that I learned about after seeing my fellow classmates implementions. I now keep this code because it is cool to know that I somehow accomplished this task withouth knowing about the typical required tools and still achieved the outcome I desired. Cool stuff!!


### final thought
I am reminded every time I occassionaly come back and look at this project that I can achieve just about anything with software as long as I have the desire and ability to think outside the box.


### for more projects by CyberStizz visit: [Charleslambjr.com](https://www.charleslambjr.com/)





This game is called Wizard vs Witch
It is you vs the computer
you land on a start page with an option to select rules
if you start the game you have to select a button to attack first
your move choices are attack shield and absorb after you choose an attack it is the witches turn
every time you get hit you will lose health
the first to deplete tho opponents lifebar will win
let the best magician win!
