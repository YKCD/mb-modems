import { Resetter, ResetStrategy } from '../resetter.model';
import { Resettable } from '../resettable.model';

export class SpecialResetter implements Resetter {
    getStrategy(): ResetStrategy {
        return ResetStrategy.Special;
    }

    reset(modem: Resettable): void {
        console.log('Resetting with SpecialResetter');
    }
}