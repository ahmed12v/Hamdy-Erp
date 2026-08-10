export interface PurcgesReq {
  purchaseNumber: string
  supplierName: string
  purchaseDate: string
  notes: string
  items: Item[]
}

export interface Item {
  itemName: string
  type: string
  quantity: number
  unitPrice: number
}
 export interface responPurches{
    message:string,
    totalCost:string,
 }