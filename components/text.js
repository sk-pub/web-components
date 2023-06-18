class Text extends HTMLElement {
    _shadowRoot;
  
    constructor() {
        super();
  
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
  
    render() {
        const template = document.createElement('template');
        template.innerHTML = `
<span>Text</span>
        `;
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }
  
    connectedCallback() {
        this.render();
    }
}
  
  globalThis.customElements.define('x-text', Text);
  