"use strict";
//=================
//==CSV PROJECT==
//=================
class CsvWriter {
    constructor(columns) {
        this.columns = columns;
        this.csv = this.columns.join(",") + "\n";
    }
    addRows(values) {
        const rows = values.map((v) => this.formatRows(v));
        this.csv += rows.join("\n") + "\n";
        console.log(this.csv);
    }
    formatRows(p) {
        return this.columns.map((col) => p[col]).join(",");
    }
}
const csvFile = new CsvWriter(["id", "amount", "to", "notes"]);
csvFile.addRows([
    { id: 1, amount: 50, to: "Shyam", notes: "for saving the world" },
    { id: 2, amount: 502, to: "Naidu", notes: "for being awesome" },
]);
