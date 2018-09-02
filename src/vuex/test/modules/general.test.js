import { expect } from 'chai';
import { describe, it } from 'mocha';
import { mutations } from '../../modules/general.js';
import { MU_INCREASE, AC_INCREASE } from '../../modules/general.js';

describe('Increase Count', () => {
  it('INCREMENT', () => {
    const state = { count: 0 };

    MU_INCREASE(state);

    expect(state.count).to.equal(1);
  });
});
