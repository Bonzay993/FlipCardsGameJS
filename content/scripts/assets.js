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
]

//Game assets level 1-3 total of 6 assets

const GAME_ASSETS_LEVEL_1TO3 = [
    {
        name: "card",
        path: "./content/img/level1-level3/card.png"
        
    },
    {
        name: "clepsidre",
        path: "./content/img/level1-level3/clepsidre.png"
    },

    {
        name: "currency",
        path: "./content/img/level1-level3/currency.png"
    },

    {
        name: "globe",
        path: "./content/img/level1-level3/globe.png"
    },

    {
        name: "graph",
        path: "./content/img/level1-level3/Graph.png"
    },

    {
        name: "id",
        path: "./content/img/level1-level3/id.png"
    },

    {
        name: "card",
        path: "./content/img/level1-level3/card.png"
        
    },
    {
        name: "clepsidre",
        path: "./content/img/level1-level3/clepsidre.png"
    },

    {
        name: "currency",
        path: "./content/img/level1-level3/currency.png"
    },

    {
        name: "globe",
        path: "./content/img/level1-level3/globe.png"
    },

    {
        name: "graph",
        path: "./content/img/level1-level3/Graph.png"
    },

    {
        name: "id",
        path: "./content/img/level1-level3/id.png"
    },

]


const BACKGROUND_IMAGES= [
    {
        name: "level1Bg",
        path: "./content/img/level1-420kb-background"
    }

]


// Function to get the path based on the name
function getGeneralAssets(name) {
    let asset = GENERAL_ASSETS.find(asset => asset.name === name);
    if (!asset) {
        console.error(`Asset not found: ${name}`);
        return './content/img/error.webp'; // Fallback asset
    }
    return asset.path;
}