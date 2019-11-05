import { Modem } from '../modem.base';

export class SiemensModem extends Modem {
    protected readonly RESET_PARAMS = {
        oid: 'OID-1',
    };
}