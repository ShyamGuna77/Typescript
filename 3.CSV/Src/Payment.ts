
import { CsvWriter } from "./index";
interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}



const PaymentWriter = new CsvWriter<Payment>(["id",  "to", "amount","notes"]);

PaymentWriter.addRows([
  { id: 1, amount: 50, to: "Shyam", notes: "for saving World" },
  { id: 2, amount: 502, to: "Naidu", notes: "for being asshole" },
  { id: 2, amount: 502, to: "Sruit", notes: "for being a friend" }
]);

PaymentWriter.save('./data/Generic.csv')
