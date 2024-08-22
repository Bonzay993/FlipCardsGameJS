/**
 * @jest-environment jsdom
 */

const {
  gameInit,
  menuPop,
  updateHighScore,
  levelComplete,
  gameOver
} = require('./game.js');

describe('Game Initialization and Functionality Tests', () => {
  beforeEach(() => {
      // Set up our document body
      document.body.innerHTML = `
          <div class="menu-container"></div>
          <div class="popup"></div>
          <div class="popup-level1"></div>
          <div class="popup-level-complete"></div>
          <div class="popup-game-over"></div>
          <button id="close"></button>
          <button id="close-link"></button>
          <button id="close-level1"></button>
          <button id="close-link-level1"></button>
          <button class="start-game"></button>
          <button class="music-on-off"></button>
          <div class="timer"></div>
          <div class="timer-text"></div>
          <div class="high-score-value"></div>
      `;

      jest.useFakeTimers();
      localStorage.clear();

      // Mock functions
      global.menuBtnHover = jest.fn();
      global.playMenuAudio = jest.fn();
      global.boardInit = jest.fn();
      global.toggleAudio = jest.fn();
      global.displayTimer = jest.fn();
      global.gameOver = jest.fn();
      global.menuBtnOnClick = jest.fn();
      global.displayTimer = jest.fn();

  });

  test('gameInit should initialize the game elements and set up event listeners', () => {
      gameInit();

      expect(menuBtnHover).toHaveBeenCalled();
      expect(playMenuAudio).toHaveBeenCalled();
      expect(document.querySelector(".start-game").onclick).not.toBeNull();
      expect(boardInit).toHaveBeenCalled();

      const musicButtons = document.querySelectorAll('.music-on-off');
      musicButtons.forEach(button => {
          button.click();
          expect(toggleAudio).toHaveBeenCalled();
      });
  });
  
  test('menuPop should display the popup and set up close button events', () => {
    const { openPopup } = menuPop();

    // Directly invoke the popup opening for testing
    openPopup();
    expect(document.querySelector('.popup').style.display).toBe('block');

    document.querySelector("#close").click();
    expect(document.querySelector('.popup').style.display).toBe('none');
  });

  
  test('updateHighScore should update the high score in local storage if the current score is higher', () => {
        updateHighScore(100);
        expect(localStorage.getItem('highScore')).toBe('100');
        expect(document.querySelector('.high-score-value').textContent).toBe('100');
  
        updateHighScore(50);
        expect(localStorage.getItem('highScore')).toBe('100'); // Should not change
        expect(document.querySelector('.high-score-value').textContent).toBe('100');
  
        updateHighScore(150);
        expect(localStorage.getItem('highScore')).toBe('150'); // Should update
        expect(document.querySelector('.high-score-value').textContent).toBe('150');
  });
  
  test('levelComplete should display the level complete popup', () => {
        levelComplete();
        expect(document.querySelector('.popup-level-complete').style.display).toBe('block');
  });
  
  test('gameOver should display the game over popup', () => {
        gameOver();
        expect(document.querySelector('.popup-game-over').style.display).toBe('block');
  });

  

});  
