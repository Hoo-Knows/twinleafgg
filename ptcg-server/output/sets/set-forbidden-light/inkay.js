"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inkay = void 0;
const pokemon_card_1 = require("../../game/store/card/pokemon-card");
const card_types_1 = require("../../game/store/card/card-types");
const game_effects_1 = require("../../game/store/effects/game-effects");
const attack_effects_1 = require("../../game/store/effects/attack-effects");
class Inkay extends pokemon_card_1.PokemonCard {
    constructor() {
        super(...arguments);
        this.stage = card_types_1.Stage.BASIC;
        this.cardType = card_types_1.CardType.PSYCHIC;
        this.hp = 60;
        this.weakness = [{ type: card_types_1.CardType.PSYCHIC }];
        this.retreat = [card_types_1.CardType.COLORLESS];
        this.evolvesInto = 'Malamar';
        this.attacks = [{
                name: 'Hypnosis',
                cost: [card_types_1.CardType.PSYCHIC],
                damage: 0,
                text: 'Your opponent\'s Active Pokémon is now Asleep.'
            }];
        this.set = 'FLI';
        this.name = 'Inkay';
        this.fullName = 'Inkay FLI';
        this.cardImage = 'assets/cardback.png';
        this.setNumber = '50';
    }
    reduceEffect(store, state, effect) {
        if (effect instanceof game_effects_1.AttackEffect && effect.attack === this.attacks[0]) {
            const specialConditionEffect = new attack_effects_1.AddSpecialConditionsEffect(effect, [card_types_1.SpecialCondition.ASLEEP]);
            store.reduceEffect(state, specialConditionEffect);
        }
        return state;
    }
}
exports.Inkay = Inkay;
