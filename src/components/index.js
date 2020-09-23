import button from './button'
import ButtonGroup from './ButtonGroup'
import Card from './Card'
import icon from './icon'
import input from './input'
import page from './page'
import Select from './Select'

import '../assets/icons'

const components = {
    button,
    ButtonGroup,
    Card,
    icon,
    input,
    page,
    Select,
}

export default {
    install(Vue) {
        for (let key in components) {
            const component = components[key]
            if (component.name) Vue.component(component.name, component)
        }
    },
}
