import { IStatesService, State } from './bundle'

export class StatesService implements IStatesService {
    public getStates(): State[] {
        return [
            new State('home', 'home'),
            new State('settings', 'settings')
        ];
    }
}