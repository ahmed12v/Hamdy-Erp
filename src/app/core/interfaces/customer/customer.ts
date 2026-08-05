export interface customerFormReq{
  id: number;
    code: string | null;
    name: string;
    phone: string;
    email: string;
    address: string;
    notes: string;
    ordersCount: number;
}


export interface AllCustomerss {
  id: number
  code: string
  name: string
  phone: string
  email: string
  address: string
  notes: string
  ordersCount: number
}
export interface addRes {
  success: boolean
  message: string
  data: Data
}

export interface Data {
  id: number
  publicId: string
  code: string
  name: string
  phone: string
  email: string
  address: string
  notes: string
  createdAt: string
  updatedAt: any
  isDeleted: boolean
  openingBalance: number
  debit: number
  credit: number
  orders: any[]
}
export interface updateResponse {
  success:string
  message:string  
  data:string
}