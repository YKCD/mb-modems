import { Resetter, ResetStrategy } from '../resetter.model';
import { Resettable } from '../resettable.model';

export class NormalResetter implements Resetter {
    getStrategy(): ResetStrategy {
        return ResetStrategy.Normal;
    }

    reset(resettable: Resettable): void {
        console.log('This is a normal reset', resettable.getResetParams());
    }
}