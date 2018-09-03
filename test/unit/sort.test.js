// import 'babel-polyfill';

import {quicksort} from '../../src/utils/sort.js';
import chai from 'chai';

let expect = chai.expect;

let arr = [85, 24, 63, 45, 17, 31, 96, 50];

describe('Sort', function() {
  it('Qucik Sort', function() {
    expect(quicksort(arr)).to.eql([17, 24, 31, 45, 50, 63, 85, 96]);
  });
});