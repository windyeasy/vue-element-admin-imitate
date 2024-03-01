import { defineStore } from 'pinia'

interface ILoginState {
  userInfo?: {
    username: string
  }
}

// 登录store
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    userInfo: {
      username: '',
    },
  }),
})

export default useLoginStore
