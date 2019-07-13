const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'both');

console.log('Programa iniciado, presiona el botón para encender el led.');

val = 0;
 
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  val += 0.1;
  if (val > 1) val = 0;

  console.log(`val: ${val} value: ${value}`);
 
  led.writeSync(val);
});
 
process.on('SIGINT', () => {
  led.unexport();
  button.unexport();
});
