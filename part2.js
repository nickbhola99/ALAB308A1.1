//Flats an array by recursively calling itself until it reaches an element that is not an array, appends this into the result array
const flatten = (array) => {
  let result = [];
  array.forEach((element) => {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  });
  console.log(result);
  return result;
}

//returns function that flattens array to be used by the trampoline function
const flattenTrampoline = (array) => {
  let result = [];
  return () => {
    array.forEach((element) => {
      if (Array.isArray(element)) {
        result.push(...flattenTrampoline(element)());
      } else {
        result.push(element);
      }
    });
    return result;
  };
};

//trampoline
const trampoline = (f, ...args) => {
  let result = f(...args);
  while (typeof result === "function") {
    result = result();
  }
  return result;
};

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
// flatten(arr4);
console.log(trampoline(flattenTrampoline(arr4)));
