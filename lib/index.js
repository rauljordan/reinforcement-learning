
import { contains } from './utils';

class MDP {
  constructor(init, actlist, terminals, gamma = 0.9) {
    this.init = init;
    this.actlist = actlist;
    this.terminals = terminals;
    this.gamma = gamma;
    this.states = ['UP'];
    this.reward = {};
  }
  R(state) {
    return this.reward[state];
  }
  actions(state) {
    if (contains(this.terminals, state))
    {
      return [];
    }
    else {
      return this.actlist;
    }
  }
}

export const createMDP = (init, actlist, terminals, gamma = 0.9) => {
  return new MDP(init, actlist, terminals, gamma);
};
