import queryString from 'query-string'
import type { IMockParameter } from './types'

interface ITokens {
  [prop: string]: {
    token: string
  }
}
const tokens: ITokens = {
  admin: {
    token: 'admin-token',
  },
  editor: {
    token: 'editor-token',
  },
}
interface IUsers {
  [prop: string]: {
    roles: string[]
    introduction: string
    avatar: string
    name: string
  }
}
const users: IUsers = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin',
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor',
  },
}
const userMocks: IMockParameter[] = [
  // user login
  {
    url: '/vue-element-admin/user/login',
    type: 'post',
    response: (config) => {
      const body = JSON.parse(config.body)
      const username = body!.username as string
      const token = tokens[username]
      // mock error
      if (!token) {
        return {
          code: 60204,
          message: 'Account and password are incorrect',
        }
      }
      else {
        return {
          code: 2000,
          token,
        }
      }
    },
  },
  // get user info
  {
    url: /\/vue-element-admin\/user\/info/,
    type: 'get',
    response: (config) => {
      const queryStringUrl = config.url.split('?')[1]
      // 解析传入参数
      const query = queryString.parse(queryStringUrl)

      const token = query.token as string
      if (typeof token != 'string') {
        return {
          code: 50009,
          message: 'parameter error',
        }
      }
      const info = users[token]
      if (!info) {
        return {
          code: 50008,
          message: 'Login failed, unable to get user details.',
        }
      }
      return {
        code: 20000,
        data: info,
      }
    },
  },

  // user logout
  {
    url: '/vue-element-admin/user/logout',
    type: 'post',
    response: (_) => {
      return {
        code: 20000,
        data: 'success',
      }
    },
  },
]
export default userMocks
