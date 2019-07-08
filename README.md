# NodeJS GSM API

A simple and easy to use NodeJS API to communicate with serial GSM Modems.

## Features
* Read device information: serial, manufacturer, model.
* Read network information: Carrier, signal strength, subscriber id.
* Read and send SMS Messages.
* Add, Read and modify SIM card contacts.
* Make calls (without audio).

## Requirements
* Access to a serial USB GSM Modem
* Working SIM Card
* NodeJS 11 and later

## Usage
```JavaScript
const GSM = require("gsm")
const gsm = new GSM("/dev/gsmmodem")
await gsm.connect()

let manufacturer = await gsm.getManufacturerInformation()) 
console.log(manufacturer) // QUALCOMM INCORPORATED

let unreadMessages = await gsm.readSMS(GSM.MessageStorage.sim, GSM.MessageFilter.unread)
console.log(unreadMessages) // List of unread SMS messages

await gsm.sendSMS("+31111222333","Hello from NodeJS")
```

## Dependencies
* [serialport](https://www.npmjs.com/package/serialport)

## Resources
* [
Send and Receive SMS Messages Using Raspberry Pi and Python
](https://hristoborisov.com/index.php/projects/turning-the-raspberry-pi-into-a-sms-center-using-python/)
* [AT Commands Reference Guide  ](https://www.sparkfun.com/datasheets/Cellular%20Modules/AT_Commands_Reference_Guide_r0.pdf) ([Local Copy](docs/AT_Commands_Reference_Guide_r0.pdf))
* [
Introduction to AT commands and its uses
](https://www.codeproject.com/Articles/85636/Introduction-to-AT-commands-and-its-uses)

## Testing the modem
### Method 1: Using regular bash
Terminal window 1 will read
```bash
$ cat /dev/gsmmodem

OK

Manufacturer: QUALCOMM INCORPORATED
Model: +CGMM:HSPA MODEM
Revision: +CGMR:V1.2
IMEI: 869478036086138
+GCAP: +CGSM,+DS,+ES

OK
```

Terminal window 2 will write
```bash
$ echo "AT" > /dev/gsmmodem
$ echo "ATI" > /dev/gsmmodem
```

### Method 2: Using cu
```bash
$ apt install cu
$ cu -l /dev/gsmmodem

AT

OK

ATI

Manufacturer: QUALCOMM INCORPORATED
Model: +CGMM:HSPA MODEM
Revision: +CGMR:V1.2
IMEI: 869478036086138
+GCAP: +CGSM,+DS,+ES

OK
```