const revertNumber = (number) => {
  const splitedNewNumber = [];
  let counter = 0;
  let tempNumber = number;

  while(tempNumber > 0) {
    splitedNewNumber.push(tempNumber % 10);
    tempNumber = parseInt(tempNumber / 10);
    counter++;
  }

  let revertedNumber = 0;

  splitedNewNumber.forEach((num, index) => {
    revertedNumber += num * Math.pow(10, counter - (index + 1));
  });

  return revertedNumber;
};

export const getRevertedNumber = (number) => {
  if (number === 0 || number / 10 < 1 ) {
    return number;
  }

  return revertNumber(number);
};
