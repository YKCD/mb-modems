import { ResetStrategy } from '../../reset/resetter.model';
import { Modem } from '../modem.base';

export class FritzboxModem extends Modem {
    protected readonly RESET_STRATEGY = ResetStrategy.Special;
}