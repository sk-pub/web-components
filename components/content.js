class Content extends HTMLElement {
    _shadowRoot;
  
    constructor() {
        super();
  
        this._shadowRoot = this.attachShadow({mode: "closed"});
    }
  
    render() {
        const template = document.createElement('template');
        template.innerHTML = `
<x-section title="Section in content"></x-section>
        `;
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
        this.render();
    }
}
  
  globalThis.customElements.define('x-content', Content);
  