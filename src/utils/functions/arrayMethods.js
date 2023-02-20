export const reduceArray = (arrVals, arrKey, initVal) => arrVals.reduce(
    (accumulator, cur) =>  accumulator + cur[arrKey], initVal
  );

