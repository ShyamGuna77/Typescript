

//=================
//==CSV PROJECT==
//=================

import { appendFileSync } from "fs";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type Paymentcolumns = ("id" | "amount" | "to" | "notes")[];

class CsvWriter {
  constructor(private columns: Paymentcolumns) {
    this.csv = this.columns.join(",") + "\n";
  }
  private csv: string;

  save(fileName:string):void{
      appendFileSync(fileName,this.csv)
      console.log("File saved to " ,fileName);
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRows(v));
    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formatRows(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}

const CsvFile = new CsvWriter(["id", "amount", "to", "notes"]);

CsvFile.addRows([
  { id: 1, amount: 50, to: "Shyam", notes: "for saving World" },
  { id: 2, amount: 502, to: "Naidu", notes: "for being asshole" },
]);

CsvFile.save('./data/payment.csv')