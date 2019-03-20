function registerStore({ module, moduleName, store }) {
    const moduleIsRegistered =
        store._modules.root._children[moduleName] !== undefined
    const stateExists = store.state[moduleName]
    if (!moduleIsRegistered) {
        store.registerModule(moduleName, module, { preserveState: stateExists })
    }
}

export default ({ app }, inject) => {
    inject('registerStore', registerStore)
}