import { Resettable } from './resettable.model';

export enum ResetStrategy {
    Normal,
    Special,
    Unbelievable,
}

export interface Resetter {
    getStrategy(): ResetStrategy;
    reset(resettable: Resettable): void;
}