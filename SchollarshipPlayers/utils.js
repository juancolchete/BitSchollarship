function normalizeNaN(number) {
  parsedNumber = parseInt(number)
  if (isNaN(parsedNumber)) {
    return 0;
  } else {
    return parsedNumber;
  }
}
function verifyIfExists(fullString, compareString) {
  if (fullString.indexOf(compareString) == -1) {
    return false;
  } else {
    return true;
  }
}