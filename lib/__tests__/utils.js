import {describe, it} from 'mocha';
import {expect} from 'chai';
import {argmax} from '../utils';

describe('Utils', () => {
  it('should use argmax correctly', async () => {

    const items = [1,2,3,4];
    const result = argmax(items, item => {
      if (item === 2) {
        return 200;
      }
      else {
        return 100;
      }
    });

    expect(result).to.be.equal(2);
  });
});
