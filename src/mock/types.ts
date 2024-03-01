import type Mock from 'mockjs'

// import type { ILoginForm } from '@/types'

// export interface IResponseConfig {
//   body?: ILoginForm | any
//   query?: any
// }
export interface IMockParameter {
  url: string | RegExp
  type: string
  response: Mock.templateOrFn
}
