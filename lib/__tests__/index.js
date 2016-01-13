import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MDP} from '../';

describe('MDP', () => {
  it('should have rewards', async () => {

    const grid = [[1,2], [3,4] ];
    const terminals = [1,2,3,4];

    var mdp = new MDP(grid, terminals);

    expect(mdp.reward).to.be.equal([]);
  });
});
