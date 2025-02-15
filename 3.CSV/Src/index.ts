

//=================
//==CSV PROJECT==
//=================

interface Payment{
    id:number
    amount:number
    to :string
    notes:string
}

type Paymentcolumns = ('id'|'amount'|'to'|'notes')[]

class CsvWriter {
    constructor(private columns :Paymentcolumns ) {

    }
    private csv :string
}

const CsvFile = new CsvWriter(['id','amount','to','notes'])