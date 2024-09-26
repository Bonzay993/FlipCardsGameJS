/**
 * @jest-environment jsdom
 */
const {
  gameInit,
  menuPop,
  updateHighScore,
  levelComplete,
  gameOver,
} = require('./game.js');

const { getBackgroundImages } = require('./assets.js');

// Mock the functions manually
jest.mock('./assets.js', () => ({
  getBackgroundImages: jest.fn(() => './mocked-background-image.webp'),  
}));

// Manually define mocks for global functions used in game.js
global.menuBtnHover = jest.fn();
global.playMenuAudio = jest.fn();
global.boardInit = jest.fn(); 
global.toggleAudio = jest.fn();
global.btnToggleAudio = jest.fn();
global.menuBtnOnClick = jest.fn();  

describe('Game Initialization and Functionality Tests', () => {
  beforeEach(() => {
    document.body.innerHTML = `
       <div class="menu-container"></div>
       <div class="popup hide"></div>
       <div class="popup-level1 hide"></div>
       <div class="popup-level-complete hide"></div>
       <div class="popup-game-over hide"></div>
       <button class="close"></button>
       <button class="close-link"></button>
       <button class="start-game"></button>  
       <button class="got-it-button"></button>  
       <button class="music-on-off"></button>
       <div class="timer"></div>
       <div class="timer-text"></div>
       <div class="high-score-value"></div>
       <div class="score-value">0</div>
       <div class="score-calculated">0</div>
       <div class="game-area-wrapper hide"></div>  
       <div class="game-music-btn hide"></div>  
       <p class="version-paragraph hide"></p>
    `;
    jest.useFakeTimers();
    localStorage.clear();
 });

  test('gameInit should initialize the game elements', () => {
    gameInit();
  
    expect(document.querySelector(".menu-container")).not.toBeNull();  
    expect(document.querySelector(".start-game")).not.toBeNull();  
    expect(document.querySelector(".high-score-value").textContent).toBe('0');  
    

    const backgroundContainer = document.querySelector('.set-background');
    if (backgroundContainer) {
      expect(backgroundContainer.style.backgroundImage).toContain('./mocked-background-image.webp');
    } else {
      console.error('Background container not found in DOM.');
    }
  });

  test('menuPop should display the popup and set up close button events', () => {
    const { openPopup } = menuPop();
    openPopup();
    
    expect(document.querySelector('.popup').classList.contains('hide')).toBe(false);  

    document.querySelector(".close").click();
    expect(document.querySelector('.popup').classList.contains('hide')).toBe(true);  
  });

  test('updateHighScore should update the high score in local storage if the current score is higher', () => {
    updateHighScore(100);
    expect(localStorage.getItem('highScore')).toBe('100');
    expect(document.querySelector('.high-score-value').textContent).toBe('100');

    updateHighScore(50);
    expect(localStorage.getItem('highScore')).toBe('100'); 
    expect(document.querySelector('.high-score-value').textContent).toBe('100');

    updateHighScore(150);
    expect(localStorage.getItem('highScore')).toBe('150'); 
    expect(document.querySelector('.high-score-value').textContent).toBe('150');
  });

  test("levelComplete should display the level complete popup", () => {
    gameInit();
    levelComplete();
    const popup = document.querySelector('.popup-level-complete');
    expect(popup.classList).not.toContain('hide');
  });

  test('gameOver should display the game over popup', () => {
    gameOver();
    expect(document.querySelector('.popup-game-over').classList.contains('hide')).toBe(false);
  });

});
