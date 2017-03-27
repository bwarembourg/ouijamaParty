function SuccessState() {
    this.background = ASSET_MANAGER.getCrop("win");
    RENDERER.life.toDisplay = false;
};

SuccessState.prototype.update = function() {
    this.background.render(0, 0);

    var me = this;
};

SuccessState.prototype.reset = function() {
};

SuccessState.prototype.onKeyPressed = function() {
}