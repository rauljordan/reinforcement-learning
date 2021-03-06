import {MDP, valueIteration, utils} from '../';

class GridMDP extends MDP {
  constructor(grid, terminals, init = [0, 0], gamma = 0.9) {
    super(init, [[0, 1], [0, -1], [-1, 0], [1, 0]], terminals, gamma);
    grid.reverse();
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
  T (state, action) {
    return [{p: 0.8, state: this.go(state, action)},
            {p: 0.1, state: this.turnRight(state)},
            {p: 0.1, state: this.turnLeft(state)}];
  }
  go (state, direction) {
    var result = state

    this.states.map(s => {
      if (utils.arraysEqual(s, state)) {
        result = utils.vectorAdd(state, direction);
      }
    });

    return result;
  }
  turnRight(state) {
    return utils.vectorAdd(state, [1, 0]);
  }
  turnLeft(state) {
    return utils.vectorAdd(state, [-1, 0]);
  }
}

var terminals = [[1, 3], [2, 3]];

var mdp = new GridMDP([[-0.04, -0.04, -0.04, +1],
                     [-0.04, -0.06,  -0.04, -1],
                     [-0.04, -0.04, -0.04, -0.04]],
                     terminals);
