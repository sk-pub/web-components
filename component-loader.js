// Create an observer instance linked to the callback function
const observer = new MutationObserver((mutationList) => {
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            for (const node of mutation.addedNodes) {
                loadTagIfNeeded(node);
            }
        }
    }
});

ProcessCustomTagsForNode(document.getRootNode());

function ProcessCustomTagsForNode(targetNode) {
    targetNode.querySelectorAll('*').forEach((node) => loadTagIfNeeded(node));

    // Start observing the target node for configured mutations
    observer.observe(targetNode, { childList: true, subtree: true });
}

async function loadTagIfNeeded(node) {
    if (node.tagName == null || !node.tagName.startsWith('X-')) {
        return;
    }

    const tagName = node.tagName.toLowerCase();

    const customElement = customElements.get(tagName);
    const tagExists = customElement != null;
    
    if (tagExists) {
        ProcessCustomTagsForNode(node.shadowRoot);
        return;
    }

    customElements.whenDefined(tagName).then(_ => {
        ProcessCustomTagsForNode(node.shadowRoot);
    });

    const componentName = tagName.substring(2);
    await import(`./components/${componentName}`);
}
