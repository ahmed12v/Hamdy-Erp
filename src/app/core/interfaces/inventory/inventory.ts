export type responseInventory = inventory[]
export interface inventory{
      id: number
  name: string
  type: string
  color?: string
  currentStock: number
  unitPrice: number
  totalValue: number
}