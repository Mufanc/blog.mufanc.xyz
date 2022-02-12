function highlight_code(script, lines, color) {
    function gen(rattr, index) {
        return `
            [${rattr}] .code pre span:nth-child(${index*2-1}) {color: ${color};}\n
            [${rattr}] .code pre span:nth-child(${index*2-1}) * {color: ${color};}\n
        `
    }

    let figure = script.previousElementSibling;
    let rand = `tmp-${new Date().getTime()}${parseInt(Math.random()*1000)}`;
    figure.setAttribute(rand, "");
    let style = document.createElement('style');
    style.setAttribute('hexo-added-style', '');
    style.innerHTML = "";
    for (i of lines) {
        style.innerHTML += gen(rand, i);
    }
    document.head.appendChild(style);
}