import { PokemonCard } from '../../game/store/card/pokemon-card';
import { Stage, CardType } from '../../game/store/card/card-types';
export declare class Pansear extends PokemonCard {
    stage: Stage;
    cardType: CardType;
    hp: number;
    weakness: {
        type: CardType.WATER;
    }[];
    retreat: CardType.COLORLESS[];
    attacks: {
        name: string;
        cost: CardType.FIRE[];
        damage: number;
        text: string;
    }[];
    set: string;
    name: string;
    fullName: string;
    regulationMark: string;
    setNumber: string;
    cardImage: string;
}
