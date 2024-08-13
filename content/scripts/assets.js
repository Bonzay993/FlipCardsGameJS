/**
 * ASSETS
 */

const generalAssets = [
    {
        name: "cardBack",
        path: "content/img/card-back.png"
    },

    {
        name: "emptyCard",
        path: "content/img/empty-card.png"
    },
]

//Game assets level 1-3 total of 6 assets

const gameAssetsLevel13 = [
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


const backgroundImages = [
    {
        name: "level1Bg",
        path: "./content/img/level1-420kb-background"
    }

]


// Function to get the path based on the name
function getGeneralAssets(name) {
    const asset = generalAssets.find(asset => asset.name === name);
    return asset ? asset.path : null; // Return the path if found, otherwise return null
}