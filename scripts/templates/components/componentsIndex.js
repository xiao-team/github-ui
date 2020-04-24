%%import_components%%

import '../assets/icons'

const components = %%components%%

export default {
    install(Vue) {
        for (let key in components) {
            const component = components[key]
            if (component.name) Vue.component(component.name, component)
        }
    },
}
