import request from '@/utils/request'
export const getDataAPI = () => {
  return request({
    url: 'http://geek.itheima.net/v1_0/channels'
  })
}
