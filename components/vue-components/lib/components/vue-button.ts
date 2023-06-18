import { defineCustomElement } from 'vue'
import VueComponent from './VueButton.ce.vue'

const VeuCustomElement = defineCustomElement(VueComponent);

customElements.define('x-vue-button', VeuCustomElement);
