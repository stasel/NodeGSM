ReturnCode = Object.freeze({
    ok: "OK",
    connect: "CONNECT",
    ring: "RING",
    noCarrier: "NO CARRIER",
    error: "ERROR",
    noDialtone: "NO DIALTONE",
    busy: "BUSY",
    noAnswer: "NO ANSWER"
})

ServiceClass = Object.freeze({
    data: 0,
    fax: 1,
    voice: 8
})

CharacterSet = Object.freeze({
    IRA: "IRA",
    GSM: "GSM",
    UCS2: "UCS2"
})

PhoneBookStorage = Object.freeze({
    sim: "SM",
    fixedDialing: "FD",
    dialedCalls: "DC",
    missedCalls: "MC",
    receivedCalls: "RC",
    ownNumber: "ON",
    mobileEquipment: "ME",
    emergencyNumbers: "EN",
    lastDialed: "LD"
})

PhoneNumberType = Object.freeze({
    national: 129,       // national numbering scheme
    international: 145,  // international numbering scheme (contains the character "+")
    text: 208,           // Text based ex: 'Vodafone'
    text2: 209            // Text based ex: 'Vodafone'
})

MessageStorage = Object.freeze({
    internal: "ME",
    sim: "SM",
    statusReport: "SR",
    all: "MT"
})

MessageFormat = Object.freeze({
    PDU: 0,
    text: 1
})

MessageFilter = Object.freeze({
    unread:         { pdu: 0, text: "REC UNREAD" },
    read:           { pdu: 1, text: "REC READ" },
    storedUnsent:   { pdu: 2, text: "STO UNSENT" },
    storedSent:     { pdu: 3, text: "STO SENT" },
    all:            { pdu: 4, text: "ALL" }
})

MessageDeleteFilter = Object.freeze({
    /**
     * Delete all read messages from storage, leaving unread messages and stored 
     * mobile originated messages (whether sent or not) untouched
     */
    read: 1, 

    /**
     * Delete all read messages from storage and sent mobile originated messages,
     * leaving unread messages and unsent mobile originated messages untouched 
     */
    readAndSent: 2,

  /**
     *  Delete all read messages from storage, sent and unsent mobile originated 
     *  messages, leaving unread messages untouched
     */
    readSentAndUnsent: 3,

    /**
     * Delete all message from storage
     */
    all: 4
})

module.exports = { 
    ReturnCode, 
    ServiceClass, 
    CharacterSet, 
    PhoneBookStorage,
    PhoneNumberType, 
    MessageStorage, 
    MessageFormat, 
    MessageFilter, 
    MessageDeleteFilter 
}