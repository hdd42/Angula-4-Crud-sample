export interface IUser{
  _id: string,
  updatedAt: string | Date,
  createdAt: string | Date,
  email: string
  name: string
  deletedAt: string | Date | null,
  active: boolean,
  islemList: [string],
  islemCount: number,
  role: string,
  //asagidaki iki oge, user nesnesinin gercek uyleri degil
  //sadece ui da kullaniciya daha iyi feedback vermek icin
  new?:boolean,
  edited?:boolean
}


export interface IGetResponse {
  success: number,
  meta: IMeta
  data: any
}


export interface IMeta{
  limit: number,
  skip: number,
  count: 503
}
