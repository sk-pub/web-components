// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                processNode(node);
            }
        }
    }
});

processChildNodes(document.getRootNode());

function processChildNodes(targetNode) {
    targetNode.querySelectorAll('*').forEach((node) => processNode(node));

    // Start observing the target node for configured mutations
    observer.observe(targetNode, { childList: true, subtree: true });
}

async function processNode(node) {
    if (node.tagName == null || !node.tagName.startsWith('X-')) {
        return;
    }

    const tagName = node.tagName.toLowerCase();

    const customElement = customElements.get(tagName);
    const tagExists = customElement != null;
    
    if (tagExists) {
        processChildNodes(node.shadowRoot);
        return;
    }

    customElements.whenDefined(tagName).then(_ => {
        processChildNodes(node.shadowRoot);
    });

    await loadWebComponent(tagName);
}

async function loadWebComponent(tagName) {
    let componentName = tagName.substring(2);

    if (componentName.startsWith('vue-')) {
        componentName = `vue-components/dist/${componentName}.mjs`;
    } else {
        componentName += '.js';
    }

    await import(`./components/${componentName}`);
}

