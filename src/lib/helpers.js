export const getTotalThrowValue = (dices, dots, result) => {
  if (!result.length) {
    return dots * dices;
  }

  return result.reduce((a, b) => a + b, 0);
};

export const simulateNumberAnimations = () => {
  const id = setInterval(() => {
    console.log(Math.random());
  }, 100);
  setTimeout(() => {
    console.log("end");
    clearInterval(id);
  }, 700);
};

export const getThrowDice = (dices, dots) =>
  Array.from({ length: dices }, () =>
    Math.floor(Math.random() * (dots - 1 + 1) + 1)
  );

export const getDicesQuantity = dices => new Array(dices).fill(1);
