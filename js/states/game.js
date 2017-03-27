function Game() {
    this.stateName="Game";

    this.life = RENDERER.life;
    RENDERER.life.toDisplay = true;

    this.perso1 = new Perso();
    this.perso2 = new Perso();
    this.perso3 = new Perso();
    this.perso4 = new Perso();

    this.first = true;
    this.dialogs = true;
    this.skit = false;
    this.indice = false;
    this.vision = false;
    this.firstIndices = false;
    this.firstIndicesCounter = 0;
    this.nbQuestions = 5;
    this.questionNo = 0;
    this.dialogNo = 0;
    this.persoSpeaking =0;
    this.visionsCounter = 3;

    this.questionAsked = false;

    clickHappened = false;

    this.text = new Text(420, 480);
    this.text.helper = basicHelper;
    RENDERER.texts.push(this.text);

    this.jauge = ASSET_MANAGER.getCrop("jauge");

    this.backgroundFiles = ASSET_MANAGER.getCrop("background-files");
    this.backgroundMenu = ASSET_MANAGER.getCrop("background-menu");
    this.background = ASSET_MANAGER.getCrop("background");
    this.mini1 = ASSET_MANAGER.getCrop("mini1");
    this.mini2 = ASSET_MANAGER.getCrop("mini2");
    this.mini3 = ASSET_MANAGER.getCrop("mini3");
    this.mini4 = ASSET_MANAGER.getCrop("mini4");

    this.miniDialog1 = ASSET_MANAGER.getCrop("mini1");
    this.miniDialog2 = ASSET_MANAGER.getCrop("mini2");
    this.miniDialog3 = ASSET_MANAGER.getCrop("mini3");
    this.miniDialog4 = ASSET_MANAGER.getCrop("mini4");

    this.persoSprite1 = ASSET_MANAGER.getCrop("perso1");
    this.persoSprite2 = ASSET_MANAGER.getCrop("perso2");
    this.persoSprite3 = ASSET_MANAGER.getCrop("perso3");
    this.persoSprite4 = ASSET_MANAGER.getCrop("perso4");

    this.buttonPass = ASSET_MANAGER.getCrop("button");
    this.buttonNoone = ASSET_MANAGER.getCrop("button");
    this.buttonVision = ASSET_MANAGER.getCrop("button");

    this.buttonPassText = new Text(BUTTON_PASS_X+30, BUTTON_PASS_Y+30);
    this.buttonPassText.value = "PASS";
    this.buttonPassText.toDisplay = false;
    this.buttonPassText.helperEnabled=false;
    RENDERER.texts.push(this.buttonPassText);
    this.buttonNooneText = new Text(BUTTON_NOONE_X+25, BUTTON_NOONE_Y+30);
    this.buttonNooneText.value = "NOONE";
    this.buttonNooneText.toDisplay = false;
    this.buttonNooneText.helperEnabled=false;
    RENDERER.texts.push(this.buttonNooneText);
    this.buttonVisionText = new Text(BUTTON_VISION_X+20, BUTTON_VISION_Y+30);
    this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
    this.buttonVisionText.toDisplay = false;
    this.buttonVisionText.helperEnabled=false;
    RENDERER.texts.push(this.buttonVisionText);
    
    this.music = new Audio('resources/sounds/music.mp3');
    this.music.loop = true;
    this.music.play();

    this.textPerso = new TextPerso(100, 30);
    RENDERER.texts.push(this.textPerso);

    this.textPerso2 = new TextPerso(100, 180);
    RENDERER.texts.push(this.textPerso2);

    this.textPerso3 = new TextPerso(100, 330); 
    RENDERER.texts.push(this.textPerso3);

    this.textPerso4 = new TextPerso(100, 480);
    RENDERER.texts.push(this.textPerso4);

};

//
// UPDATE
//
Game.prototype.update = function() {

    if(this.first){
        this.first=false;
        changeToFrench();
        this.generatePersos();
        if(french){
            this.buttonPassText.value = "PASSER";
            this.buttonNooneText.value = "PERSONNE";
            this.text.helper = basicHelper;
            console.log("wesh");
        }
        this.buttonNooneText.x -=12;
        //this.fillFiles();
    }

    this.life.toDisplay = true;
    if(this.life.life <=0){
        STATE_MANAGER.switchToState("gameover");
    }
    //CONDITION VICTOIRE
    if(this.textPerso.isFilled() && this.textPerso2.isFilled() && this.textPerso3.isFilled() && this.textPerso4.isFilled()){
        STATE_MANAGER.switchToState("gameover");
    }    
    this.checkFilledFiles();

    this.backgroundFiles.render(FILES_X, FILES_Y);
    this.backgroundMenu.render(MENU_X, MENU_Y);
    this.background.render(BCK_X, BCK_Y);
    this.mini1.render(18, 20);
    this.mini2.render(18, 170);
    this.mini3.render(18, 320);
    this.mini4.render(18, 470);

    if( this.skit ){
        this.displayMini();
    }

    if(this.dialogs){
        this.displayDialog();
    }
    else{
        if(this.indice){
            //this.text.value="INDICE !!!!";
        }
        else if(this.questionAsked && !this.skit && !this.vision){
            this.buttonNoone.render(BUTTON_NOONE_X, BUTTON_NOONE_Y);
            this.buttonPass.render(BUTTON_PASS_X, BUTTON_PASS_Y);
            this.buttonVision.render(BUTTON_VISION_X, BUTTON_VISION_Y);
            this.enableButtons();

            this.displayQuestions();
        }
    }


    if(clickHappened){
        this.onClick();
    }

    this.jauge.render(LIFE_X-16, LIFE_Y-12);

};

