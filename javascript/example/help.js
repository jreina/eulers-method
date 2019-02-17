const EulersMethod = require('../index');

// Change these
const slope = (x, y) => Math.exp(x-y);
const solution = (x) => Math.log(Math.exp(x) - Math.exp(1.5) + Math.exp(2));
const x_0 = 1.5;
const y_0 = 2;
const h = 0.2;
const steps = 5;

// Approximation
const approx = EulersMethod(slope, x_0, y_0, h, steps, solution);

// Printing stuff
console.log(`differential equation: ${slope.toString()}`);
console.log(`initial condition y(${x_0}) = ${y_0}`);
console.log(`step size: ${h}`);
console.log(`steps: ${steps}`);
console.table(approx);