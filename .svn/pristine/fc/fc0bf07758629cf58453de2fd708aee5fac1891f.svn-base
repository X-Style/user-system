import { isFunc } from './helpers'
import {error} from '@/utils/helpers'

const handleGetter = (handler, key) => {
  if (!key || !handler) {
    error('Missing key or handler Parameter!')
  }
  return function (state) {
    if (isFunc(handler)) {
      return handler(state[key])
    }
  }
}

export default handleGetter
