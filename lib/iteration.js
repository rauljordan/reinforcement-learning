/**
 * Calculates the Expected Utility of a state, action pair using a table
 * of the U values for every state that is previously defined
 */
export const expectedUtility = (s, a, U, mdp) => {
  return mdp.T(s, a).map(obj => obj.p * U[obj.state]).reduce((x, y) => x + y);
};
