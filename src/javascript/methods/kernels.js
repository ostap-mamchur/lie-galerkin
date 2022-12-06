import * as math from "mathjs";
import { func, derivative1Func, derivative2Func } from "./functions";

function euclidNorm(x) {
  return Math.sqrt(x[0] ** 2 + x[1] ** 2);
}

export function kernel(t, tau) {
  if (t !== tau) {
    return (
      (2 *
        math.multiply(math.subtract(func(t), func(tau)), [
          [derivative1Func(tau)[1]],
          [-derivative1Func(tau)[0]],
        ])) /
      euclidNorm(math.subtract(func(t), func(tau))) ** 2
    );
  } else {
    return (
      (derivative1Func(t)[1] * derivative2Func(t)[0] -
        derivative1Func(t)[0] * derivative2Func(t)[1]) /
      euclidNorm(derivative1Func(t)) ** 2
    );
  }
}

export function kernel_solution(x1, tau) {
  return (
    math.multiply(math.subtract(x1, func(tau)), [
      [derivative1Func(tau)[1]],
      [-derivative1Func(tau)[0]],
    ]) /
    euclidNorm(math.subtract(x1, func(tau))) ** 2
  );
}
