import { defineStore } from 'pinia'

import { ACCOUNT_TOKEN, ACCOUNT_USERINFO } from '../constants'
import { getUserInfo, login } from '@/services/login'
import type { ILoginForm } from '@/types'
import { localCache } from '@/utils/cache'

interface ILoginState {
  userInfo?: {
    username?: string
    avatar?: string
    rules?: string[]
    introduction?: string
  }
  token?: string
}

// login store
const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    userInfo: {},
    token: '',
  }),
  actions: {
    // login action
    async loginAction(userInfo: ILoginForm) {
      const res = await login(userInfo)
      if (res.code === 20000) {
        this.token = res.data.token
        localCache.setCache(ACCOUNT_TOKEN, this.token)
        this.getUserInfoAction()
      }
    },
    // get userInfo action
    async getUserInfoAction() {
      const token = this.token
      if (token) {
        const res = await getUserInfo(token)
        if (res.code === 20000) {
          this.userInfo = res.data
          localCache.setCache(ACCOUNT_USERINFO, this.userInfo)
        }
      }
    },
    // load local data
    loadLocalDataAction() {
      const token = localCache.getCache(ACCOUNT_TOKEN)
      const userInfo = localCache.getCache(ACCOUNT_USERINFO)
      if (token && userInfo) {
        this.token = token
        this.userInfo = userInfo
      }
    },
  },
})

export default useLoginStore
