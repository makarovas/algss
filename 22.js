// eslint-disable-next-line require-jsdoc
function charCount(string) {
  if (!string) {
    return console.log('you forgot to pass a string');
  }

  const result = {};


  const optimizedString = string.toLowerCase().replace(/\s/g, '');
  console.log(optimizedString);
  for (let i = 0; i < optimizedString.length; i++) {
    let count = 0;
    const char = optimizedString[i];
    if (result[char] > 0) {
      result[char]++;
    } else {
      result[char] = ++count;
    }
  }
  console.log(result);
  return result;
}


charCount('aaaadwqeq dasd');


