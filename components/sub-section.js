class SubSection extends HTMLElement {
    _shadowRoot;
  
    constructor() {
        super();
  
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
  
    render() {
        const template = document.createElement('template');
        template.innerHTML = `
<x-section title="Sub-section"></x-section>
<button>Add Text</button>
        `;
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._shadowRoot.querySelector('button').addEventListener('click', this.addText.bind(this));
    }
  
    connectedCallback() {
        this.render();
    }

    addText() {
        const text = document.createElement('x-text');
        this._shadowRoot.appendChild(text);
    }
}
  
  globalThis.customElements.define('x-sub-section', SubSection);
  