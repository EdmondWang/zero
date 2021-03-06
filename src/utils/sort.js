export function quicksort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIdx = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIdx, 1)[0];
  debugger;
  let left = [];
  let right = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quicksort(left).concat([pivot], quicksort(right));
}
