import {
  isFunc,
  isPromise,
  hasPromise,
  buildPromiseQueue,
  STATUS,
  defaultErrorText
} from './helpers'

const dispatchLoading = (commit, status) => {
  commit('LOADING_CHANGE', status)
}

const dispatchMessage = (commit, payload, type, { loading = true, ...others }) => {
  if (type !== STATUS.PENDING) {
    const currentType = others[type]
    if (currentType && isFunc(currentType.handler)) {
      currentType.handler(payload)
    } else {
      const content = type === STATUS.ERROR ? (currentType.text || payload.message || defaultErrorText) : currentType.text
      commit('MESSAGE_CHANGE', { type, content })
    }
  }
  loading && dispatchLoading(commit, type)
}

const dispatchAction = (commit, action, status, affixConfig) => {
  const { type, payload } = action
  commit(type, {
    __status__: status,
    __payload__: payload
  })
  dispatchMessage(commit, payload, status, affixConfig)
}

const commitAsPending = (commit, action, affixConfig) => {
  dispatchAction(commit, action, STATUS.PENDING, affixConfig)
}

const commitAsSuccess = (commit, action, affixConfig) => {
  dispatchAction(commit, action, STATUS.SUCCESS, affixConfig)
}

const commitAsError = (commit, action, affixConfig) => {
  dispatchAction(commit, action, STATUS.ERROR, affixConfig)
}

const createAction = (type, payloadCreator, affix) => {
  const finalPayloadCreator = isFunc(payloadCreator) ? payloadCreator : (...args) => args[0]
  const affixFn = isFunc(affix) ? affix : () => ({})

  return ({ dispatch, commit }, ...args) => {
    const payload = finalPayloadCreator(...args)
    const affixConfig = affixFn(...args)
    const action = { type, payload }
    commit = commit || dispatch

    if (isPromise(payload)) {
      commitAsPending(commit, action, affixConfig)
      return payload.then(
        result => commitAsSuccess(commit, Object.assign(action, { payload: result }), affixConfig),
        error => commitAsError(commit, Object.assign(action, { payload: error }), affixConfig)
      )
    }

    if (hasPromise(payload)) {
      const promiseQueue = buildPromiseQueue(payload)
      commitAsPending(commit, action, affixConfig)
      return promiseQueue
        .run(...args)
        .then(result => commitAsSuccess(commit, action, affixConfig))
        .catch(error => commitAsError(commit, Object.assign(action, { payload: error }), affixConfig))
    }

    return commitAsSuccess(commit, action)
  }
}

export default createAction
