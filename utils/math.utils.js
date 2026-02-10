// utils/math.utils.js

exports.isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

exports.generateFibonacci = (n) => {
  const series = [];
  let a = 0, b = 1;

  for (let i = 0; i < n; i++) {
    series.push(a);
    [a, b] = [b, a + b];
  }
  return series;
};

const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

exports.calculateHCF = (arr) => arr.reduce((acc, val) => gcd(acc, val));

exports.calculateLCM = (arr) =>
  arr.reduce((acc, val) => (acc * val) / gcd(acc, val));
