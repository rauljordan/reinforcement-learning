import {argmax} from './utils';
/**
 * Calculates the Expected Utility of a state, action pair using a table
 * of the U values for every state that is previously defined
 * @param s - state of an mdp
 * @param a - action of an mdp
 * @param U - dictionary of corresponding utility for each action
 * @param mdp - a Markov Decision Process with a transition model T defined
 */
export const expectedUtility = (s, a, U, mdp) => {
  return mdp.T(s, a).map(obj => obj.p * U[obj.state]).reduce((x, y) => x + y);
};

/**
 * Calculates the best policy of an MDP with its associated actions
 * and given a table of its expected utility values for its states
 * @param mdp - a Markov Decision Process with a transition model T defined
 * @param U - dictionary of corresponding utility for each action
 */
export const bestPolicy = (mdp, U) => {
  var pi = {};
  mdp.states.map(s => {
    pi[s] = argmax(mdp.actions(s), a => expectedUtility(a, s, U, mdp));
  });
  return pi;
};
