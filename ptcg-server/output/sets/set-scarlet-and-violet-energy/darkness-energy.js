"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DarknessEnergy = void 0;
const card_types_1 = require("../../game/store/card/card-types");
const energy_card_1 = require("../../game/store/card/energy-card");
class DarknessEnergy extends energy_card_1.EnergyCard {
    constructor() {
        super(...arguments);
        this.provides = [card_types_1.CardType.DARK];
        this.set = 'SVE';
        this.regulationMark = 'ENERGY';
        this.cardImage = 'assets/cardback.png';
        this.setNumber = '7';
        this.name = 'Darkness Energy';
        this.fullName = 'Darkness Energy SVE';
    }
}
exports.DarknessEnergy = DarknessEnergy;
