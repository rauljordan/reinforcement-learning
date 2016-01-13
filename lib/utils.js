import _ from 'underscore';

export const contains = (xs, item) => {
  return _.contains(xs, item);
};

export const argmax = (items, lambda) => {
  var best = items[0];
  var best_score = lambda(best);
  items.map(item => {
    var item_score = lambda(item);
    if (item_score > best_score) {
      [best, best_score] = [item, item_score];
    }
  });
  return best;
};

export const argmin = (items, lambda) => {
  return argmax(items, item => -1 * lambda(item));
};
