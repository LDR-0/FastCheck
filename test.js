import { removeDuplicates, sortNumbers, sumPositiveNumbers, groupByParity, findCommonElements } from './index.js';
import fc from 'fast-check';

describe('Utility Functions', () => {
    test('removeDuplicates should remove duplicate elements', () => {
      fc.assert(
        fc.property(fc.array(fc.anything()), (arr) => {
          const result = removeDuplicates(arr);
          return result.length === new Set(arr).size && result.every(item => arr.includes(item));
        })
      );
    });
  
    test('sortNumbers should sort numbers in ascending order', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const result = sortNumbers(arr);
          return result.every((val, i, arr) => i === 0 || arr[i - 1] <= val);
        })
      );
    });
  
    test('sumPositiveNumbers should sum only positive numbers', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const expectedSum = arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);
          return sumPositiveNumbers(arr) === expectedSum;
        })
      );
    });
  
    test('groupByParity should correctly group numbers by even and odd', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), (arr) => {
          const { even, odd } = groupByParity(arr);
          return even.every(num => num % 2 === 0) && odd.every(num => num % 2 !== 0);
        })
      );
    });
  
    test('findCommonElements should return correct intersection of arrays', () => {
      fc.assert(
        fc.property(fc.array(fc.integer()), fc.array(fc.integer()), (arr1, arr2) => {
          const result = findCommonElements(arr1, arr2);
          return result.every(item => arr1.includes(item) && arr2.includes(item));
        })
      );
    });
  });
