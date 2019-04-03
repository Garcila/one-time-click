# TODO

## Create Components

  [x] - App.  Holds all the app, including all the state

  [x] - Nav

    [x] - Game Name.  When clicked resets game
    [x] - Feedback information
      [x] - Click an image to begin
      [x] - You guessed correctly
      [x] - You guessed wrong
    [x] - Current score and | Top Score

  [x] - Head Game Title and blurb

  [x] - Game Body contains 12 images, and all the mechanics of the game

  [x] - Footer

  [x] - Update default React README.md

  [x] - Cloudinary will hold the images

## GamePlay

  [x] - State

    [x] - All images to display.  Array of images to display and shuffle at each click
    [x] - Selected Images.  Array of selected images ids in order to determine game score
    [x] - Current Score
      [x] - Increases when correct image is selected (Keep track of selected images and check against selected one)
      [x] - Decreases when incorrect image is selected (Keep track of selected images and check against selected one)
    [x] - Feedback information has three different states correct, incorrect, select image to begin
  
  [] - Deploy Netlify

## Bonus

  [x] - Favicon

  [] - Multiple image sets to choose from

  [] - Maximum number of images clicked, when score is equal to length of the array of all available images
    [] - Maybe empty array and keep adding to current score?
    [] - Go to next image set