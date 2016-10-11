var view = {
    cardList: $('#card-list'),
    cards: [],
    pushCards: function() {
        // populate this.cards with all the cards in the dom,
        // only after the cards have been generated though
        var $domCards = $('#card-list .card');
        for(var i = 0; i < $domCards.length; i++) {
            this.cards.push($domCards[i]);
        }
    },
    assignClickHandlers: function() {
        // assign click handlers to each card dom element
        var cards = $(this.cards);
        cards.on('mouseup', this.handleClicks);
    },
    handleClicks: function() {
        // handle first incoming card click
        var $cardClicked = $(this);
        var name = $cardClicked.find('.name').text();
        controller.toggleClicked(name);
        // controller.attackSequence(name, name);
    }
};

var controller = {
    toggleClicked: function(name) {
        var cardClicked = model.cards.filter(function(card) {
            return card.name === name;
        });
        // model.findCardByName(name).toggleClicked();
        cardClicked.toggleClicked();
        console.log(cardClicked);
        console.log(model.cards);
    },
    attackSequence: function(a, b) {
        var attacker = model.findCardByName(a);
        var victim = model.findCardByName(b);
        console.log('attacker: ', attacker);
        console.log('victim: ', victim);
    },
    generateCards: function() {
        for(var i = 0; i < model.cards.length; i++) {
            var card = model.cards[i];
            view.cardList.append(card.generateMarkup());
        }
    },

};

var model = {
    findCardByName: function(name) {
        return this.cards.filter(function(card) {
            return card.name === name;
        });
    },
    cards: [
        new Spell({
            name: 'fireball',
            damage: 4,
            body: 'Hurl a fireball at a minion or character.',
        }),
        new Minion({
            name: 'wizard',
            damage: 3,
            health: 1,
            attackType: 'ranged',
            body: 'A magic wielding ranged minion.',
            abilities: null,
        }),
        new Minion({
            name: 'soldier',
            damage: 2,
            health: 2,
            attackType: 'melee',
            body: 'A basic melee minion.',
            abilities: null,
        }),
        new Minion({
            name: 'tank',
            damage: 1,
            health: 5,
            attackType: 'melee',
            body: 'A stalwart defender minion.',
            abilities: ['taunt'],
        }),
    ],
};



$(document).ready(function() {

    // generate card list
    controller.generateCards();
    view.pushCards();
    view.assignClickHandlers();
});
