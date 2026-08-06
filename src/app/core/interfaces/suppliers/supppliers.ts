export interface supplierReq{
    code: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    note: string;
}
export interface supplierRes{
  success: boolean
  message: string
  data: Dataresponse[]
}

export interface Dataresponse{
   id: number
  publicId: string
  code: any
  name: string
  phone: string
  email: string
  address: string
  notes: string
  createdAt: string
  updatedAt: any
  isDeleted: boolean
}