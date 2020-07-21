/* eslint-disable require-jsdoc */
function isAnagramm(str1, str2) {
  let isStringAnagramm = false;

  if ((str1.length !== str2.length )||(!typeof str1 && str2 == 'string') ) {
    console.log('you are here');
    return isStringAnagramm = false;
  } else {
    const arrStr2 = [...str2].sort();
    const arrStr1 = [...str1].sort();
    console.log(arrStr2, arrStr1);
    arrStr1.forEach((element, index) => {
      if (!element === arrStr2[index]) {
        isStringAnagramm = false;
        console.log(element, arrStr2[index]);
      } else {
        isStringAnagramm = true;
      }
    });

    console.log(isStringAnagramm);
    return isStringAnagramm;
  }
}

isAnagramm(12, 'ab');


function validAnagramm(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup= {};
  for (let i=0; i<first.length; i++ ) {
    const letter = first[i];
      lookup[letter] ? lookup[letter] +=1 : lookup[letter] = 1;
  }
}
