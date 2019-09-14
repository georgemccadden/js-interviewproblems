const twoSum = function(arr, target) {
  const previousValues = {};

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const neededValue = target - current;
    const index2 = previousValues[neededValue];

    if (index2 != null) {
      return [index2, i];
    } else {
      previousValues[current] = i;
    }
  } 
};