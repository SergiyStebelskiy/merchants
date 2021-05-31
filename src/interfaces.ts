export interface IMerchant {
  name: string
  email: string
  website: string
  memoText: string
}
export interface IStore {
  merchants: {
    dataCount: number
    data: Array<IMerchant>
  }
}
