import { kernel, kernel_solution } from "./methods/kernels";
import {
  parametrizationFunction,
  exactFunction,
} from "./methods/functions";
import { leftRectangleMethod } from "./methods/leftRectanglesMethod";
import { matrix, vector } from "./helpers/matrixHelper";
import * as math from "mathjs";
import { plotDomain } from "./methods/plotDomain";

const n = 8;
const [a, b] = [0, 2 * Math.PI];

const nodes = [];
const h = (b - a) / n;

for (let i = 0; i <= n; i++) {
  nodes.push(a + i * h);
}

function linearPolynomial(t, j) {
  if (j >= 1 && nodes[j - 1] <= t && t <= nodes[j]) {
    return (t - nodes[j - 1]) / h;
  }
  if (j <= n - 1 && nodes[j] <= t && t <= nodes[j + 1]) {
    return (nodes[j + 1] - t) / h;
  }
  return 0;
}

function galerkinMethod() {
  const M = matrix(n + 1);
  const F = vector(n + 1);

  for (let j = 0; j <= n; j++) {
    for (let i = 0; i <= n; i++) {
      const firstIntegral = (x) => {
        return leftRectangleMethod(
          (t) => kernel(x, t) * linearPolynomial(t, i),
          [a, b],
          n
        );
      };
      M[i][j] = leftRectangleMethod(
        (x) => {
          return (
            (linearPolynomial(x, i) - (1 / (2 * Math.PI)) * firstIntegral(x)) *
            linearPolynomial(x, j)
          );
        },
        [a, b],
        n
      );
    }
    F[j] = leftRectangleMethod(
      (x) => -2 * parametrizationFunction(x) * linearPolynomial(x, j),
      [a, b],
      n
    );
  }

  const C = math.divide(F, M);

  return C;
}

plotDomain([a, b]);

export function main() {
  const phiArray = galerkinMethod();

  let xs = [
    [0.28, -0.22],
    [-0.17, -0.39],
    [0.38, 0.05],
  ];

  const solutions = xs.map((x) => {
    let u = 0;

    for (let i = 0; i <= n; i++) {
      u +=
        (1 / (2 * Math.PI)) *
        phiArray[i] *
        leftRectangleMethod(
          (tau) => linearPolynomial(tau, i) * kernel_solution(x, tau),
          [a, b]
        );
    }
    const exact = exactFunction(...x);

    return {
      x: `${x[0]},${x[1]}`,
      "exact u": exact,
      "approximately u": u,
      error: Math.abs(u - exact),
    };
  });

  console.table(solutions);
}
