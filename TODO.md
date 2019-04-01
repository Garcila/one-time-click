# TODO

## Create Components

  [] - App.  Holds all the app, including all the state

  [] - Nav

    [] - Game Name.  When clicked resets game
    [] - Feedback information
      [] - Click an image to begin
      [] - You guessed correctly
      [] - You guessed wrong
    [] - Current score and | Top Score

  [] - Head Game Title and blurb

  [] - Game Body contains 12 images, and all the mechanics of the game

  [] - Footer

  [] - Update default React README.md

  [] - Cloudinary will hold the images... explore providing different sizes for different screens

## GamePlay

  [] - State

    [] - All images to display.  Array of images to display and shuffle at each click
    [] - Selected Images.  Array of selected images ids in order to determine game score
    [] - Current Score
      [] - Increases when correct image is selected (Keep track of selected images and check against selected one)
      [] - Decreases when incorrect image is selected (Keep track of selected images and check against selected one)
    [] - Feedback information has three different states correct, incorrect, select image to begin

## Bonus

  [] - Favicon

  [] - Multiple image sets to choose from

  [] - Increase or decrease board size

  [] - Maximum number of images clicked, when score is equal to length of the array of all available images
    [] = Maybe empty array and keep adding to current score?
    [] - Go to next image set