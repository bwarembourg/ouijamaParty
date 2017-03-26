function StateManager() {
    this.states = [];
    this.currentState = null;

    this._init();
};

StateManager.prototype.update = function() {
    this.currentState.update();
};

StateManager.prototype.switchToState = function(name) {
    this.currentState.reset();
    this.currentState = null;
    this.currentState = this.states[name];
    clickHappened=false;
};

StateManager.prototype._init = function() {
    this.states["title"] = new TitleState();
    this.states["game"] = new Game();
    this.states["gameover"] = new GameOverState();
    this.states["success"] = new SuccessState();

    this.currentState = this.states["title"];
};

