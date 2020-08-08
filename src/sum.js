function sum(...values) {
  return values.reduce(function (acc, cur) { return acc + cur });
}
module.exports = sum;