Game.prototype.onKeyPressed = function() {
    
}

Game.prototype.onClick = function() {
    if(this.dialogs){
        this.dialogNo++;
        if(this.dialogNo >= dialogs.length){
            this.dialogs=false;
            this.firstIndices = true;
            this.onClick();
        }
    }
    else if( this.firstIndices ){
        this.firstIndicesCounter++;
        if(this.firstIndicesCounter <= 2){
            this.displayIndice();
        }
        else{
            this.firstIndices = false;
            this.questionAsked=true;
            this.switchQuestion(false);
            this.text.helper = questionHelper;
        }
    }
    else if( this.indice ){
        this.indice = false;
        this.switchQuestion( this. success );
        
    }
    else if( this.vision ){
        this.vision = false;
        this.indice = true;
        this.displayIndice();
        this.success = true;
    }
    else if( this.skit ){
        this.skit = false;
        if( this.success){
            this.indice = true;
            if( questions.length != 1)
                this.displayIndice();
        }
        else{
            this.switchQuestion( this.success );
        }
    }

    else if (!this.dialogs){
            if(clickOnButtonPass()){
                this.pass();
            }
            else if(clickOnButtonNoone()){
                this.chose(0);
            }
            else if(clickOnButtonVision()){
                this.getVision();
            }
            else if(clickOnPerso1()){
                this.chose(1);
            }
            else if(clickOnPerso2()){
                this.chose(2);
            }
            else if(clickOnPerso3()){
                this.chose(3);
            }
            else if(clickOnPerso4()){
                this.chose(4);
            }
    }

    
    clickHappened=false;
}

Game.prototype.generatePersos = function(){
    this.perso1.name = names[0];
    this.perso2.name = names[1];
    this.perso3.name = names[2];
    this.perso4.name = names[3];

    this.textPerso.name = names[0];
    this.textPerso2.name = names[1];
    this.textPerso3.name = names[2];
    this.textPerso4.name = names[3];

    //PET
    var randomPet =  Math.ceil(Math.random() * pets.length-1);
    this.perso1.pet = pets[randomPet];
    pets.splice(randomPet, 1);

    var randomPet =  Math.ceil(Math.random() * pets.length-1);
    this.perso2.pet = pets[randomPet];
    pets.splice(randomPet, 1);

    var randomPet =  Math.ceil(Math.random() * pets.length-1);
    this.perso3.pet = pets[randomPet];
    pets.splice(randomPet, 1);

    this.perso4.pet = pets[0];

    //LOVE
    var randomLove = Math.ceil(Math.random() * loves.length-1);
    this.perso1.love = loves[randomLove];
    loves.splice(randomLove, 1);

    var randomLove = Math.ceil(Math.random() * loves.length-1);
    this.perso2.love = loves[randomLove];
    loves.splice(randomLove, 1);

    var randomLove = Math.ceil(Math.random() * loves.length-1);
    this.perso3.love = loves[randomLove];
    loves.splice(randomLove, 1);

    this.perso4.love = loves[0];

    //SHAME
    var randomShame = Math.ceil(Math.random() * shames.length-1);
    this.perso1.shame = shames[randomShame];
    shames.splice(randomShame, 1);

    var randomShame = Math.ceil(Math.random() * shames.length-1);
    this.perso2.shame = shames[randomShame];
    shames.splice(randomShame, 1);

    var randomShame = Math.ceil(Math.random() * shames.length-1);
    this.perso3.shame = shames[randomShame];
    shames.splice(randomShame, 1);

    this.perso4.shame = shames[0];

    //FOOD
    var randomFood = Math.ceil(Math.random() * foods.length-1);
    this.perso1.food = foods[randomFood];
    foods.splice(randomFood, 1);

    var randomFood = Math.ceil(Math.random() * foods.length-1);
    this.perso2.food = foods[randomFood];
    foods.splice(randomFood, 1);

    var randomFood = Math.ceil(Math.random() * foods.length-1);
    this.perso3.food = foods[randomFood];
    foods.splice(randomFood, 1);

    this.perso4.food = foods[0];
    
    //FAMILY
    var randomFamily = Math.ceil(Math.random() * families.length-1);
    this.perso1.family = families[randomFamily];
    families.splice(randomFamily, 1);
    
    var randomFamily = Math.ceil(Math.random() * families.length-1);
    this.perso2.family = families[randomFamily];
    families.splice(randomFamily, 1);

    var randomFamily = Math.ceil(Math.random() * families.length-1);
    this.perso3.family = families[randomFamily];
    families.splice(randomFamily, 1);

    this.perso4.family = families[0];
    
}

