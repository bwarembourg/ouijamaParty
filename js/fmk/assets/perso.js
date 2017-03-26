function Perso() {
    this.shame;
    this.love;
    this.pet;
    this.food;
    this.family;
}

Perso.prototype.get2RandomItem = function(){
    var items = [];

    var rand1 = Math.ceil(Math.random() * 4);
    var rand2 = rand1;
    switch(rand1){
        case 0 : items.push(this.shame); break;
        case 1 : items.push(this.love); break;
        case 2 : items.push(this.pet); break;
        case 3 : items.push(this.food); break;
        case 4 : items.push(this.family); break;
    }

    while(rand1 == rand2){
        rand2 = Math.ceil(Math.random() * 4);
    }
    switch(rand2){
            case 0 : items.push(this.shame); break;
            case 1 : items.push(this.love); break;
            case 2 : items.push(this.pet); break;
            case 3 : items.push(this.food); break;
            case 4 : items.push(this.family); break;
        }
    return items;
}