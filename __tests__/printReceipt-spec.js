const printReceipt = require('../printReceipt.js');

it('should return [{"id": "0001", "name" : "Coca Cola", "price": 3}, {"id": "0002", "name" : "Diet Coke", "price": 4}] when invoke getRecord given [\'0001\'] and datasource', function () {
    // given
    const arr = ['0001', '0002'];
    const datasource = [
        {"id": "0001", "name": "Coca Cola", "price": 3},
        {"id": "0002", "name": "Diet Coke", "price": 4},
        {"id": "0003", "name": "Pepsi-Cola", "price": 5},
        {"id": "0004", "name": "Mountain Dew", "price": 6},
        {"id": "0005", "name": "Dr Pepper", "price": 7},
        {"id": "0006", "name": "Sprite", "price": 8},
        {"id": "0007", "name": "Diet Pepsi", "price": 9},
        {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name": "Fanta", "price": 12}
    ];

    // when
    const record = printReceipt.getRecord(arr, datasource);

    // then
    expect(record).toStrictEqual([{"id": "0001", "name": "Coca Cola", "price": 3}, {
        "id": "0002",
        "name": "Diet Coke",
        "price": 4
    }]);
});

it('should return name: Coca Cola price: 3  name: Diet Coke price: 4 when invoke getDetails given [{"id": "0001", "name" : "Coca Cola", "price": 3}, {"id": "0002", "name" : "Diet Coke", "price": 4}]', function () {
    // given
    const record = [{"id": "0001", "name": "Coca Cola", "price": 3}, {"id": "0002", "name": "Diet Coke", "price": 4}];

    // when
    const name = printReceipt.getName(record);
    const price = printReceipt.getPrice(record);

    // then
    expect(name).toStrictEqual(["Coca Cola", "Diet Coke"]);
    expect(price).toStrictEqual([3, 4]);
});

it('should return standard format when invoke beFormat given name and price and count', function () {
    // given
    const name = ["Coca Cola", "Diet Coke"];
    const price = [3, 4];
    const count = 1;

    // when
    const format = printReceipt.beFormat(name, price, count);

    // then
    expect(format).toStrictEqual("Receipts\n" +
        "------------------------------------------------------------\n" +
        "Coca Cola                       3          1\n" +
        "Diet Coke                       4          1\n" +
        "------------------------------------------------------------\n" +
        "Price: 7")
});

it('should doCount', function () {
    const arr = ['0002', '0002'];
    const datasource = [
        {"id": "0001", "name": "Coca Cola", "price": 3},
        {"id": "0002", "name": "Diet Coke", "price": 4},
        {"id": "0003", "name": "Pepsi-Cola", "price": 5},
        {"id": "0004", "name": "Mountain Dew", "price": 6},
        {"id": "0005", "name": "Dr Pepper", "price": 7},
        {"id": "0006", "name": "Sprite", "price": 8},
        {"id": "0007", "name": "Diet Pepsi", "price": 9},
        {"id": "0008", "name": "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name": "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name": "Fanta", "price": 12}
    ];

    const count = printReceipt.doCount(arr, datasource);

    expect(count).toBe(2);
});