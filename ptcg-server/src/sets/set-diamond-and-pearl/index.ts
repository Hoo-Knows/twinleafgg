import { Card } from '../../game/store/card/card';
import { Meditite } from './meditite';
import { PokedexHandy } from './pokedex-handy';
import { SuperScoopUp } from './super-scoop-up';

export const setDiamondAndPearl: Card[] = [
  new PokedexHandy(),
  new SuperScoopUp(),
  new Meditite(),
];
