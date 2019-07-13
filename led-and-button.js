const Gpio = require('onoff').Gpio;
const led = new Gpio(17, 'out');
const button = new Gpio(4, 'in', 'rising');

console.log('Programa iniciado, presiona el botón para encender el led.');
 
button.watch((err, value) => {
  if (err) {
    throw err;
  }

  console.log(`value: ${value}`);
 
  led.writeSync(value);
});
 
process.on('SIGINT', () => {
  led.unexport();
  button.unexport();
});
