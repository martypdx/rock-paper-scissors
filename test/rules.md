Rock, Paper, Scissors

## Game Logic

Possible throws:
- rock
- paper
- scissors

Possible return values:
- player
- computer
- tie

player   | computer | result
---      |---       |---
rock     | rock     | tie
rock     | paper    | computer
rock     | scissors | player
paper    | rock     | player
paper    | paper    | tie
paper    | scissors | computer
scissors | rock     | computer
scissors | paper    | player
scissors | scissors | tie

## App Requirements

1. Three clickable images (you can put an `<img>` in a `<button>`), one each for "rock", "paper", and "scissors"
1. Display areas for the player and computer throws and the result. Decide ahead of time how you are going to show the throws and results (simple text? images? css classes?)

### UI/UX Stretch Goal

Find corresponding rock, paper, or scissors sound to play when the user clicks an image

## How To

When user clicks one of the images:
1. Generate a random throw for the computer
1. Pass the player throw and the computer throw to the score function and store the result.
1. Update your UI based on the two throws and the result

### Clean Code Stretch Goal

You have three event listeners that have some amount of unique code, and some code that is duplicated. Can you add a function in `app.js` and move some of the code to that function to remove the duplication?