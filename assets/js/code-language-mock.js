function mock(origin, target) {
    console.log(`mock code language "${origin}" to "${target}"`);
    let configs = { childList: true, subtree: true };
    let observer = new MutationObserver((mutationList) => {
        for (let mutation of mutationList) {
            mutation.target.querySelector('.code-lang').innerHTML = target;
        }
    });
    let codes = document.querySelectorAll(`figure.highlight.${origin}`);
    for (let block of codes) {
        observer.observe(block, configs);
    }
}