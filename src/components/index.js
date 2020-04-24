import Button from './Button'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'
import Input from './Input'
import Page from './Page'

import '../assets/icons'

const components = {
    Button,
    ButtonGroup,
    Icon,
    Input,
    Page,
}

export default {
    install(Vue) {
        for (let key in components) {
            const component = components[key]
            if (component.name) Vue.component(component.name, component)
        }
    },
}
