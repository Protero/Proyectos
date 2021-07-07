function  parseDateJson (date) {
    const dateParse = new Date(date);
    const dateJson = dateParse.toJSON();
    const dateString = dateJson.substring(0, dateJson.length -1);
    return dateString;
}

function parseStringDate(from, to, neasContent){
    const dateFrom = new Date(from);
    const dateTo = new Date(to);
    let neas;
    let objResult;
    for (let element of neasContent){
        neas = new Date (element.discovery_date);
       
        if (dateFrom < neas && dateTo > neas){
            console.log(">dateFrom: ", dateFrom);
            console.log(">neas: ", neas);
            console.log(">dateTo: ", dateTo);
            objResult += element;
        } 
    }
    console.log(">objResult: ", objResult);
    return objResult;
}

function  parseDateNeasJson (date, neasContent) {
    let objResult;
    switch(date.length){
        case 4:
            for (let element of neasContent){
                if (date == element.discovery_date.slice(0,4)){
                    objResult += element;
                }
            }
            return objResult;
            break;
        case 7:
            for (let element of neasContent){
                if (date == element.discovery_date.slice(0,7)){
                    objResult += element;
                }
            }
            return objResult;
            break;
        case 10:
            for (let element of neasContent){
                if (date == element.discovery_date.slice(0,10)){
                    objResult += element;
                }
            }
            return objResult;
            break;
    }
}
module.exports = {
    parseDateJson,
    parseDateNeasJson,
    parseStringDate
};