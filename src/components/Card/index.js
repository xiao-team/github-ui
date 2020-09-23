import Card from './Card.vue'

Card.install = function (Vue) {
    Vue.component(Card.name, Card)
}

export default Card
