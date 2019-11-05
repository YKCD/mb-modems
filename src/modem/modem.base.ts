import { Resettable } from '../reset/resettable.model';
import { ResetStrategy } from '../reset/resetter.model';

export abstract class Modem implements Resettable {
    protected RESET_STRATEGY = ResetStrategy.Normal;
    protected RESET_PARAMS = {};

    constructor(private readonly name: string) {}

    getName(): string {
        return this.name;
    }

    getResetStrategy(): ResetStrategy {
        return this.RESET_STRATEGY;
    }

    getResetParams(): any {
        return this.RESET_PARAMS;
    }
}