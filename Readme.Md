# FlipCardsGameJS

<p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/game-mockup.png" style="margin: 0 auto;"> 
 </p>

## 1. Purpose of the Project

The Memory Card Game is designed as a fun and educational tool to enhance memory and cognitive skills. The project was developed to create an engaging experience where users can challenge themselves to match pairs of cards within a limited time. It also aims to teach basic web development concepts through the creation of a simple, yet interactive, browser-based game.

## 2. Releases / Bug Fixes

For detailed changelogs and download links, see the [Releases](https://github.com/Bonzay993/FlipCardsGameJS/releases) section on GitHub. Each release includes a summary of changes and improvements made, ensuring that users and developers can easily understand what has been updated or fixed in each version of the game.

Bugs found can also be reported for review here : [Issues](https://github.com/Bonzay993/FlipCardsGameJS/issues) 


## 3. Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/Bonzay993/FlipCardsGameJS
    ```

2. **Navigate to the project directory:**

    ```bash
    cd FlipCardsGameJS
    ```

3. **Open `index.html` in your preferred browser.**

## 4. Usage

- **Start the Game:** Click on the "Start Game" button to begin.
- **Flip Cards:** Click on any card to flip it over. Match pairs of cards to win.
- **Complete Levels:** Once all pairs are matched, the level is complete.
- **Sound Toggle:** You can toggle the sound on and off using the provided button.

## 5. User Stories

- **Target Audience : All ages**

- **As a player**, I want to start a new game and understand the objective immediately.
<p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/user-stories-tutorial.png" style="margin: 0 auto;"> 
 </p>

- **As a player**, I want the game to be responsive and work well on my mobile device.
<p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/user-stories-responsiveness.png" style="margin: 0 auto;"> 
 </p>

- **As a player**, I want to be able to track my progress with a visible score and timer.
- **As a player**, I want the game to remember my highest score, so I can aim to beat it in future sessions.
<p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/user-stories-score.png" style="margin: 0 auto;"> 
 </p>
 <p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/user-stories-timer.png" style="margin: 0 auto;"> 
 </p>

- **As a player**, I want to hear sound effects that enhance the gameplay experience.
- **As a player**, I want to be able to toggle the background music on and off.
- **As a player**, I want to hear audio feedback when I successfully match a pair of cards.
<p align="center"> 
   <video src="https://github.com/user-attachments/assets/e969477b-437a-40b3-859b-13b73c0fa7df
"></video>
</p>
## 6. Features

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

## 7. Future Features

- **Additional Levels:** Introduce more levels with increasing difficulty, including more cards and complex patterns.
- **Themes:** Offer different visual themes (e.g., nature, space, animals) that players can select before starting the game.
- **Multiplayer Mode:** Allow two players to compete on the same device, taking turns to find matching pairs.
- **Leaderboard:** Implement a global leaderboard where players can submit their high scores and compete with others worldwide.
- **Hints:** Add a hint feature that temporarily reveals all cards for a few seconds to assist players.

## 8. Typography and Color Scheme

### Typography

- **Primary Font:** The game uses Montserrat and Sans-Serif for readability and modern appearance.

### Color Scheme

- **Background Colors:** Soft, pastel shades are used for backgrounds to avoid straining the eyes and to make the game visually appealing.
- **Card Colors:** Cards have distinct, vibrant colors to differentiate them easily. The card back design uses a subtle pattern. Cards are image assets build in Adobe.
- **Text Colors:** White colors for text to ensure readability against darker backgrounds.

## 9. Wireframes

Wireframes were designed to plan the layout of the game interface across different screen sizes. The wireframes also follow the user stories as demonstrated below:


- **Desktop View:** A layout with a score display on the right, the game grid in the center, and music control button on the left. On top there is the Level Number and the timer.
- **Mobile View:** A vertically stacked layout where the score and highscore are at the bottom, and the level number and timer are positioned at the top. The game grid stays in the center as it is the main focus of the game.
<p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/wireframes/main-menu.png" style="margin: 0 auto;"> 
 </p>

 <p align="center">
   <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/wireframes/game-area-mock.png" style="margin: 0 auto;"> 
 </p>

The reasoning behind this design choice is to have the main game components always in the user's focus for better gameplay.
An orange hover effect is used on the cards to be easily distinguished against the rest that are not hovered by the player.  
Wireframes were created using tools like Figma or Adobe XD.

## 10. Technology

### Languages

  - **[HTML:](https://www.w3schools.com/html/)** Provides the structure and content of the website.
  - **[CSS3:](https://www.w3schools.com/css/)** Used for styling and layout, ensuring a visually appealing design.
  - **[JavaScript:](https://www.w3schools.com/js/)** Adds interactivity and dynamic content to the Help section of the website.
  - **[Font Awesome:](https://fontawesome.com/search)** Provides scalable vector icons that can be customized with CSS.

### Tools and Libraries

- **LocalStorage:** Used to store the high score in the player's browser.
- **Audio API:** Utilized for managing background music and sound effects.
- **Version Control:** Git was used for version control, with the project hosted on GitHub.

### Development Environment

- **Text Editor:** Developed using code editors like Visual Studio Code and Github.io
- **Browser:** Tested across multiple browsers including Chrome, Firefox, and Safari to ensure compatibility.


## 11. Code Testing
###  Manual Testing Test Cases 

For detailed test cases and steps to test the website, please refer to the [Test Cases](https://github.com/Bonzay993/FlipCardsGameJS/wiki/Test-Cases) Wiki.

### Automated Testing Framework

The Memory Card Game uses [Jest](https://jestjs.io/) for unit testing. Jest is a delightful JavaScript Testing Framework with a focus on simplicity.

### How to Run Tests

1. **Install Jest:**
   - Before running the tests, ensure you have Jest installed. You can install it using npm:
     ```
     npm install --save-dev jest
     ```

2. **Run the Tests:**
   - This projects comes with Jest Test installed in the libraries folder.
   - To run the tests, use the following commands in your terminal:
     ```
     cd libraries
     npm test
     ```
   - Jest will automatically find and run any test files following the naming convention `*.test.js` or located in the `__tests__` directory.

### Test Coverage

The tests focus on the following core functionalities:

- **Game Initialization**
  - Tests the `gameInitialisation` function to ensure proper setup of game elements and event listeners.
  - Verifies that buttons for starting the game and toggling audio are functional and correctly trigger their associated actions.

- **Popup Management**
  - Tests for functions like `menuPoput`, `levelOnePop`, and `gameOver` to verify the correct display and closure of popups.
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

### Code Validation

Ensuring the quality and correctness of the code is crucial for a robust and reliable website. The HTML and CSS code for the NetNest Website has been validated using the W3C validation services.

#### HTML Validation
- **W3C HTML Validator:** The HTML code has been checked using the W3C HTML Validator to ensure it follows the standards and is free from errors.
  - [Validate HTML](https://validator.w3.org/)

#### CSS Validation
- **W3C CSS Validator:** The CSS code has been validated using the W3C CSS Validator to ensure it meets the standards and is error-free.
  - [Validate CSS](https://jigsaw.w3.org/css-validator/)

#### Js Linter 
- The Javascript code has been passed trough a linter with no issues.
  - [Validate JS](https://www.jslint.com/)

### Ligthouse Report
<p align="center">
  <img src="https://github.com/Bonzay993/FlipCardsGameJS/blob/main/testcases/lighthouse-report.png" style="width:80%;">
</p>

## 12. Supported screens and browsers

### Supported Screens
This website is designed to be responsive and works seamlessly across various screen sizes, including:
- Desktop screens (1200 pixels and above)
- Tablets and small laptops (976 pixels and above)
- Mobile devices (less than 976 pixels)

### Supported Browsers
The website is compatible with all modern browsers, including:
- Google Chrome (latest versions)
- Mozilla Firefox (latest versions)
- Safari (latest versions)
- Microsoft Edge (latest versions)
- Opera (latest versions)

### Simulators Used for Testing
To ensure the website looks great on all devices and browsers, the following simulators were used:
- Chrome DevTools Device Mode
- Firefox Responsive Design Mode
- Safari Web Inspector
- Microsoft Edge DevTools
- Opera Developer Tools

### Mobile Supported Devices
Game interface and responsiveness is currently optimized for the following mobile devices, but others may be supported. More to be added to the list in upcoming patches:
- iPhone SE
- Iphone X
- iPhone XR
- iPhone 12 PRO
- iPhone 12
- iPhone 14 PRO Max
- Pixel 7
- Pixel 8
- Samsung Galaxy S8+
- Samsung Galaxy S20 Ultra
- Ipad Mini
- Ipad Air
- Ipad Pro
- Surface 7
- Surface Duo
- Galaxy Z Fold 5
- Asus Zenbook Fold
- Samsung Galaxy A51/71
- Nest Hub
- Nest Hub Max

## 13. Deployment

### 13.1 Gitpod 

#### 1. Linking the Repository to GitHub

 **Clone the Repository:**
   - Open a terminal.
   - Navigate to the directory where the repository should be cloned.
   - Use the following command to clone the repository:
     ```bash
     git clone https://github.com/Bonzay993/FlipCardsGameJS.git
     ```

 **Link to GitHub:**
   - Navigate into the cloned repository directory:
     ```bash
     cd FlipCardsGameJS
     ```
   - Link the local repository to the GitHub repository:
     ```bash
     git remote add origin https://github.com/Bonzay993/FlipCardsGameJS.git
     ```

 **Push Your Code:**
   - Push local changes to GitHub:
     ```bash
     git push -u origin main
     ```
   - Replace `main` with the name of the main branch if it differs.

#### 2. Opening the Workspace in Gitpod

 **Access Gitpod:**
   - Go to [Gitpod](https://gitpod.io/) and sign in with your GitHub account.

 **Open Workspace:**
   - Open the repository directly in Gitpod by appending `gitpod.io/#` to the repository URL:
     ```
     https://gitpod.io/#https://github.com/Bonzay993/FlipCardsGameJS
     ```
   - This URL will automatically open the repository in a Gitpod workspace.

#### 3. Configuring Gitpod Extensions

Gitpod allows enhancing the development environment with extensions. Here are recommended extensions:
Install in Gitpod:
     - Open Gitpod.
     - Go to Extensions.
     - Search for "VSCode Icons" and click Install.

 **Live Server:**
   - Automatically reloads the website when files are saved.
   
 **Prettier:**
   - Code formatter that maintains code cleanliness and consistency.
   
 **VSCode Icons:**
   - Adds icons to files and folders in the file explorer for better navigation.
     

### 13.2 GitHub Pages

#### Setting Up GitHub Pages

1. **Navigate to Repository Settings:**
   - Go to the GitHub repository: [FlipCardsGameJS](https://github.com/Bonzay993/FlipCardsGameJS).
   - Click on the "Settings" tab.

2. **Select Source Branch:**
   - Scroll down to the "GitHub Pages" section.
   - Under "Source", select the main branch (e.g., `main`) from the dropdown.
   - Click on "Save".

3. **Access the Deployed Site:**
   - After saving, scroll back down to the "GitHub Pages" section.
   - A green success message will display with the site's URL.
   - The site will be published at:
     ```
     https://bonzay993.github.io/FlipCardsGameJS/
     ```
   - It may take a few minutes for the site to be accessible after the initial setup.

#### Updating the Deployed Site

Whenever new changes are pushed to the main branch on GitHub, GitHub Pages will automatically rebuild and update the site.

## 14. Credits
**[Font Awesome](https://fontawesome.com/search)** - Custom fonts -- Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.

**[VectorStock](https://www.vectorstock.com/)** - Images

**[Vecteezy](https://www.vecteezy.com/)** -Images

**[PixaBay](https://pixabay.com/)** -Free royalty music and sound effects




