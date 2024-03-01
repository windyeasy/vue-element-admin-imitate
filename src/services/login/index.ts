import request from '..'
import type { ILoginForm } from '@/types'

export function login(userInfo: ILoginForm) {
  return request.post({
    url: ' /vue-element-admin/user/login',
    data: userInfo,
  })
}
