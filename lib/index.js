
import _ from 'underscore';

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
    return this.reward[state];
  }
  actions(state) {
    if (_.contains(this.terminals, state))
    {
      return [];
    }
    else {
      return this.actlist;
    }
  }
}