Game.prototype.displayDialog = function(){

        switch( dialogs[this.dialogNo].perso){
            case 1 : this.miniDialog1.render(300, 480); break;
            case 2 : this.miniDialog2.render(300, 480); break;
            case 3 : this.miniDialog3.render(300, 480); break;
            case 4: this.miniDialog4.render(300, 480); break;
            default: break;
        }

        this.text.value = dialogs[this.dialogNo].text;
}

Game.prototype.displayQuestions = function(){

        switch( this.persoSpeaking ){
            case 1 : this.miniDialog1.render(300, 480); break;
            case 2 : this.miniDialog2.render(300, 480); break;
            case 3 : this.miniDialog3.render(300, 480); break;
            default: this.miniDialog4.render(300, 480); break;
        }  
        this.text.value = questions[this.questionNo].text;
        this.text.helper = questionHelper;
}

Game.prototype.displayMini = function(){
        switch( this.persoSpeaking ){
            case 1 : this.miniDialog1.render(300, 480); break;
            case 2 : this.miniDialog2.render(300, 480); break;
            case 3 : this.miniDialog3.render(300, 480); break;
            default: this.miniDialog4.render(300, 480); break;
        }  
}

Game.prototype.displayIndice = function(){
    randPerso = Math.ceil(Math.random() * 3);
    items = [];
    switch(randPerso){
        case 0 : items = this.perso1.get2RandomItem(); break;
        case 1 : items = this.perso2.get2RandomItem(); break;
        case 2 : items = this.perso3.get2RandomItem(); break;
        case 3 : items = this.perso4.get2RandomItem(); break;
    }

    this.text.value = indice + items[0].full + indice2 + items[1].full;
}

Game.prototype.reset = function() {
    this.music.pause();
    this.music.currentTime =0;
    
};

Game.prototype.pass = function() {
    this.life.calculate(-1);
    this.success = false;
    this.skit = true;
    this.disableButtons();
    this.text.value = pass;
    this.text.helper = basicHelper;
}

Game.prototype.switchQuestion = function(success) {
    if(this.dialogs){
        this.dialogs = false;
        this.questionAsked = true;
    }   
    var oldQuestioNo = this.questionNo;

    if(success){
        questions.splice( oldQuestioNo, 1);
        this.questionNo = Math.ceil(Math.random() * questions.length - 1);
    }
    else{
        while(oldQuestioNo == this.questionNo && questions.length>1){
            this.questionNo = Math.ceil(Math.random() * questions.length - 1);
        }
    }
    this.persoSpeaking = Math.ceil(Math.random() * 4);

}

Game.prototype.disableButtons = function(){
    this.buttonNooneText.toDisplay = false;
    this.buttonPassText.toDisplay = false;
    this.buttonVisionText.toDisplay = false;
}

Game.prototype.enableButtons = function(){
    this.buttonNooneText.toDisplay = true;
    this.buttonPassText.toDisplay = true;
    this.buttonVisionText.toDisplay = true;
}


//CHOSE
Game.prototype.chose = function(persoNo){
    var textValue;
    if(persoNo == 0){
        if( this.checkNoone() ){
            this.success= true;
            textValue = success;
        }
        else{
            this.life.calculate(-2);
            textValue = defeat;
        }
    }
    else{
        var perso;
        switch(persoNo){
            case 1 : perso = this.perso1; break;
            case 2 : perso = this.perso2; break;
            case 3 : perso = this.perso3; break;
            case 4 : perso = this.perso4; break;
        }
        var textPerso;
        switch(persoNo){
            case 1 : textPerso = this.textPerso; break;
            case 2 : textPerso = this.textPerso2; break;
            case 3 : textPerso = this.textPerso3; break;
            case 4 : textPerso = this.textPerso4; break;
        }
        //REUSSITE OU PAS ?
        if( this.checkAnswer(perso) ){
            this.success = true;
            //edit fiche perso
            this.editFile(textPerso, true);
            textValue = success;
        }
        else{
            this.success = false;
            //edit fiche perso
            this.editFile(textPerso, false);
            textValue = defeat;
            this.life.calculate(-3);
        }
    }

    this.skit = true;
    this.disableButtons();
    this.text.value = textValue;
    this.text.helper = basicHelper

}

