import {
  negToPosRange,
} from './grid';

let GRID_SIZE;

describe('negToPosRange', () => {
  describe('size 3', () => {
    GRID_SIZE = 3;
    it(` with size 3 returns array with length of ${GRID_SIZE}`, () => {
      const rangeArray = negToPosRange(GRID_SIZE);
      expect(rangeArray).to.have.length(GRID_SIZE);
    });
  });
  describe('size 7', () => {
    GRID_SIZE = 7;
    it(` with size ${GRID_SIZE} returns array with length of ${GRID_SIZE}`, () => {
      const rangeArray = negToPosRange(GRID_SIZE);
      expect(rangeArray).to.have.length(GRID_SIZE);
    });
  });
});
