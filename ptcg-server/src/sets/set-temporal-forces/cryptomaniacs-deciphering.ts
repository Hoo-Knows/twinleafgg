import { TrainerCard } from '../../game/store/card/trainer-card';
import { CardTag, TrainerType } from '../../game/store/card/card-types';
import { StoreLike } from '../../game/store/store-like';
import { State } from '../../game/store/state/state';
import { Effect } from '../../game/store/effects/effect';
import { TrainerEffect } from '../../game/store/effects/play-card-effects';
import { GameError } from '../../game/game-error';
import { GameMessage } from '../../game/game-message';
import { Card } from '../../game/store/card/card';
import { ChooseCardsPrompt } from '../../game/store/prompts/choose-cards-prompt';
import { CardList } from '../../game/store/state/card-list';
import { ShuffleDeckPrompt } from '../../game/store/prompts/shuffle-prompt';
import { OrderCardsPrompt } from '../../game';


function* playCard(next: Function, store: StoreLike, state: State,
  self: CiphermaniacsCodebreaking, effect: TrainerEffect): IterableIterator<State> {
  const player = effect.player;
  let cards: Card[] = [];

  const supporterTurn = player.supporterTurn;

  if (supporterTurn > 0) {
    throw new GameError(GameMessage.SUPPORTER_ALREADY_PLAYED);
  }

  player.hand.moveCardTo(effect.trainerCard, player.supporter);
  // We will discard this card after prompt confirmation
  effect.preventDefault = true;

  if (player.deck.cards.length === 0) {
    throw new GameError(GameMessage.CANNOT_PLAY_THIS_CARD);
  }

  const deckTop = new CardList();

  yield store.prompt(state, new ChooseCardsPrompt(
    player,
    GameMessage.CHOOSE_CARDS,
    player.deck,
    {},
    { min: 2, max: 2, allowCancel: false }
  ), selected => {
    cards = selected || [];
    next();
  });

  player.deck.moveCardsTo(cards, deckTop);

  return store.prompt(state, new ShuffleDeckPrompt(player.id), order => {
    player.deck.applyOrder(order);

    return store.prompt(state, new OrderCardsPrompt(
      player.id,
      GameMessage.CHOOSE_CARDS_ORDER,
      deckTop,
      { allowCancel: false },
    ), order => {
      if (order === null) {
        return state;
      }

      deckTop.applyOrder(order);
      deckTop.moveToTopOfDestination(player.deck);

      player.supporter.moveCardTo(effect.trainerCard, player.discard);

    });
  });
}

export class CiphermaniacsCodebreaking extends TrainerCard {

  public regulationMark = 'H';

  public trainerType: TrainerType = TrainerType.SUPPORTER;

  public tags = [CardTag.FUTURE];

  public set: string = 'TEF';

  public cardImage: string = 'assets/cardback.png';

  public setNumber: string = '145';

  public name: string = 'Ciphermaniac\'s Codebreaking';

  public fullName: string = 'Ciphermaniac\'s Codebreaking TEF';

  public text: string =
    'Search your deck for 2 cards, shuffle your deck, then put those cards on top of it in any order.';

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof TrainerEffect && effect.trainerCard === this) {
      const generator = playCard(() => generator.next(), store, state, this, effect);
      return generator.next().value;
    }
    return state;
  }

}
