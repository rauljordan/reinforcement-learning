import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MDP} from '../';

describe('MDP', () => {
  it('should have rewards', async () => {

    const actlist = [];
    const terminals = [];
    const gamma = 0.9;
    const init = 0;

    var mdp = new MDP(init, actlist, terminals, gamma);

    expect(mdp.init).to.be.equal(0);
  });
});
