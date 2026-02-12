export const loadElemToContainer = (container,element,id) => {
    const containerElem = document.querySelector(container);
    const newElem = document.createElement(element);
    newElem.setAttribute('id', id);
    containerElem.appendChild(newElem);
}
export const addTextToElem = (element, text) => {
    const elem = document.querySelector(element);
    elem.textContent = text;
}