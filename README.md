# Reinforcement Learning

A complete library for reinforcement learning built entirely in Javascript es6!

Specifically, This package implements methods to solve Markov Decision Processes using dynamic programming and iterative methods such as policy iteration and value iteration. Currently in early stages.


[![Build Status](https://travis-ci.org/rauljordan/montyhall.js.svg?branch=master)](https://travis-ci.org/rauljordan/montyhall.js)


![Imgur](http://i.imgur.com/Eg18kME.png)


## Installing Reinforcement Learning

```sh
$ npm install reinforcement-learning
```

## Classes
```javascript
/**
 * A Markov Decision Process
 *
 * Constructor Parameters
 * @param init - an initial state
 * @param actlist - the list of possible actions
 * @param terminals - the list of terminal states
 * @param gamma - discount factor for expected reward calculation
 *
 * Contains inner representations of rewards and states that will be defined
 * by subclasses. It does not define the transition model and expects the
 * subclasses to define it
 */
class MDP {
  constructor(init, actlist, terminals, gamma = 0.9) {
    this.init = init;
    this.actlist = actlist;
    this.terminals = terminals;
    this.gamma = gamma;
    this.states = [];
    this.reward = {};
  }
  /**
   * Gets the reward for a given state
   * @param state - a state of the MDP
   */
  R(state) {

  }
  /**
   * Gets the list of possible actions for a given state
   * @param state - a state of the MDP
   */
  actions(state) {

  }
}
```

## Usage

Subclass the MDP class from the package, and define a transition model named T
as a method of the subclass. Make sure to call super in the constructor
initialization.

```javascript
import {MDP, valueIteration, utils} from 'reinforcement-learning';

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

const terminals = [[1, 3], [2, 3]];

let mdp = new GridMDP([[-0.04, -0.04, -0.04, +1],
                     [-0.04, -0.06,  -0.04, -1],
                     [-0.04, -0.04, -0.04, -0.04]],
                     terminals);
```

Now it is possible to find the best policy for this MDP using the methods
provided through the library such as policy iteration

```javascript
const pi = policyIteration(mdp);
```

```sh
$ console.log(pi)
$ {'0,0': [1,0], '0, 1': [1,0], ...}
```

## All Functions

```javascript
/**
 * Calculates the Expected Utility of a state, action pair using a table
 * of the U values for every state that is previously defined
 * @param s - state of a Markov Decision Process Class (MDP) instance
 * @param a - action of an MDP instance
 * @param U - Object of corresponding expected utility for each state
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @return {Number} - returns a real valued expected utility
 */
expectedUtility(s, a, U, mdp)
```

```javascript
/**
 * Calculates the Expected Utility of a state, action pair using a table
 * of the U values for every state that is previously defined
 * @param s - state of a Markov Decision Process Class (MDP) instance
 * @param a - action of an MDP instance
 * @param U - Object of corresponding expected utility for each state
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @return {Number} - returns a real valued expected utility
 */
expectedUtility(s, a, U, mdp)
```


```javascript
/**
 * Calculates the Best Policy for an MDP. This is the policy that maps each states
 * to the action that obtains the maximum expected utility
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @param U -  Object of corresponding expected utility for each state
 * @return {Object} - a policy which has each state as a key mapped to the best action
 */
bestPolicy(mdp, U)
```

```javascript
/**
 * Find the optimal policy for an MDP through dynamic programming
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @return {Object} - the optimal policy of the given MDP
 */
policyIteration(mdp)
```

```javascript
/**
 * Uses dynamic programming to find the table of U values (expected utilities)
 * of an MDP.
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @param epsilon - a small positive number to determine when to stop value iteration
 * @return {Object} - An Object of the expected utilities (U values) for each state
 */
valueIteration(mdp, epsilon = 0.001)
```

```javascript
/**
 * Uses dynamic programming to update U values of an MDP by evaluating a policy
 * @param pi - a policy object
 * @param U - An object of the expected utilities (U values) for each state
 * @param mdp - a Markov Decision Process instance with a defined transition model T
 * @param iterations - number of iterations to evalue the policy
 * @return {Object} - An object of updated U values for each state
 */
policyEvaluation(pi, U, mdp, iterations = 20)
```

## Utils

Documentation for utlity functions coming soon.

## Development

Want to contribute? Great! Please submit a pull request and I'll review it and integrate it as fast as I can. Write up some tap tests for your implementation before submitting.


License
----

MIT
