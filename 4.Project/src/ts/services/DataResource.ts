


export class DataResource <T> {
    constructor (private endPoint : string){

    }
    async loadAll():Promise <T[]> {
     const res =   await fetch (this.endPoint)
     return res.json()
    }

    async loadOne(id:number):Promise<T>{
        const res = await fetch(`${this.endPoint}/${id}`)
        return res.json()
    }
    async delete(id:number){
         const res = await fetch(`${this.endPoint}/${id}`,{
            method:'DELETE'
         })
         return res;
    }
    async save(data:T){
        const res = await fetch(this.endPoint, {
            method:'POST',
            body: JSON.stringify(data),
            headers: {'Content-Type':'application/json'}
        })
    }
}