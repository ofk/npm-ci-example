function sum(...values) {
  return values.reduce(function calc(acc, cur) {
    return acc + cur;
  });
}
module.exports = sum;
