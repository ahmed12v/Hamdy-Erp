export interface ratingreq{
    materialId: number ,
    weight: number ,
    gramPrice: number ,
    hours: number ,
    machineHourPrice: number ,
    electricityHourPrice: number ,
    laborHourPrice: number ,
    wastePercentage: number ,
    profitPercentage: number ,
}
export interface rateCome{
    id: number
  materialId: number
  weight: number
  gramPrice: number
  hours: number
  machineHourPrice: number
  electricityHourPrice: number
  laborHourPrice: number
  wastePercentage: number
  profitPercentage: number
  materialCost: number
  machineCost: number
  electricityCost: number
  laborCost: number
  totalCost: number
  finalPrice: number
  profitAmount: number
  createdAt: string
}