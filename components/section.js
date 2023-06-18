class Section extends HTMLElement {
    _shadowRoot;

    static get observedAttributes() {
        return [ 'title' ];
    }
  
    constructor() {
        super();
  
        this._shadowRoot = this.attachShadow({mode: 'open'});
    }
  
    render() {
        const template = document.createElement('template');
        template.innerHTML = `
<style>h2 { color: rgb(var(--x-theme-primary)); }</style>
<div><h2>${this.title}</h2></div>
        `;
        this._shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        if (!this.title) {
            this.title = 'Default title';
        }

        this.render();
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (oldVal !== newVal) {
            switch(name) {
                case 'title':
                    this.title = newVal;
                    break;
            }
        }
    }

    get title() {
        return this.getAttribute('title');
    }

    set title(value) {
        this.setAttribute('title', value);
    }
  }
  
  globalThis.customElements.define('x-section', Section);
  