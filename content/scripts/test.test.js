/**
 * @jest-environment jsdom
 */

const {
  gameInit,
  menuPop,
  levelOnePop,
  gameTimer,
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
});  