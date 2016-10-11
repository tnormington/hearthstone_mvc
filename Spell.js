function Spell(params) {
    Card.call(this, params);
}

Spell.prototype = new Card();
Spell.prototype.constructor = Spell;

Spell.prototype.cast = function(target) {
    console.log(this.name + ' cast at ' + target.name);
};
