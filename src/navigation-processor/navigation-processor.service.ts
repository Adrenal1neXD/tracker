import { INavigationProcessor, IStatesService, StatesService, State } from './bundle';

export class NavigationProcessor implements INavigationProcessor {
    private static instance: NavigationProcessor;
    private static states: State[];

    constructor() {
        if (NavigationProcessor.instance) {
            throw new Error(`You can't create instance of this service`);
        }

        NavigationProcessor.states = new StatesService().getStates();
    }

    public static getInstance(): INavigationProcessor {
        return this.instance || (this.instance = new NavigationProcessor());
    }


    public navigate(state: State|string): void {
        const __state = state instanceof State ? 
            state : 
            this.getAvailableStates().find(item => item.name === state);
        console.log(`navigating to ${__state.name} state by url ${__state.url}`);
    }

    public getAvailableStates(): State[] {
        return NavigationProcessor.states;
    }
}