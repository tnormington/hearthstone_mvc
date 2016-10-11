function Minion(params) {
    Card.call(this, params);
    this.health = params.health;
    this.attackType = params.attackType;
    this.abilities = params.abilities;
}

Minion.prototype = new Card();
Minion.prototype.constructor = Minion;


Minion.prototype.attack = function(cardToAttack) {
    cardToAttack.setHealth(cardToAttack.health - this.damage);
    if(this.attackType === 'melee') {
        this.setHealth(this.health - cardToAttack.damage);
    }
    console.log(this.name + '\'s health: ' + this.health);
    console.log(cardToAttack.name + '\'s health: ' + cardToAttack.health);
};

Minion.prototype.setHealth = function(amount) {
    this.health = amount;
};

Minion.prototype.getAbilities = function() {
    if(this.abilities !== undefined && this.abilities !== null) {
        return this.abilities.join(', ');
    }
    return;
};
