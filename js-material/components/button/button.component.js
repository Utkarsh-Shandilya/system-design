import { createElement } from "../../../utils/index";

function createConfig(buttonConfig = {}) {
    return {
        label: "Button",
        disabled: typeof disabled === "function" ? disabled() : disabled,
        ...buttonConfig
    }
}

function handleButtonClick() {
    console.log("clicked!!!");
}

function main() {
    const buttonConfig = createConfig();
    const buttonContainerDiv = document.getElementById("button-container");
    if (!buttonContainerDiv) {
        createElement();
    }
    createElement(
        "button",
        buttonContainerDiv,
        {
            textContent: buttonConfig.label,
            events: [{ eventType: 'click', callback: handleButtonClick }],
            attributes: { disabled: buttonConfig.disabled }
        }
    );
}

main();