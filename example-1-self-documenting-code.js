function computeTwoGreatestNumbersFromListOfNumbers(listOfNumbers) {
  return listOfNumbers.reduce(
    (currentlyKnownGreatestValues, currentValueWhileIterating) => {
      if (currentValueWhileIterating > currentlyKnownGreatestValues[0]) {
        return [currentValueWhileIterating, currentlyKnownGreatestValues[0]];
      } else if (currentValueWhileIterating > currentlyKnownGreatestValues[1]) {
        return [currentlyKnownGreatestValues[0], currentValueWhileIterating];
      } else {
        return currentlyKnownGreatestValues;
      }
    },
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY]
  );
}

let testActualVsExpected = (a, e) =>
  console.log(a[0] === e[0] && a[1] === e[1] ? "pass" : "fail");

let typicalExample = [2, 7, 5, 9];
testActualVsExpected(
  computeTwoGreatestNumbersFromListOfNumbers(typicalExample),
  [9, 7]
);

let duplicateValuesExample = [2, 9, 9, 7];
testActualVsExpected(
  computeTwoGreatestNumbersFromListOfNumbers(duplicateValuesExample),
  [9, 9]
);

let ascendingOrderExample = [1, 2, 3, 4];
testActualVsExpected(
  computeTwoGreatestNumbersFromListOfNumbers(ascendingOrderExample),
  [4, 3]
);

let descendingOrderExample = [9, 6, 5, 2];
testActualVsExpected(
  computeTwoGreatestNumbersFromListOfNumbers(descendingOrderExample),
  [9, 6]
);
