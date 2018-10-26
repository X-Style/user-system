import loginState from '../views/login/vuex/state'
import { STATUS } from '../utils/vuexUtils/helpers'

const globalState = {
  XHR_STATUS: STATUS.INIT,
  MESSAGE_STATUS: {}
}
export default {
  ...loginState,
  ...globalState
}
