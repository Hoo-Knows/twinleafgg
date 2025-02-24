import { Card } from '../../game/store/card/card';
import { EthansAdventure } from './ethans-adventure';
import { EthansCyndaquil } from './ethans-cyndaquil';
import { EthansHoOhex } from './ethans-ho-oh-ex';
import { EthansMagcargo } from './ethans-magcargo';
import { EthansPichu } from './ethans-pichu';
import { EthansQuilava } from './ethans-quilava';
import { EthansSlugma } from './ethans-slugma';
import { EthansTyphlosion } from './ethans-typhlosion';
import { MistysGyarados } from './mistys-gyarados';
import { MistysMagikarp } from './mistys-magikarp';
import { MistysPsyduck } from './mistys-psyduck';
import { CynthiasRoseradeIR, EthansHoOhexSIR, SacredAshSV9a } from './other-prints';
import { CynthiasGarchompex } from './cynthias-garchomp-ex';
import { CynthiasGible } from './cynthias-gible';
import { CynthiasRoserade } from './cynthias-roserade';
import { CynthiasRoselia } from './cynthias-roselia';
import { CynthiasGabite } from './cynthias-gabite';
import { CynthiasSpiritomb } from './cynthias-spiritomb';
import { CynthiasPowerWeight } from './cynthias-power-weight';
import { Rotom } from './rotom';
import { Zeraora } from './zeraora';

export const setSV9a: Card[] = [

  new Rotom(),
  new Zeraora(),

  new CynthiasRoseradeIR(),
  new CynthiasGarchompex(),
  new CynthiasGible(),
  new CynthiasRoserade(),
  new CynthiasRoselia(),
  new CynthiasGabite(),
  new CynthiasSpiritomb(),
  new CynthiasPowerWeight(),

  new EthansHoOhexSIR(),
  new EthansAdventure(),
  new EthansHoOhex(),
  new EthansCyndaquil(),
  new EthansQuilava(),
  new EthansTyphlosion(),
  new EthansSlugma(),
  new EthansMagcargo(),
  new EthansPichu(),

  new MistysPsyduck(),
  new MistysMagikarp(),
  new MistysGyarados(),

  // Reprints
  new SacredAshSV9a(),
];
