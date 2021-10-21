var url = "http://mylogger.io/log";

function printLog(message) {
    console.log(message);
}
//module.exports.printLog = printLog;
//module.exports.endPoint = url;
//console.log(module);
module.exports = printLog;