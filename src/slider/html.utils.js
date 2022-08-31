export const getElementWidth = (element) => element.offsetWidth;
export const getElementLeftPositionOnScreen = (element) => element.getBoundingClientRect().left;
export const getElementRightPositionOnScreen = (element) => getElementLeftPositionOnScreen(element) + getElementWidth(element);
