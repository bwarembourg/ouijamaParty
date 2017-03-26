function TitleState() {
    this.background = ASSET_MANAGER.getCrop("title");

    this.france = ASSET_MANAGER.getCrop("france");
    this.uk = ASSET_MANAGER.getCrop("uk");

    RENDERER.life.toDisplay = false;
};

TitleState.prototype.update = function() {
    this.background.render(0, 0);
    this.france.render(362, 462);
    this.uk.render(510, 462);

    if(clickHappened){
        console.log("lol");
        if(clickOnFR()){
            french = true;
            changeToFrench();
            STATE_MANAGER.switchToState("game");
        }
        else if(clickOnUK()){
            french = false;
            STATE_MANAGER.switchToState("game");
        }
    }

    var me = this;

};

TitleState.prototype.onKeyPressed = function() {
}

TitleState.prototype.reset = function() {
    // body
};