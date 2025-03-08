"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArvensSkwovet = void 0;
const pokemon_card_1 = require("../../game/store/card/pokemon-card");
const card_types_1 = require("../../game/store/card/card-types");
const game_1 = require("../../game");
const prefabs_1 = require("../../game/store/prefabs/prefabs");
class ArvensSkwovet extends pokemon_card_1.PokemonCard {
    constructor() {
        super(...arguments);
        this.regulationMark = 'I';
        this.tags = [card_types_1.CardTag.ARVENS];
        this.stage = card_types_1.Stage.BASIC;
        this.cardType = C;
        this.hp = 60;
        this.weakness = [{ type: F }];
        this.retreat = [C];
        this.attacks = [
            {
                name: 'Gnaw Through',
                cost: [C],
                damage: 10,
                text: 'Before doing damage, discard all Pokémon Tool cards from your opponent\'s Active Pokémon.'
            }
        ];
        this.set = 'SV9a';
        this.cardImage = 'assets/cardback.png';
        this.setNumber = '54';
        this.name = 'Arven\'s Skwovet';
        this.fullName = 'Arven\'s Skwovet SV9a';
    }
    reduceEffect(store, state, effect) {
        if (prefabs_1.WAS_ATTACK_USED(effect, 0, this)) {
            const activePokemon = effect.opponent.active;
            for (const tool of activePokemon.tools) {
                prefabs_1.REMOVE_TOOL(store, state, activePokemon, tool, game_1.SlotType.DISCARD);
            }
            effect.damage = 10;
        }
        return state;
    }
}
exports.ArvensSkwovet = ArvensSkwovet;
