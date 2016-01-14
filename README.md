# Reinforcement Learning

A complete library for reinforcement learning built entirely in Javascript es6!

Specifically, This package implements methods to solve Markov Decision Processes using dynamic programming and iterative methods such as policy iteration and value iteration. Currently in early stages.


[![Build Status](https://travis-ci.org/rauljordan/montyhall.js.svg?branch=master)](https://travis-ci.org/rauljordan/montyhall.js)


![Imgur](https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Monty_open_door.svg/440px-Monty_open_door.svg.png)


## Installing Reinforcement Learning

```sh
$ npm install reinforcement-learning
```

## Methods

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


## Development

Want to contribute? Great! Please submit a pull request and I'll review it and integrate it as fast as I can. Write up some tap tests for your implementation before submitting.


License
----

MIT
