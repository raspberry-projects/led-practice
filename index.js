var Gpio = require('onoff').Gpio;
var led = new Gpio(27, 'out');
var status = false;

const INTERVAL = 1000;

setInterval(()=> {
    console.log(status ? '[ON]' : '[OFF]')
    //status ? led.writeSync(1) : led.writeSync(0);
    status = !status;
}, INTERVAL);