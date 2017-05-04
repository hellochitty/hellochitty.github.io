## Spotify Quiz App Proposal

### Background

How well do you know your "favorite" songs? The Spotify Quiz App will help you find out. Using the Spotify API to grab user data, a quiz will be generated to play small snippets of songs in your starred playlist and ask you to identify them.

### Functionality & MVP  

Quiz takers will be able to:

- [ ] Sign in to the app using their spotify credentials
- [ ] Play song snippets and identify the song
- [ ] Have the song snippets be from their Starred playlist
- [ ] Get a score based on the number of questions correctly answered

In addition, this project will include:

- [ ] An About modal describing the background and rules of the game
- [ ] A production README

### Wireframes

The app will be have 2 screens: the playing screen and the user stats screen, and 2 modals: the rules and sign-in with Spotify.
Game controls will allow the user to start the song, and choose an answer based on the song they heard.


### Architecture and Technologies

**NB**: one of the main things you should be researching and deciding upon while you write this proposal is what technologies you plan to use.  Identify and create a plan of attack for the major technical challenges in your project.

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `Spotify API`,
- `React.js` for the front end
- `material-ui` for ui components


### Implementation Timeline

**Day 1**: Set Up User Auth for Spotify and create the modal for it

**Day 2**: Get user information, user songs, and be able to generate answer choices based on songs.

**Day 3**: Create the front end for the quiz, including the quiz itself and the stats page at the end.


### Bonus features

The Spotify Quiz can be expanded in the future to include:

- [ ] Options for harder or easier quizzes, allowing the user to modify the length of time the song is played for
- [ ] Maintain a high scores list of the top scorers
