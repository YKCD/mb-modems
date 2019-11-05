import { ResetStrategy } from './resetter.model';

export interface Resettable {
    getResetStrategy(): ResetStrategy
    getResetParams(): any;
}