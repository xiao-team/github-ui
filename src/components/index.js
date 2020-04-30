import button from './button'
import ButtonGroup from './ButtonGroup'
import icon from './icon'
import input from './input'
import page from './page'

import '../assets/icons'

const components = {
    button,
    ButtonGroup,
    icon,
    input,
    page,
}

export default {
    install(Vue) {
        for (let key in components) {
            const component = components[key]
            if (component.name) Vue.component(component.name, component)
        }
    },
}
