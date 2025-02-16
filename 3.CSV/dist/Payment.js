"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
const PaymentWriter = new index_1.CsvWriter(["id", "to", "amount", "notes"]);
PaymentWriter.addRows([
    { id: 1, amount: 50, to: "Shyam", notes: "for saving World" },
    { id: 2, amount: 502, to: "Naidu", notes: "for being asshole" },
    { id: 2, amount: 502, to: "Sruit", notes: "for being a friend" }
]);
PaymentWriter.save('./data/Generic.csv');
