export const min = (array) => {
  // Returns min value in an array ignoring undefined, null, and NaN inputs
  array = array.filter(
    (e) => (e = e === undefined || e === null || isNaN(e) ? 0 : e)
  );
  return Math.min.apply(Math, array);
};
