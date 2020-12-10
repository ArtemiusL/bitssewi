const throwDomEl = (blockId, domString, isNeedClear = false) => {
  const template = document.createElement('template');
  const mainBlock = document.querySelector(`#${blockId}`);
  template.innerHTML = domString;

  console.log('isNeedClear', isNeedClear);

  if (isNeedClear) {
    mainBlock.innerHTML = ``;
  }

  const element = template.content.cloneNode(true);

  mainBlock.appendChild(element);
  return mainBlock;
};

export default throwDomEl;
