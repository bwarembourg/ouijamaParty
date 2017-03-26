function Text(x,y) {
    this.font = '10pt Arial';
    this.color = 'white';
    this.value = "Coucou";
    this.helper = "";
    this.toDisplay = true;
    this.helperEnabled = true;
    this.x=x;
    this.y=y;
}

Text.prototype.getText = function(CTX){
    CTX.fillText(this.value, this.x, this.y);
    if(this.helperEnabled){
        CTX.fillText("( "+this.helper+" ) ", this.x, this.y+15);
    }

}