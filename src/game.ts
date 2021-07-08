class Game {
    canvas: any
    player: Player

    constructor(canvas) {
        this.canvas = canvas;
        this.player = new Player();
    }

}