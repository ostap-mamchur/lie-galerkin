export function leftRectangleMethod(f, [a, b]) {
  const n = 200;
  const h = (b - a) / n;
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    const x = a + i * h;
    const res = f(x);
    sum += res;
  }

  const result = h * sum;
  return result;
}
