function CropManager() {
    this.crops = [];
};

CropManager.prototype.createCrops = function() {
    
    this.crops["title"] = new Crop("title", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["gameover"] = new Crop("gameover", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["win"] = new Crop("win", CANVAS_WIDTH, CANVAS_HEIGHT, 0, 0);
    this.crops["background-files"] = new Crop("background-files", FILES_WIDTH, FILES_HEIGHT, 0, 0);
    this.crops["background-menu"] = new Crop("background-menu", MENU_WIDTH, MENU_HEIGHT, 0, 0);
    this.crops["background"] = new Crop("background", BCK_WIDTH, BCK_HEIGHT, 0, 0);
    this.crops["mini1"] = new Crop("mini1", 70, 70, 0, 0);
    this.crops["mini2"] = new Crop("mini2", 70, 70, 0, 0);
    this.crops["mini3"] = new Crop("mini3", 70, 70, 0, 0);
    this.crops["mini4"] = new Crop("mini4", 70, 70, 0, 0);

    this.crops["perso1"] = new Crop("perso1", PERSO1_WIDTH, PERSO1_HEIGHT, 0, 0);
    this.crops["perso2"] = new Crop("perso2", PERSO2_WIDTH, PERSO2_HEIGHT, 0, 0);
    this.crops["perso3"] = new Crop("perso3", PERSO3_WIDTH, PERSO3_HEIGHT, 0, 0);
    this.crops["perso4"] = new Crop("perso4", PERSO4_WIDTH, PERSO4_HEIGHT, 0, 0);
    this.crops["jauge"] = new Crop("jauge", 132, 44, 0, 0);

    this.crops["button"] = new Crop("button", BUTTON_WIDTH, BUTTON_HEIGHT, 0, 0);

    this.crops["france"] = new Crop("france", 128, 128, 0, 0);
    this.crops["uk"] = new Crop("uk", 128, 128, 0, 0);

    // this.crops["mc_left_0"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 0, 0);
    // this.crops["mc_left_1"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, MC_WIDTH, 0);
    // this.crops["mc_left_2"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 2*MC_WIDTH, 0);
    // this.crops["mc_left_3"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 3*MC_WIDTH, 0);
    // this.crops["mc_left_4"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 4*MC_WIDTH, 0);
    // this.crops["mc_left_5"] = new Crop("mc_left", MC_WIDTH, MC_HEIGHT, 5*MC_WIDTH, 0);
};

CropManager.prototype.getCrop = function(name) {
    return this.crops[name];
};