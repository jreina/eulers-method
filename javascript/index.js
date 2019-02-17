/**
 * A helper function.
 * @private
 * @template T
 * @param {Array<T>} arr
 */
const last = arr => arr[arr.length - 1];

/**
 * Performs Euler's method on a slope function.
 *
 * @param {((x: number, y: number) => number)} slope The DE to approximate
 * @param {number} x0 The initial x-value
 * @param {number} y0 The initial y-value
 * @param {number} h The step size
 * @param {number} steps Number of steps to calculate
 * @param {((x: number) => number)} solution The explicit solution to the differential equation
 * @returns {Array<{x: number, y: number, err: number}>}
 */
function EulersMethod(slope, x0, y0, h, steps, solution) {
  return Array(steps)
    .fill(0)
    .reduce(
      (memo, val, idx, arr) => {
        const { x, y } = last(memo);
        const x_n = x + h;
        const y_n = y + slope(x, y) * h;
        const err = Math.abs(solution(x) - y_n);
        return memo.concat({ x: x_n, y: y_n, err });
      },
      [{ x: x0, y: y0, err: 0 }]
    );
}

module.exports = EulersMethod;
