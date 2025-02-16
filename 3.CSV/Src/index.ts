

//=================
//==CSV PROJECT==
//=================

import { appendFileSync } from "fs";


export class CsvWriter <T>{
  constructor(private columns:(keyof T)[]) {
    this.csv = this.columns.join(",") + "\n";
  }
  private csv: string;

  save(fileName:string):void{
      appendFileSync(fileName,this.csv)
      console.log("File saved to " ,fileName);
  }

  addRows(values: T[]): void {
    let rows = values.map((v) => this.formatRows(v));
    this.csv += rows.join("\n");
    console.log(this.csv);
  }

  private formatRows(value: T): string {
    return this.columns.map((col) => value[col]).join(",");
  }
}


