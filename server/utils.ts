//index generator or random number intervals
export const randomNumber = (
  min: number,
  max: number,
  quantity: number = 1
) => {
  if (quantity > 1) {
    return [...Array(quantity).keys()].map(
      (i) => Math.floor(Math.random() * (max - min + 1)) + min
    );
  } else {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
