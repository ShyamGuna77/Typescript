"use strict";
//=================
//==CSV PROJECT==
//=================
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
class CsvWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    save(fileName) {
        (0, fs_1.appendFileSync)(fileName, this.csv);
        console.log("File saved to ", fileName);
    }
    addRows(values) {
        let rows = values.map((v) => this.formatRows(v));
        this.csv += rows.join("\n");
        console.log(this.csv);
    }
    formatRows(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const CsvFile = new CsvWriter(["id", "amount", "to", "notes"]);
CsvFile.addRows([
    { id: 1, amount: 50, to: "Shyam", notes: "for saving World" },
    { id: 2, amount: 502, to: "Naidu", notes: "for being asshole" },
]);
// CsvFile.save('./data/payment.txt')
