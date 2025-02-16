"use strict";
//=================
//==CSV PROJECT==
//=================
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvWriter = void 0;
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
    formatRows(value) {
        return this.columns.map((col) => value[col]).join(",");
    }
}
exports.CsvWriter = CsvWriter;
