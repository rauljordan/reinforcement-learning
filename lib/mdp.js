
import {arraysEqual} from './utils';

export class MDP {
  constructor(init, actlist, terminals, gamma = 0.9) {
    this.init = init;
    this.actlist = actlist;
    this.terminals = terminals;
    this.gamma = gamma;
    this.states = [];
    this.reward = {};
  }
  R(state) {
    return this.reward[String(state)];
  }
  actions(state) {
    var result = this.terminals;

    this.terminals.map(terminal => {
      if (arraysEqual(terminal, state)) {
        result = [];
      }
    });

    return result;
  }
}
