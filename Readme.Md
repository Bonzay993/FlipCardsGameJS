# Memory Card Game

## 1. Purpose of the Project

The Memory Card Game is designed as a fun and educational tool to enhance memory and cognitive skills. The project was developed to create an engaging experience where users can challenge themselves to match pairs of cards within a limited time. It also aims to teach basic web development concepts through the creation of a simple, yet interactive, browser-based game.

## Releases

For detailed changelogs and download links, see the [Releases](https://github.com/Bonzay993/FlipCardsGameJS/releases) section on GitHub. Each release includes a summary of changes and improvements made, ensuring that users and developers can easily understand what has been updated or fixed in each version of the game.


## 2. Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/memory-card-game.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd memory-card-game
    ```

3. **Open `index.html` in your preferred browser.**

## 3. Usage

- **Start the Game:** Click on the "Start Game" button to begin.
- **Flip Cards:** Click on any card to flip it over. Match pairs of cards to win.
- **Complete Levels:** Once all pairs are matched, the level is complete.
- **Sound Toggle:** You can toggle the sound on and off using the provided button.

## 4. User Stories

- **As a player**, I want to start a new game and understand the objective immediately.
- **As a player**, I want the game to be responsive and work well on my mobile device.
- **As a player**, I want to be able to track my progress with a visible score and timer.
- **As a player**, I want to hear sound effects that enhance the gameplay experience.
- **As a player**, I want to be able to toggle the background music on and off.
- **As a player**, I want the game to remember my highest score, so I can aim to beat it in future sessions.
- **As a player**, I want to see visual feedback when I successfully match a pair of cards.

## 5. Features

### Core Features

- **Card Matching Mechanism:** Players flip over cards to find matching pairs. When a match is found, the cards remain visible; otherwise, they flip back over.
- **Timer:** A countdown timer that challenges players to match all pairs before time runs out.
- **Score Tracking:** Displays the current score based on the number of pairs matched.
- **High Score Storage:** The highest score is saved in the browser's local storage and displayed to the user.
- **Responsive Design:** The game adjusts to various screen sizes, making it accessible on both desktop and mobile devices.

### Audio Features

- **Background Music:** A looped audio track plays in the background during the game, enhancing the immersive experience.
- **Sound Effects:** Includes sounds for button clicks, card flips, and successful or failed matches.
- **Audio Toggle:** Allows users to turn the background music on or off.

## 6. Future Features

- **Additional Levels:** Introduce more levels with increasing difficulty, including more cards and complex patterns.
- **Themes:** Offer different visual themes (e.g., nature, space, animals) that players can select before starting the game.
- **Multiplayer Mode:** Allow two players to compete on the same device, taking turns to find matching pairs.
- **Leaderboard:** Implement a global leaderboard where players can submit their high scores and compete with others worldwide.
- **Hints:** Add a hint feature that temporarily reveals all cards for a few seconds to assist players.

## 7. Typography and Color Scheme

### Typography

- **Primary Font:** The game uses a sans-serif font like *Arial* or *Verdana* for readability and modern appearance.
- **Title Font:** A bold, playful font like *Comic Sans MS* or *Impact* is used for game titles and headings to attract attention and set a fun tone.

### Color Scheme

- **Background Colors:** Soft, pastel shades are used for backgrounds to avoid straining the eyes and to make the game visually appealing.
- **Card Colors:** Cards have distinct, vibrant colors to differentiate them easily. The card back design uses a subtle pattern.
- **Text Colors:** Dark colors (like navy blue or black) for text to ensure readability against lighter backgrounds.

## 8. Wireframes

Wireframes were designed to plan the layout of the game interface across different screen sizes.

- **Desktop View:** A grid layout with a score display at the top, the game grid in the center, and control buttons at the bottom.
- **Mobile View:** A vertically stacked layout where the score, timer, and controls are positioned at the top, followed by the game grid.
  
Wireframes were created using tools like Figma or Adobe XD. (Add screenshots or links to wireframes if available.)

## 9. Technology

### Languages

- **HTML5:** Used for the basic structure of the game, including the layout of the game grid and control buttons.
- **CSS3:** Provides styling for the game, including the layout, colors, and responsive design adjustments.
- **JavaScript:** Implements the game logic, including card shuffling, matching mechanics, score tracking, and sound management.

### Tools and Libraries

- **LocalStorage:** Used to store the high score in the player's browser.
- **Audio API:** Utilized for managing background music and sound effects.
- **Version Control:** Git was used for version control, with the project hosted on GitHub.

### Development Environment

- **Text Editor:** Developed using code editors like Visual Studio Code.
- **Browser:** Tested across multiple browsers including Chrome, Firefox, and Safari to ensure compatibility.

---

## 10. Code Testing

## Code Testing

### Testing Framework

The Memory Card Game uses [Jest](https://jestjs.io/) for unit testing. Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### How to Run Tests

1. **Install Jest:**
   - Before running the tests, ensure you have Jest installed. You can install it using npm:
     ```
     npm install --save-dev jest
     ```

2. **Run the Tests:**
   - To run the tests, use the following command in your terminal:
     ```
     npm test
     ```
   - Jest will automatically find and run any test files following the naming convention `*.test.js` or located in the `__tests__` directory.

### Test Coverage

The tests focus on the following core functionalities:

- **Game Initialization**
  - Tests the `gameInit` function to ensure proper setup of game elements and event listeners.
  - Verifies that buttons for starting the game and toggling audio are functional and correctly trigger their associated actions.

- **Popup Management**
  - Tests for functions like `menuPop`, `levelOnePop`, and `gameOver` to verify the correct display and closure of popups.
  - Ensures popups appear and hide as expected, providing a seamless user experience.

- **Game Progression**
  - Tests the `levelComplete` function to confirm that the level completion popup is displayed when appropriate.
  - Verifies that the `gameOver` function correctly triggers the game over popup.

- **High Score Handling**
  - Tests the `updateHighScore` function to ensure high scores are accurately updated in `localStorage` only when a new score surpasses the existing one.
  - Confirms that the high score is correctly displayed in the UI after an update.


### Future Testing

Additional tests can be added to cover other game functionalities such as:

- **Timer Countdown:** Ensuring the timer counts down correctly and triggers the game over state when it reaches zero.
- **Sound Effects:** Verifying that the correct sound effects play during different game events (e.g., card flip, match success/failure).
- **UI/UX Elements:** Testing the responsiveness and visibility of UI components like popups, buttons, and score displays.

---
## Test Cases

### 1. Game Initialization
- **Test Case 1.1:** Ensure the game initializes correctly when the page is loaded.
  - Verify that the hover sound effect is active.
  - Verify that the menu music starts playing automatically.
  - Check that the menu popup appears on page load.
- **Test Case 1.2:** Confirm that all interactive elements (buttons) are clickable and responsive.
- **Test Case 1.3:** Validate that the "Start Game" button initializes the game and hides the menu.

### 2. Audio Functionality
- **Test Case 2.1:** Verify that the background music plays when toggled on.
- **Test Case 2.2:** Check that clicking the "Music" button toggles the audio state between "On" and "Off".
- **Test Case 2.3:** Ensure that sound effects play correctly when buttons are hovered over or clicked.
- **Test Case 2.4:** Validate that the correct sound effect plays when two cards match or fail to match.

### 3. Game Mechanics
- **Test Case 3.1:** Verify that cards are shuffled and displayed correctly when the game starts.
- **Test Case 3.2:** Test the card flipping mechanism to ensure only two cards can be flipped at a time.
- **Test Case 3.3:** Confirm that the correct actions occur when a match is found (e.g., cards disappear, sound plays).
- **Test Case 3.4:** Check that the game over condition is triggered when the timer runs out.
- **Test Case 3.5:** Validate the correct functionality of the high score system (e.g., updating, storing in local storage).

### 4. Pop-up Handling
- **Test Case 4.1:** Verify that the initial welcome popup appears correctly.
- **Test Case 4.2:** Confirm that the level one tutorial popup appears and functions correctly.
- **Test Case 4.3:** Ensure that the game over and level complete popups display at the appropriate times.

### 5. Responsive Design
- **Test Case 5.1:** Check that the game layout adjusts correctly on different screen sizes (desktop, tablet, mobile).
- **Test Case 5.2:** Validate that all game elements (e.g., buttons, grid) are usable and visually appropriate on various devices.

### 6. Error Handling
- **Test Case 6.1:** Ensure that the game gracefully handles cases where audio files fail to load.
- **Test Case 6.2:** Verify that no actions can break the game, such as clicking multiple buttons rapidly.
- **Test Case 6.3:** Check for any console errors during gameplay that could indicate issues.

### 7. Timer and Score
- **Test Case 7.1:** Validate the timer starts correctly when the game begins and stops when the game ends.
- **Test Case 7.2:** Confirm the score is accurately calculated and displayed after each match.
- **Test Case 7.3:** Check that the high score is updated and stored properly across game sessions.

