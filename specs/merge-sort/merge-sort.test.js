/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const merge = (arr1, arr2) => {
  let sortedArray = [];
  while (arr1.length && arr2.length) {
    if (arr1[0] <= arr2[0]) {
      sortedArray.push(arr1.shift());
    } else {
      sortedArray.push(arr2.shift());
    }
  }
  return [...sortedArray, ...arr1, ...arr2];
};

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  const middle = Math.floor(nums.length / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
