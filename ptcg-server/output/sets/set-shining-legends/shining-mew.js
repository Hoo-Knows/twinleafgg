"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiningMew = void 0;
const pokemon_card_1 = require("../../game/store/card/pokemon-card");
const card_types_1 = require("../../game/store/card/card-types");
const game_1 = require("../../game");
const game_effects_1 = require("../../game/store/effects/game-effects");
class ShiningMew extends pokemon_card_1.PokemonCard {
    constructor() {
        super(...arguments);
        this.stage = card_types_1.Stage.BASIC;
        this.cardType = card_types_1.CardType.PSYCHIC;
        this.hp = 30;
        this.weakness = [{ type: card_types_1.CardType.DARK }];
        this.retreat = [];
        this.attacks = [{
                name: 'Legendary Guidance',
                cost: [card_types_1.CardType.PSYCHIC],
                damage: 0,
                text: 'Search your deck for up to 2 Energy cards and attach them to your Pokemon in any way you like. Then, shuffle your deck.'
            }, {
                name: 'Beam',
                cost: [card_types_1.CardType.PSYCHIC],
                damage: 10,
                text: ''
            }];
        this.set = 'SLG';
        this.name = 'Shining Mew';
        this.fullName = 'Shining Mew SLG';
        this.cardImage = 'assets/cardback.png';
        this.setNumber = '40';
    }
    reduceEffect(store, state, effect) {
        if (effect instanceof game_effects_1.AttackEffect && effect.attack === this.attacks[0]) {
            const player = effect.player;
            return store.prompt(state, new game_1.AttachEnergyPrompt(player.id, game_1.GameMessage.ATTACH_ENERGY_TO_BENCH, player.deck, game_1.PlayerType.BOTTOM_PLAYER, [game_1.SlotType.BENCH, game_1.SlotType.ACTIVE], { superType: card_types_1.SuperType.ENERGY }, { allowCancel: true, min: 0, max: 2 }), transfers => {
                transfers = transfers || [];
                // cancelled by user
                if (transfers.length === 0) {
                    return state;
                }
                for (const transfer of transfers) {
                    const target = game_1.StateUtils.getTarget(state, player, transfer.to);
                    player.deck.moveCardTo(transfer.card, target);
                }
                state = store.prompt(state, new game_1.ShuffleDeckPrompt(player.id), order => {
                    player.deck.applyOrder(order);
                });
            });
        }
        return state;
    }
}
exports.ShiningMew = ShiningMew;
