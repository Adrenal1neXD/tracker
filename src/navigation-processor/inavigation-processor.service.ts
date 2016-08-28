import { State } from './bundle';

export interface INavigationProcessor {
    navigate(state: State|string): void;
    getAvailableStates(): State[];
}