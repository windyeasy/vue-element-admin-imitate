import Mock from 'mockjs'

import user from './user'

function addMockServerData() {
  for (const item of user)
    Mock.mock(item.url, item.type, item.response)
}
addMockServerData()
