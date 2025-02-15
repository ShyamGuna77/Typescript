"use strict";
//=================
//==CSV PROJECT==
//=================
class CsvWriter {
    constructor(columns) {
        this.columns = columns;
    }
}
const CsvFile = new CsvWriter(['id', 'amount', 'to', 'notes']);
