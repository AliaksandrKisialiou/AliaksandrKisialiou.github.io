function recursiveBinarySearch(source, searchNumber) {
  if (!source.length)
    return -1;

  var left = arguments[2] == undefined ? 0 : arguments[2];
  var right = arguments[3] == undefined ? source.length : arguments[3];
  var middle = left + Math.floor((right - left) / 2);
  var sortDesc = arguments[4] == undefined ? source[left] > source[right - 1] : arguments[4];

  if (left >= right)
    return -1;

  if (source[left] == searchNumber)
    return left;

  if (source[middle] == searchNumber) {
    if (middle == left + 1)
      return middle;
    else
      return recursiveBinarySearch(source, searchNumber, left, middle + 1, sortDesc);
  }
  else if ((source[middle] > searchNumber) ^ sortDesc)
    return recursiveBinarySearch(source, searchNumber, left, middle, sortDesc);
  else
    return recursiveBinarySearch(source, searchNumber, middle + 1, right, sortDesc);
}

function iterativeBinarySearch(source, searchNumber) {

  if (!source.length)
    return -1;

  var left = 0;
  var right = source.length;
  var middle;
  var sortDesc = source[left] > source[right - 1];

  while (left < right) {
    middle = left + Math.floor((right - left) / 2);

    if (source[left] == searchNumber)
      return left;

    if (source[middle] == searchNumber) {
      if (middle == left + 1)
        return middle;
      else
        right = middle + 1;
    }
    else if ((source[middle] > searchNumber) ^ sortDesc)
      right = middle;
    else
      left = middle + 1;
  }

  return -1;
}

function runner() {
  var source = [1, 1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 6, 7, 9, 10, 10];
  var source2 = [1, -1];
  var source3 = [-1, 1];
  var source4 = [];
  var source5 = [1, 2, 3, 4, 5, 5, 5, 5, 5, 6, 6, 7];
  var source6 = [10, 7, 3, 3, 2, 0, -1, -2, -3, -4, -5, -5, -5, -6];
  var source7 = [10, 0, -10];

  console.log('Recursive([' + source + '], 10) = ' + recursiveBinarySearch(source, 10));
  console.log('Recursive([' + source2 + '], -1) = ' + recursiveBinarySearch(source2, -1));
  console.log('Recursive([' + source3 + '], 1) = ' + recursiveBinarySearch(source3, 1));
  console.log('Recursive([' + source4 + '], 1) = ' + recursiveBinarySearch(source4, 1));
  console.log('Recursive([' + source5 + '], 6) = ' + recursiveBinarySearch(source5, 6));
  console.log('Recursive([' + source6 + '], 3) = ' + recursiveBinarySearch(source6, 3));
  console.log('Recursive([' + source7 + '], -10) = ' + recursiveBinarySearch(source7, -10));

  console.log('Iterative([' + source + '], 5) = ' + iterativeBinarySearch(source, 5));
  console.log('Iterative([' + source2 + '], 1) = ' + iterativeBinarySearch(source2, 1));
  console.log('Iterative([' + source3 + '], 0) = ' + iterativeBinarySearch(source3, 0));
  console.log('Iterative([' + source4 + '], 0) = ' + iterativeBinarySearch(source4, 0));
  console.log('Iterative([' + source5 + '], 5) = ' + iterativeBinarySearch(source5, 5));
  console.log('Iterative([' + source6 + '], -5) = ' + iterativeBinarySearch(source6, -5));
  console.log('Iterative([' + source7 + '], 0) = ' + iterativeBinarySearch(source7, 0));
}
