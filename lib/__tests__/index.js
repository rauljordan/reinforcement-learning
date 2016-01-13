import {describe, it} from 'mocha';
import {expect} from 'chai';
import {createMDP} from '../';
import {expectedUtility, bestPolicy} from '../iteration';

describe('MDP', () => {
  it('should have rewards', async () => {

    const actlist = [];
    const terminals = [];
    const gamma = 0.9;
    const init = 0;

    var mdp = createMDP(init, actlist, terminals, gamma);

    expect(mdp.init).to.be.equal(0);
  });

  it('should get expected utility', async () => {

    const actlist = [];
    const terminals = [];
    const gamma = 0.9;
    const init = 0;

    var mdp = createMDP(init, actlist, terminals, gamma);

    mdp.T = (state, action) => {
      return [{p: 0.8, state, action}];
    };

    const U = {
      UP: 0
    };

    const utility = expectedUtility('UP','FAST', U, mdp);
    expect(utility).to.be.equal(0);
  });

  it('should get find the best policy', async () => {

    const actlist = ['FAST'];
    const terminals = [];
    const gamma = 0.9;
    const init = 0;

    var mdp = createMDP(init, actlist, terminals, gamma);

    mdp.T = (state, action) => {
      return [{p: 0.8, state, action}];
    };
    const U = {
      UP: 0
    };

    const pi = bestPolicy(mdp, U);
    expect(pi.UP).to.be.equal('FAST');
  });

});
