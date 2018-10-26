import createAction from '../../../utils/vuexUtils/createAction'
import REST from '../../../utils/rest'
import * as $C from '../../../utils/consts'

export const login = createAction('login',
  options => {
    return new REST([$C.OriginUrl, 'users/signup']).POST({
      data: {
        instcode: '001',
        username: 'userAdmin',
        password: '123456',
        admintype: 'OfficialAdmin',
        usertype: 'Not'
      }
    })
  },
  options => ({
    loading: options.loading,
    success: {
      handler: options.success,
      text: '操作成功'
    },
    error: {
      handler: options.error,
      text: '网络错误！'
    }
  })
)
