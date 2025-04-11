function createElement(type, styleProps = {}, attrProps = {}, events = {}) {
    // Add create element function def
}

function createNode(elementDetails, parentElement) {
    // Add create node function def
}

function createTreeStructure(elementObj, parentElement = document.getElementById("container")) {
    const list = createElement('ul', { listStyle: 'none', paddingLeft: '20px' },);
    parentElement.appendChild(list);

    const { liElement, icon } = createNode(elementObj, list);

    if (Array.isArray(elementObj.children)) {
        const childContainer = createElement('ul', { listStyle: 'none', paddingLeft: '20px' });
        liElement.appendChild(childContainer);

        elementObj.children.forEach((child) => {
            createTreeStructure(child, childContainer);
        });

        // Add event handler
    }
}

function init(elementData) {
    if (!elementData) return;
    if (Array.isArray(elementData)) {
        for (const item of elementData) createTreeStructure(item);
    }
    else if (typeof elementData === 'object') createTreeStructure(elementData);
    else throw TypeError("Data should be an array or object!");
}

const treeData = {
    value: "first",
    children: [
        {
            value: "second",
            children: [
                { value: "third" },
                { value: "third sibling" }
            ]
        },
        {
            value: "another second"
        }
    ]
};

init(treeData);