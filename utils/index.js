export function createElement(elementType = "div", parentElement = document.body, elementProp = {}) {
    if (!elementType || typeof elementType !== "string") {
        throw new TypeError(`Invalid element type: ${elementType}`);
    }

    const element = document.createElement(elementType);
    Object.keys(elementProp || {}).forEach(key => {
        if (key.startsWith("on")) {
            addEventListenersToElement(element, key.slice(2).toLowerCase(), elementProp[key]);
        } else if (key in element) {
            element[key] = elementProp[key];
        } else {
            element.setAttribute(key, elementProp[key]);
        }
    });

    if (!(parentElement instanceof Element)) {
        console.warn(`Invalid parentElement provided. Appending to <body> by default.`);
        parentElement = document.body;
    }

    parentElement.appendChild(element);
    return element;
}

function addEventListenersToElement(element, eventType, callback) {
    if (typeof eventType !== "string") throw TypeError(`Event type ${eventType} must be a string!`);
    if (typeof callback !== "function") throw TypeError(`Provided event handler for "${eventType}" is not a function!`);
    element.addEventListener(eventType, callback);
}