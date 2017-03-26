function TextPerso(x, y) {
    this.font = '10pt Arial';
    this.color = 'white';
    this.name = "Prenom";
    this.toDisplay =true;
    this.pet = "";
    this.shame = "";
    this.love = "";
    this.food = "";
    this.family = "";
    this.visionEarned = false;

    this.errors = [];
    this.x=x;
    this.y=y;
}

TextPerso.prototype.getErrors = function(){
    var errorText ="";
    for(var i=0; i<this.errors.length; i++){
        errorText +=this.errors[i];
        if(i!=this.errors.length-1)
            errorText +=", ";
    }
    
    return errorText;
}

TextPerso.prototype.textifyErrors = function(start, end){
    var errorText ="";
    for(var i=start; i<end; i++){
        if(i <  this.errors.length){
            errorText +=this.errors[i];
            if(i!=this.errors.length-1)
                errorText +=", ";
        }
    }
    
    return errorText;
}

TextPerso.prototype.isFilled = function(){
    if(this.pet=="")
        return false;
    if(this.shame=="")
        return false;
    if(this.love=="")
        return false;
    if(this.food=="")
        return false;

    return true;
}

TextPerso.prototype.getText = function(CTX){
    if(!french){
        CTX.fillText(this.name + " :", this.x, this.y);
        CTX.fillText("Animal : "+this.pet, this.x, this.y+15);
        CTX.fillText("Untold : "+this.shame, this.x, this.y+30);
        CTX.fillText("Love : "+this.love, this.x, this.y+45);
        CTX.fillText("Food : "+this.food, this.x, this.y+60);
        CTX.fillText("Errors : "+this.textifyErrors(0,4), this.x-80, this.y+75);
    }
    else{
        CTX.fillText(this.name + " :", this.x, this.y);
        CTX.fillText("Animal : "+this.pet, this.x, this.y+15);
        CTX.fillText("Secret : "+this.shame, this.x, this.y+30);
        CTX.fillText("Amour : "+this.love, this.x, this.y+45);
        CTX.fillText("Plat : "+this.food, this.x, this.y+60);
        CTX.fillText("Erreurs : "+this.textifyErrors(0,4), this.x-80, this.y+75);
    }
    CTX.fillText(this.textifyErrors(4, 9), this.x-80, this.y+90);
    CTX.fillText(this.textifyErrors(9, 14), this.x-80, this.y+105);
    CTX.fillText(this.textifyErrors(14, 19), this.x-80, this.y+120);
    

    

}