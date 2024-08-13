

const gameSounds = [
    {
        name: "background-music",
        path: './content/sound/menu.mp3'
    },

    {
        name:"menu-btn-onclick",
        path:'./content/sound/menu-btn-onclick.mp3'
    },

    {
        name: "menu-hover-sound",
        path: ".content/sound/menu-btn-hover.mp3"
    }
]

function getSounds(name) {
    const asset = gameSounds.find(asset => asset.name === name);
    return asset ? asset.path : null; // Return the path if found, otherwise return null
}