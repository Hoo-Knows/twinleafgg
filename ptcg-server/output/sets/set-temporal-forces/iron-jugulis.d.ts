import { CardTag, CardType, PokemonCard, PowerType, Stage, State, StoreLike } from '../../game';
import { Effect } from '../../game/store/effects/effect';
export declare class IronJugulis extends PokemonCard {
    stage: Stage;
    regulationMark: string;
    tags: CardTag[];
    cardType: CardType;
    hp: number;
    weakness: {
        type: CardType;
    }[];
    resistance: {
        type: CardType;
        value: number;
    }[];
    retreat: CardType[];
    attacks: {
        name: string;
        cost: CardType[];
        damage: number;
        text: string;
    }[];
    powers: {
        name: string;
        powerType: PowerType;
        text: string;
    }[];
    set: string;
    cardImage: string;
    setNumber: string;
    name: string;
    fullName: string;
    reduceEffect(store: StoreLike, state: State, effect: Effect): State;
}
