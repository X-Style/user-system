import {isFunc, STATUS} from './helpers'

const handleAction = handlers => (state, mutation) => {
  const { __status__: status, __payload__: payload } = mutation

  if (isFunc(handlers)) {
    status === STATUS.SUCCESS && handlers(state, payload)
  } else {
    const handler = handlers[status]
    isFunc(handler) && handler(state, payload)
  }
}

export default handleAction
