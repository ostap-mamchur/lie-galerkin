export function matrix(size = 0, defaultValue = 0) {
  return Array(size)
    .fill(0)
    .map(() => {
      return Array(size).fill(defaultValue);
    });
}

export function vector(size = 0, defaultValue = 0) {
  return Array(size).fill(defaultValue);
}
