import { PokemonCard } from '../../game/store/card/pokemon-card';
import { StoreLike, State, CardType, Stage } from '../../game';
import { Effect } from '../../game/store/effects/effect';
export declare class Whismur extends PokemonCard {
    stage: Stage;
    cardType: CardType;
    hp: number;
    weakness: {
        type: CardType;
    }[];
    retreat: CardType[];
    attacks: {
        name: string;
        cost: CardType[];
        damage: number;
        text: string;
    }[];
    set: string;
    cardImage: string;
    setNumber: string;
    name: string;
    fullName: string;
    readonly SUDDEN_SHRIEK_MARKER = "SUDDEN_SHRIEK_MARKER";
    reduceEffect(store: StoreLike, state: State, effect: Effect): State;
}
