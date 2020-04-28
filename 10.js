const arrayFilterWithoutStrings = (array) => {
  let result = [];
  // let regExp = /[^a-zA-Z]+/g;
  for (let i = 0; i < array.length; i++) {
    if (!isNaN(array[i])) {
      result.push(array[i]);
    }
  }
  console.log(result);
  return result;
};

arrayFilterWithoutStrings(["sdklj2131", "dsfskldj", 23, 2342]);
