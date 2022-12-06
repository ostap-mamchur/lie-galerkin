// export const exactFunction = (x1, x2) => x1 ** 2 - x2 ** 2;

// export const parametrizationFunction = (t) => func(t)[0] ** 2 - func(t)[1] ** 2;

// export const func = (t) => [2 * Math.cos(t), 2 * Math.sin(t)];

// export const derivative1Func = (t) => [-2 * Math.sin(t), 2 * Math.cos(t)];

// export const derivative2Func = (t) => [-2 * Math.cos(t), -2 * Math.sin(t)];

// export const exactFunction = (x1, x2) => x1 ** 2 - x2 ** 2;

// export const parametrizationFunction = (t) => func(t)[0] ** 2 - func(t)[1] ** 2;

// export const func = (t) => [
//   0.5 * Math.cos(t),
//   0.4 * Math.sin(t) - 0.3 * Math.sin(t) ** 2,
// ];

// export const derivative1Func = (t) => [
//   -2 * Math.sin(t),
//   0.4 * Math.cos(t) - 0.6 * Math.cos(t) * Math.sin(t),
// ];

// export const derivative2Func = (t) => [
//   -2 * Math.cos(t),
//   -0.4 * Math.sin(t) - 0.6 * (Math.cos(t) ** 2 - Math.sin(t) ** 2),
// ];
export const exactFunction = (x1, x2) => 1;

export const parametrizationFunction = (t) => 1;

export const func = (t) => [2 * Math.cos(t), 0.5 * Math.sin(t)];

export const derivative1Func = (t) => [-2 * Math.sin(t), 0.5 * Math.cos(t)];

export const derivative2Func = (t) => [-2 * Math.cos(t), -0.5 * Math.sin(t)];
