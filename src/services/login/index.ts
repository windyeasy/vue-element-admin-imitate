import request from '..'
import type { ILoginForm } from '@/types'

// 登录
export function login(userInfo: ILoginForm) {
  return request.post({
    url: '/vue-element-admin/user/login',
    data: userInfo,
  })
}

// 获取用户信息
export function getUserInfo(token: string) {
  return request.get({
    url: '/vue-element-admin/user/info',
    params: { token },
  })
}
