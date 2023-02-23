export const reduceArray = (arrVals, arrKey, initVal) => arrVals.reduce(
    (accumulator, cur) =>  accumulator + cur[arrKey], initVal
  );

export const getUniqueKeys = (arrVals, objKey) => 
  [... new Set(arrVals.map((item) => item[objKey]))]
