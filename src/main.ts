import { FritzboxModem } from './modem/modems/fritzbox.modem';
import { SiemensModem } from './modem/modems/siemens.modem';
import { ResetterFactory } from './reset/resetter.factory';
import { NormalResetter } from './reset/resetters/normal.resetter';
import { SpecialResetter } from './reset/resetters/special.resetter';

const modem1 = new SiemensModem('SIEMENS');
const modem2 = new FritzboxModem('FRITZBOX');

// DI
const resetters = [new NormalResetter(), new SpecialResetter()];
const resetterFactory = new ResetterFactory(resetters);

// Controller
const modem = modem2;
const resetter = resetterFactory.getResetter(modem);
resetter.reset(modem);