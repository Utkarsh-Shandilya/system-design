function handleIconClick(event, childContainer, icon) {
    event.preventDefault();
    event.stopPropagation();
    const isHidden = childContainer.style.display === 'none';
    childContainer.style.display = isHidden ? 'block' : 'none';
    icon.textContent = isHidden ? '\u25BC' : '\u25B6';
}

function createElement(type, styleProps = {}, attrProps = {}, events = {}) {
    const newElement = document.createElement(type);
    for (let attr in attrProps) newElement[attr] = attrProps[attr];
    for (let item in styleProps) newElement.style[item] = styleProps[item];
    for (let evt in events) newElement.addEventListener(evt, events[evt]);
    return newElement;
}

function createNode(elementDetails, parentElement) {
    const liElement = createElement('li', { margin: '5px 0' });
    const label = createElement('label', { cursor: 'pointer' });
    const checkboxElement = createElement('input', { marginRight: '8px' }, { type: 'checkbox' });
    let icon;
    if (Array.isArray(elementDetails.children)) {
        icon = createElement('span', { marginRight: '6px', display: 'inline-block', width: '12px' }, { textContent: '\u25BC' });
        label.appendChild(icon);
    }
    label.appendChild(checkboxElement);
    label.appendChild(document.createTextNode(elementDetails.value));
    liElement.appendChild(label);
    parentElement.appendChild(liElement);

    return { liElement, icon };
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

        icon.addEventListener('click', (e) => handleIconClick(e, childContainer, icon));
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