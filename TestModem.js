const GSM = require('./gsm')
const gsm = new GSM('/dev/gsmmodem')

async function main() {

    // Connect
    console.log("Connecting to serial modem...")
    await gsm.connect()
    console.log("Connected to serial modem")
    await gsm.check()
    console.log("Modem OK\n")

    // Print modem info
    console.log("Modem Information:")
    console.log(`    Manufacturer: ${await gsm.getManufacturerInformation()}`)
    console.log(`    Model ID: ${await gsm.getModelIdentification()}`)
    console.log(`    Version: ${await gsm.getRevisionIdentification()}`)
    console.log(`    Serial: ${await gsm.getSerialNumber()}`)
    console.log("")

    // Print network info (Works only with a working SIM card and GSM signal)
    console.log("Network Information:")
    console.log(`    Carrier: ${await gsm.getCurrentOperator()}`)
    console.log(`    Signal: ${(await gsm.getSignalQuality()).description }`)
    console.log(`    Subscriber ID: ${await gsm.getSubscriberId()}`)
    console.log(`    Phone Number: ${await getPhoneNumber(gsm) || "Unknown"}`)

    // Polling on the list of unread messages and write all messages to stdout
    while(true) {
        let unreadMessages = await gsm.readSMS(GSM.MessageStorage.sim,GSM.MessageFilter.unread)
        console.log(`Unread messages: ${unreadMessages.length}`)
        if(unreadMessages.length > 0) {
            for(let msg of unreadMessages) {
                console.log(`From ${msg.sender} at ${msg.time.toISOString()}:`)
                console.log(`${msg.text}\n\n`)
            }
            await gsm.deleteAllMessages(GSM.MessageStorage.sim, GSM.MessageDeleteFilter.readSentAndUnsent)
        }
        await timeout(10000)
    }
}

async function getPhoneNumber(gsm) {
    try {
        return await gsm.getSubscriberNumber()
    }
    catch {
        // Some operators store the subscriber phone number in the own number phone book. But it may fail
        try {
            const result = await gsm.readPhoneBook(GSM.PhoneBookStorage.ownNumber,1,1)
            return result[0].number
        }
        catch {
            return undefined
        }
    }
}

const timeout = (ms) => {
    return new Promise(resolve => {
        setTimeout(resolve,ms)
    })
}

main().then(() => console.log("Bye")).catch(console.error).finally(() => { gsm.disconnect() })
