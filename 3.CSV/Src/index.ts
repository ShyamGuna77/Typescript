

//=================
//==CSV PROJECT==
//=================

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = (keyof Payment)[];

class CsvWriter {
  private csv: string;

  constructor(private columns: PaymentColumns) {
    this.csv = this.columns.join(",") + "\n";
  }

  addRows(values: Payment[]): void {
    const rows = values.map((v) => this.formatRows(v));
    this.csv += rows.join("\n") + "\n";
    console.log(this.csv);
  }

  private formatRows(p: Payment): string {
    return this.columns.map((col) => p[col as keyof Payment]).join(",");
  }
}

const csvFile = new CsvWriter(["id", "amount", "to", "notes"]);

csvFile.addRows([
  { id: 1, amount: 50, to: "Shyam", notes: "for saving the world" },
  { id: 2, amount: 502, to: "Naidu", notes: "for being awesome" },
]);
