// stores
import formsStore from './formsStore'
import uiStore from './uiStore'
import snackbarStore from './snackbarStore'

export class RootStore {
    constructor() {
        this.formsStore = new formsStore();
        this.uiStore = new uiStore();
        this.snackbarStore = new snackbarStore();
    }
}