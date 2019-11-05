import { Resetter } from './resetter.model';
import { Resettable } from './resettable.model';

export class ResetterFactory {
    constructor(private readonly resetters: Resetter[]) {}

    getResetter(resettable: Resettable): Resetter {
        const foundResetter = this.resetters
            .find(resetter => resetter.getStrategy() === resettable.getResetStrategy());

        if (!foundResetter) {
            throw new Error('Cannot create resetter')
        }
        return foundResetter;
    }
}
