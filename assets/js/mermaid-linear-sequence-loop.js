(() => {
    let configs = { childList: true, subtree: true };
    let observer = new MutationObserver((mutationList) => {
        for (let mutation of mutationList) {
            for (let path of mutation.target.querySelectorAll('svg path[d]')) {
                let groups;
                if (groups = path.getAttribute('d').match(/(M \d+,\d+ )C(?: \d+,\d+){3}/)) {
                    path.setAttribute('d', groups[1] + 'h 80 v 30 h -80');
                }
            }
        }
    })
    for (let div of document.querySelectorAll('.mermaid-wrap')) {
        observer.observe(div, configs);
    }
})();
