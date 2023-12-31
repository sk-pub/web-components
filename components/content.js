class Content extends HTMLElement {
    _shadowRoot;
  
    constructor() {
        super();
  
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
  
    render() {
        const template = document.createElement('template');
        template.innerHTML = `
<x-section title="Section in content"></x-section>
<x-sub-section />
        `;
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
        this.render();
    }
}
  
  globalThis.customElements.define('x-content', Content);
  