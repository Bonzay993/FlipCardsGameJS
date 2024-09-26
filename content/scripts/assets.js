/**
 * ASSETS
*/
const GENERAL_ASSETS = [
    {
        name: "cardBack",
        path: "content/img/card-back.webp"
    },

    {
        name: "emptyCard",
        path: "content/img/empty-card.webp"
    },
];

//Game assets level 1-3 total of 6 assets
const GAME_ASSETS_LEVEL_1TO3 = [
    {
        name: "card",
        path: "content/img/level1-level3/card.webp"
        
    },
    {
        name: "clepsidre",
        path: "./content/img/level1-level3/clepsidre.webp"
    },

    {
        name: "currency",
        path: "./content/img/level1-level3/currency.webp"
    },

    {
        name: "globe",
        path: "./content/img/level1-level3/globe.webp"
    },

    {
        name: "graph",
        path: "./content/img/level1-level3/graph.webp"
    },

    {
        name: "id",
        path: "./content/img/level1-level3/id.webp"
    },

    {
        name: "card",
        path: "./content/img/level1-level3/card.webp"
        
    },
    {
        name: "clepsidre",
        path: "./content/img/level1-level3/clepsidre.webp"
    },

    {
        name: "currency",
        path: "./content/img/level1-level3/currency.webp"
    },

    {
        name: "globe",
        path: "./content/img/level1-level3/globe.webp"
    },

    {
        name: "graph",
        path: "./content/img/level1-level3/graph.webp"
    },

    {
        name: "id",
        path: "./content/img/level1-level3/id.webp"
    },

];

const BACKGROUND_IMAGES= [
    {
        name: "level1Bg",
        path: "./content/img/level1-background.png"
    },

    {
        name: "menuBg",
        path: "./content/img/game-background.webp"
    }

];

/**This function will return a general asset based on it's name */
function getGeneralAssets(name) {
    let asset = GENERAL_ASSETS.find(asset => asset.name === name);
    if (!asset) {
        console.error(`Asset not found: ${name}`);
        return './content/img/error.webp'; // Fallback asset
    }
    return asset.path;
}

/**This function will return a background image asset based on it's name */
function getBackgroundImages(name) {
    let asset = BACKGROUND_IMAGES.find(asset => asset.name === name);
    if (!asset) {
        console.error(`Asset not found: ${name}`);
        return './content/img/error.webp'; // Fallback asset
    }
    return asset.path;
}

module.exports = {
    getBackgroundImages,
};