Game.prototype.checkAnswer = function(perso){
    var question = questions[ this.questionNo ];
    switch (question.type){
        case "shame" : 
            if( question.short == perso.shame.short )
                return true;
            break;
        case "love" :
            if( question.short == perso.love.short )
                return true;
            break;
        case "pet" :
            if( question.short == perso.pet.short )
                return true;
            break;
        case "food" :
            if( question.short == perso.food.short )
                return true;
            break;
        case "family" :
            if( question.short == perso.family.short )
                return true;
            break;
    }
    return false;
}

Game.prototype.editFile = function(textPerso, success){
    var question = questions[ this.questionNo ];
    if(success){
        switch (question.type){
            case "shame" :
                textPerso.shame = question.short;
                break;
            case "love" :
                textPerso.love = question.short;
                break;
            case "pet" :
                textPerso.pet = question.short;
                break;
            case "food" :
                textPerso.food = question.short;
                break;
            case "family" :
                textPerso.family = question.short;
                break;
        }
    }
    else{
        textPerso.errors.push(question.short);
    }
}

Game.prototype.checkNoone = function(){
    var question = questions[ this.questionNo ];
    for(var i=0; i<pets.length; i++){
        if(pets[i].short == question.short)
            return true;
    }
    for( var i=0; i<foods.length; i++){
        if(foods[i].short == question.short)
            return true;
    }
    for( var i=0; i<shames.length; i++){
        if(shames[i].short == question.short)
            return true;
    }
    for( var i=0; i<loves.length; i++){
        if(loves[i].short == question.short)
            return true;
    }
    for( var i=0; i<families.length; i++){
        if(families[i].short == question.short)
            return true;
    }
    return false;
};

Game.prototype.getVision = function(){
    this.visionsCounter--;
    if(this.visionsCounter<0){
        this.visionsCounter=0;
        return;
    }
    this.vision = true;
    this.displayVision();
    this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
}

Game.prototype.displayVision = function(){
    var name = "";
    var textPerso;

    if(this.checkAnswer( this.perso1 )){
        name = this.perso1.name;
        textPerso = this.textPerso;
    }
    else if(this.checkAnswer( this.perso2 )){
        name = this.perso2.name;
        textPerso = this.textPerso2;
    }
    else if(this.checkAnswer( this.perso3 )){
        name = this.perso3.name;
        textPerso = this.textPerso3;
    }
    else if(this.checkAnswer( this.perso4 )){
        name = this.perso4.name;
        textPerso = this.textPerso4;
    }
    else {
        if(french)
            name = "personne";
        else
            name = "noone";
    }

    if(name != "noone" && name !="personne"){
        this.editFile(textPerso, true);
    }

    this.text.value = revelation + name;
    this.text.helper = basicHelper;
    this.disableButtons();
}

Game.prototype.checkFilledFiles = function(){
     
    if(this.textPerso.isFilled() && !this.textPerso.visionEarned){
        this.textPerso.visionEarned = true;
        this.visionsCounter++;
        this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
    }   
    else if(this.textPerso2.isFilled() && !this.textPerso2.visionEarned){
        this.textPerso2.visionEarned = true;
        this.visionsCounter++;
        this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
    }
    else if(this.textPerso3.isFilled() && !this.textPerso3.visionEarned){
        this.textPerso3.visionEarned = true;
        this.visionsCounter++;
        this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
    }   
    else if(this.textPerso4.isFilled() && !this.textPerso4.visionEarned){
        this.textPerso4.visionEarned = true;
        this.visionsCounter++;
        this.buttonVisionText.value = "VISION ("+this.visionsCounter+")";
    }   
    
       
    
}

Game.prototype.fillFiles = function(){
    this.textPerso.pet = this.perso1.pet.short;
    this.textPerso.shame = this.perso1.shame.short;
    this.textPerso.love = this.perso1.love.short;
    this.textPerso.food = this.perso1.food.short;

    this.textPerso2.pet = this.perso2.pet.short;
    this.textPerso2.shame = this.perso2.shame.short;
    this.textPerso2.love = this.perso2.love.short;
    this.textPerso2.food = this.perso2.food.short;

    this.textPerso3.pet = this.perso3.pet.short;
    this.textPerso3.shame = this.perso3.shame.short;
    this.textPerso3.love = this.perso3.love.short;
    this.textPerso3.food = this.perso3.food.short;

    this.textPerso4.pet = this.perso4.pet.short;
    this.textPerso4.shame = this.perso4.shame.short;
    this.textPerso4.love = this.perso4.love.short;
    this.textPerso4.food = this.perso4.food.short;
}