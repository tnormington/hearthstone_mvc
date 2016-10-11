function Card(params) {
    if(params) {
        this.clicked = false;

        this.name = params.name;
        this.damage = params.damage;
        this.body = params.body;
    }
}

Card.prototype.toggleClicked = function() {
    if(this.clicked) {
        this.clicked = false;
    } else {
        this.clicked = true;
    }
};



Card.prototype.generateMarkup = function() {
    var card = $('<div class="card"></div>');
    var name = $('<h3 class="name"></h3>').html(this.name);
    var body = $('<span class="body"></span>').html(this.body);
    if(this instanceof Minion) {
        var abilities = $('<span class="abilities"></span>').html(this.getAbilities());
        body.append(abilities);
    }
    var damage = $('<span class="damage"></span>').html(this.damage);
    var health = $('<span class="health"></span>').html(this.health);
    card.append(name, body, damage, health);
    return card;
};

Card.prototype.clickHandler = function() {
    console.log('jello world');
};
