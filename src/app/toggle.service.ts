import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToggleService {
  private toggleState: boolean = false;

  constructor() { }

  getToggleState(): boolean {
    return this.toggleState;
  }

  setToggleState(state: boolean): void {
    this.toggleState = state;
  }
}
