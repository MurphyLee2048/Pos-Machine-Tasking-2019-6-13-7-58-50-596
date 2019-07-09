function getRecord(arr, datasource) {
    // var r = new Array();
    var r = [];
    var record = [];
    for (var j = 0; j < arr.length; j++) {
        for (var i = 0; i < datasource.length; i++) {
            if (datasource[i].id == arr[j]) {
                r = datasource[i];
                break;
            }
        }
        record.push(r);
    }
    return record;
}

function getName(record) {
    let name = [];
    for (let i = 0; i < record.length; i++) {
        name.push(record[i].name);
    }
    return name;
}

function getPrice(record) {
    var price = [];
    for (var i = 0; i < record.length; i++) {
        price.push(record[i].price);
    }
    return price;
}

function beFormat(name, price, count) {
    let sum = 0;
    let format1 = "";
    format = "Receipts\n" + "------------------------------------------------------------\n";
    for (var k = 0; k < name.length; k++) {
        format1 = format1 + name[k] + "                       " + price[k] + "          " + count + "\n";
        sum = price[k] + sum;
    }
    format = format + format1 + "------------------------------------------------------------\n" + "Price: " + sum;
    return format
}

function doCount(arr, datasource) {
// TODO
    return 2;
}

module.exports = {
    getRecord: getRecord,
    getName: getName,
    getPrice:getPrice,
    beFormat:beFormat,
    doCount:doCount,
};