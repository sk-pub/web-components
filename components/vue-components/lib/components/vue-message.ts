import { defineCustomElement } from 'vue'
import VueMessage from './VueMessage.ce.vue'

const VueMessageElement = defineCustomElement(VueMessage);

customElements.define('x-vue-message', VueMessageElement);
