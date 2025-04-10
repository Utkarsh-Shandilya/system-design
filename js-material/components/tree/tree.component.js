function createNode(elementDetails, parentElement = document.getElementById("container")) {
    const newElement = document.createElement("div");
    newElement.textContent = elementDetails.value;
    parentElement.appendChild(newElement);
    return newElement;
}

function createTreeStructure(elementObj) {
    const node = createNode(elementObj);
    if (elementObj.hasOwnProperty("children")) {
        for (let item of elementObj.children) {
            createTreeStructure(item);
        }
    }
}

function init(elementData) {
    if (!elementData) return;
    if (Array.isArray(elementData)) createTreeStructure(elementData?.[0]);
    else if (typeof elementData === 'object') createTreeStructure(elementData);
    else throw TypeError("Data should be an array or object!");
}

const treeData = { value: "first", children: [{ value: "second", children: [{ value: "third" }] }] };
init(treeData);