export type matials = amtrialsResponse[]

export interface amtrialsResponse {
  id: number
  materialName: string
  color: string
  unit: string
  currentStock: number
  createdAt: string
  gramPrice: number
}
export interface matrialReq{
 materialName:string,
 colorId:number,
 unit:string,
 currentStock:number,
 gramPrice:number,
}

export type colors = colorsResponse[]

export interface colorsResponse{
    id:number,
    name:string,
    createdAt:string,
}

