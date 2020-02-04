
/**
 * ME Error Result Codes
 */
const MEError = Object.freeze({
    0: "phone failure",
    1: "No connection to phone",
    2: "phone-adaptor link reserved",
    3: "operation not allowed",
    4: "operation not supported",
    5: "PH-SIM PIN required",
    10:"SIM not inserted",
    11: "SIM PIN required",
    12: "SIM PUK required",
    13: "SIM failure",
    14: "SIM busy",
    15: "SIM wrong",
    16: "incorrect password",
    17: "SIM PIN2 required",
    18: "SIM PUK2 required",
    20: "memory full",
    21: "invalid index",
    22: "not found",
    23: "memory failure",
    24: "text string too long",
    25: "invalid characters in text string",
    26: "dial string too long",
    27: "invalid characters in dial string",
    30: "no network service",
    31: "network timeout",
    32: "network not allowed - emergency calls only",
    40: "network personalization PIN required",
    41: "network personalization PUK required",
    42: "network subset personalization PIN required",
    43: "network subset personalization PUK required",
    44: "service provider personalization PIN required",
    45: "service provider personalization PUK required",
    46: "corporate personalization PIN required",
    47: "corporate personalization PUK require",

    // Easy CAMERA® related errors
    50: "Camera not found",
    51: "Camera Initialization Error",
    52: "Camera not Supported",
    53: "No Photo Taken",
    54: "NET BUSY...Camera TimeOut",
    55: "Camera Error",

    // General purpose error
    100: "Unknown error",

    // GPRS related errors to a failure to perform an Attach:
    103: "Illegal MS (#3)*",
    106: "Illegal ME (#6)*",
    107: "GPRS service not allowed (#7)*",
    111: "PLMN not allowed (#11)*",
    112: "Location area not allowed (#12)*",
    113: "Roaming not allowed in this location area (#13)*",

    // GPRS related errors to a failure to Activate a Context and others:
    132: "service option not supported (#32)*",
    133: "requested service option not subscribed (#33)*",
    134: "service option temporarily out of order (#34)*",
    148: "unspecified GPRS error",
    149: "PDP authentication failure",
    150: "invalid mobile class",

    // Network survey errors:
    257: "Network survey error (No Carrier)*",
    258: "Network survey error (Busy)*",
    259: "Network survey error (Wrong request)*",
    260: "Network survey error (Aborted)* ",

    // Easy GPRS® related errors:
    400: "generic undocumented error",
    401: "wrong state",
    402: "wrong mode",
    403: "context already activated",
    404: "stack already active",
    405: "activation failed",
    406: "context not opened",
    407: "cannot setup socket",
    408: "cannot resolve DN",
    409: "timeout in opening socket",
    410: "cannot open socket",
    411: "remote disconnected or timeout",
    412: "connection failed",
    413: "tx error",
    414: "already listening",

    // FTP related errors:
    420: "ok",
    421: "connect",
    422: "disconnect",
    423: "error",
    424: "wrong state",
    425: "can not activate",
    426: "can not resolve name",
    427: "can not allocate control socket",
    428: "can not connect control socket",
    429: "bad or no response from server",
    430: "not connected",
    431: "already connected",
    432: "context down",
    433: "no photo available",
    434: "can not send photo"
})

/**
 * Message Service Failure Result Codes
 */
const MSError = Object.freeze({
    300: "ME failure",
    301: "SMS service of ME reserved",
    302: "operation not allowed",
    303: "operation not supported",
    304: "invalid PDU mode parameter",
    305: "invalid text mode parameter",
    310: "SIM not inserted",
    311: "SIM PIN required",
    312: "PH-SIM PIN required",
    313: "SIM failure",
    314: "SIM busy",
    315: "SIM wrong",
    316: "SIM PUK required",
    317: "SIM PIN2 required",
    318: "SIM PUK2 required",
    320: "memory failure",
    321: "invalid memory index",
    322: "memory full",
    330: "SMSC address unknown",
    331: "no network service",
    332: "network timeout",
    340: "no +CNMA acknowledgement expected",
    500: "Unknown error",
})

module.exports = { MEError, MSError }