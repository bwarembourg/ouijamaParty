function Life(x,y) {
    this.fillStyle = 'green';
    this.width = LIFE_WIDTH;
    this.height = LIFE_HEIGHT;
    this.x=x;
    this.y=y;
    this.life= LIFE_MAX
    this.toDisplay= false;
}

Life.prototype.calculate = function(value){
    this.life += value;

    if(this.life < 0){
        this.life=0;
    }

    this.width = (this.life * LIFE_WIDTH) / LIFE_MAX;
    if(this.life < 0.7*LIFE_MAX && this.life>0.4){
        this.fillStyle = 'orange';
    }
    if(this.life < 0.4*LIFE_MAX){
        this.fillStyle = 'red';
    }

}