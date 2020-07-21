function isAnagramm(str1, str2) {
  let isStringAnagramm = false;

  if((str1.length !== str2.length )||(!typeof str1 && str2 == 'string') ) {
    console.log('you are here')
    return isStringAnagramm = false;
  } else {  
    let arrStr2 = [...str2].sort();
    let arrStr1 = [...str1].sort();
    console.log(arrStr2, arrStr1);
    arrStr1.forEach((element, index) => {
      if(!element === arrStr2[index]) {
        isStringAnagramm = false;
        console.log(element, arrStr2[index]);
       
      } else {  isStringAnagramm = true;}
    });
  
    console.log(isStringAnagramm)
    return isStringAnagramm;
  }
  
}

isAnagramm(12,'ab')



