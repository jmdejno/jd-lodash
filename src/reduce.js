
export const reduce = (arr = [], fn = (acc, val, ix) => {}, initial) => {
  if(!Array.isArray(arr) || !arr.length) return arr;

  initial = initial == null || arr[0];

  for(const [index, val] of arr.entries()) {
    initial = fn(initial, val, index, arr);
  }
  return initial;
};