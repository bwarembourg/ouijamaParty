function AssetLoader() {
    this.images = [];
    this.totalToLoad = APP_TOTAL_ASSETS_NB;
    this.totalLoaded = 0;
    this.isReady = false;
};

AssetLoader.prototype.load = function() {
    LOGGER.log("loading assets");

    
    this._loadImage("france", "resources/img/france.png", 128, 128);
    this._loadImage("uk", "resources/img/uk.png", 128, 128);
    this._loadImage("title", "resources/img/title.jpg", 512, 480);


    this._loadImage("background-files", "resources/img/background-files.png", FILES_WIDTH, FILES_HEIGHT);
    this._loadImage("background-menu", "resources/img/background-menu.png", MENU_WIDTH, MENU_HEIGHT);
    this._loadImage("background", "resources/img/background.jpg", BCK_WIDTH, BCK_HEIGHT);

    this._loadImage("mini1", "resources/img/mini1.png", 70, 70);
    this._loadImage("mini2", "resources/img/mini2.png", 70, 70);
    this._loadImage("mini3", "resources/img/mini3.png", 70, 70);
    this._loadImage("mini4", "resources/img/mini4.png", 70, 70);
    this._loadImage("jauge", "resources/img/jauge.png", 132, 44);

    this._loadImage("perso1", "resources/img/perso1.png", PERSO1_WIDTH, PERSO1_HEIGHT);
    this._loadImage("perso2", "resources/img/perso2.png", PERSO2_WIDTH, PERSO2_HEIGHT);
    this._loadImage("perso3", "resources/img/perso3.png", PERSO3_WIDTH, PERSO3_HEIGHT);
    this._loadImage("perso4", "resources/img/perso4.png", PERSO4_WIDTH, PERSO4_HEIGHT);
    
    this._loadImage("button", "resources/img/button.png", BUTTON_WIDTH, BUTTON_HEIGHT);
    this._loadImage("gameover", "resources/img/gameover.jpg", 512, 480);

    
};

AssetLoader.prototype.getImage = function(name) {
    return this.images[name];
};

AssetLoader.prototype._loadImage = function(name, src, width, height) {
    var img = new Image(width, height);
    img.src = src;

    var me = this;
    img.onload = function() {
        me.images[name] = img;

        me.totalLoaded++;
        if (me.totalLoaded === me.totalToLoad) {
            LOGGER.log("assets loaded");
            me.isReady = true;
        }
    };
};
