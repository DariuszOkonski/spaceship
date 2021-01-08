class Game {
    init() {
        console.log('init')
    }
}

window.onload = function() {
    const game = new Game();
    game.init()
}