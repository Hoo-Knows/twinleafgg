"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShuffleDeckPrompt = void 0;
const prompt_1 = require("./prompt");
class ShuffleDeckPrompt extends prompt_1.Prompt {
    constructor(playerId) {
        super(playerId);
        this.type = 'Shuffle deck';
    }
    validate(result, state) {
        if (result === null) {
            return false;
        }
        const player = state.players.find(p => p.id === this.playerId);
        if (player === undefined) {
            return false;
        }
        if (result.length !== player.deck.cards.length) {
            return false;
        }
        const s = result.slice();
        s.sort();
        for (let i = 0; i < s.length; i++) {
            if (s[i] !== i) {
                return false;
            }
        }
        return true;
    }
}
exports.ShuffleDeckPrompt = ShuffleDeckPrompt;
