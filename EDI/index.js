module.exports = function (FFA) {

    let split = FFA.split("    ");
    //let split = FFA.split("");

    obj = {};
    split.forEach(e => {
        getDataLine(e, obj);
    })

    //clearObject(obj)
    return obj
}

let TRACER;
function getDataLine(line, obj) {
    let data;
    if (line.startsWith("FFA")) {
        data = line.split("/")
        obj.FFA = data[1];
    } else if (line.startsWith("SSR")) {
        data = line.split("/")
        obj.SpecialServiceRequestSSR = data[1]
    } else if (line.startsWith("OSI")) {
        data = line.split("/")
        obj.OtherServiceInformationOSI = data[1]
    } else if (line.startsWith("REF")) {
        data = line.split("/")
        obj.AirportCityCodeREF = data[1].substring(0, 3)
        obj.OfficeFunctionDesignatorREF = data[1].substring(3, 5)
        obj.CompanyDesignatorREF = data[1].substring(5, 7)
        obj.BookingFileReferencesREF = data[2]
        obj.ParticipantIdentifierREF = data[3]
        obj.ParticipantCodeREF = data[4]
        obj.AirportCityCodeREF2 = data[5]
    } else if (line.startsWith("SRI")) {
        data = line.split("/")
        obj.ReferenceNumberSRI = data[1]
        obj.SupplementaryShippingInformationSRI = data[2]
        obj.SupplementaryShippingInformationSRI2 = data[3]
    } else if (new RegExp("^([0-9]{3}-)$").test(line.substring(0, 4))) {
        console.log("Es el que inicia con el 'airline prefix' linea 2")
    } else if (line.startsWith("LH")) {
        console.log("esta es para la tercera linea inicia con CarrierCode FlightNumber")
    } else if (line.startsWith("/")) {
        console.log("inicia con /")
    } else {
        console.log(line)
        console.log("No esta previsto")
    }
}

function clearObject(obj) {
    return JSON.parse(JSON.stringify(obj));
    //Object.keys(obj).forEach(key => obj[key] === undefined || obj[key] === '' ? delete obj[key] : '');
    //Object.keys(obj).forEach(key => obj[key] === undefined && delete obj[key])
}