// 转换图片格式
  let nodes = u("figure");
  nodes.each((el) => {
    const alt = el.firstElementChild.alt;
    const value = el.firstElementChild.title;
    const src = el.firstElementChild.src;
    el.innerHTML = `<div id="${alt}" class="Display Figure Narrow"><div class="Body"><img class="WithFrame" src="${src}" ></div><span class="Caption"><span class="Label">${alt}</span><span class="CaptionText">${value}</span></span></div>`;
  })