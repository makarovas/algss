// eslint-disable-next-line require-jsdoc
function charCount(string) {
  if (!string) {
    return console.log('you forgot to pass a string');
  } else if (typeof string === 'number') {
    return console.log('its a number');
  } else if (typeof string !== 'string') {
    return console.log('sorry wrong again');
  }

  const result = {};

  const optimizedString = string
      .toLowerCase()
      .replace(/\s/g, '')
      .replace(/[0-9]/g, 'X');

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


// charCount('a 23 222 231232');

// eslint-disable-next-line require-jsdoc
function charCount2(str) {
  const obj= {};
  for (let char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      obj[char] = ++obj[char] || 1;
    }
    console.log(obj);
  }
  return obj;
}

console.log(charCount2('a sfd sdfds asda'));
