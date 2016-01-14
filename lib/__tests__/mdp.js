import {describe, it} from 'mocha';
import {expect} from 'chai';
import {MDP} from '../mdp';

describe('MDP', () => {
  it('should subclass MDP', async () => {

    class GridMDP extends MDP {
      constructor(grid, terminals, init = '(0, 0)', gamma = 0.9) {
        super(init, [], terminals, gamma);
        this.grid = grid;
        this.rows = grid.length;
        this.cols = grid[0].length;
        for (var i = 0; i < this.rows; i++) {
          for (var j = 0; j < this.cols; j++) {
            this.reward[String([i,j])] = this.grid[i][j];
            this.states.push([i, j]);
          }
        }
      }
    }

    var mdp = new GridMDP([[-0.04, -0.04, -0.04, +1],
                         [-0.04, -0.06,  -0.04, -1],
                         [-0.04, -0.04, -0.04, -0.04]],
                         [[3,2], [3,1]]);

    expect(mdp.rows).to.be.equal(3);
  });
});
