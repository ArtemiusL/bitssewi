const throwDomEl = (blockId, domString) => {
  const template = document.createElement('template');
  const mainBlock = document.querySelector(`#${blockId}`);
  template.innerHTML = domString;

  const element = template.content.cloneNode(true);

  mainBlock.appendChild(element);
  return mainBlock;
};

export default throwDomEl;
