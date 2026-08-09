export type Orders = orderDetilas[]

export interface orderDetilas {
  id: number
  orderNumber: string
  customer: Customer
  totalCost: number
  finalPrice: number
  status: string
  createdAt: string
  items: Item[]
}

export interface Customer {
  id: number
  name: string
}

export interface Item {
  id: number
  materialId: number
  materialName: string
  color: string
  weight: number
  gramPrice: number
  totalCost: number
  profitAmount: number
  finalPrice: number
}


export interface responseAfterGreation{
   message: string
  orderId: number
  orderNumber: string
  totalCost: number
  profitAmount: number
  finalPrice: number
}
export interface reqInterface{
  customerId: number
  materialId: number
  weight: number
  hours: number
  machineHourPrice: number
  electricityHourPrice: number
  laborHourPrice: number
  wastePercentage: number
  profitPercentage: number
  gramPrice: number
}

