let internalComponents = {}
const request = require.context('../components/share', false, /(.*)\.[vue|js]/)

request.keys().forEach(path => {
  const module = request(path)
  path = path.replace(/(\.\/|\.(vue|js))/gi, '').split('/')
  const fileName = path[0]
  internalComponents[fileName] = module.default || module
})
export default function installExternalComponents (Vue) {
  Object.keys(internalComponents).forEach((key) => {
    Vue.component(key, internalComponents[key])
  })
}
