export const range = [0, 2 * Math.PI];
export const n = 4;

const [a, b] = range;

const nodes = [];
const h = (b - a) / n;

for (let i = 0; i <= n; i++) {
  nodes.push(a + i * h);
}

export function linearPolynomial(t, j) {
  if (j >= 1 && nodes[j - 1] <= t && t <= nodes[j]) {
    return (t - nodes[j - 1]) / h;
  }
  if (j <= n - 1 && nodes[j] <= t && t <= nodes[j + 1]) {
    return (nodes[j + 1] - t) / h;
  }
  return 0;
}
