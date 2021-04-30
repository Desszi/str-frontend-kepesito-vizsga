function changeOuterLinks() {
    const elements = document.querySelectorAll('nav#link-list a');

    elements.forEach(item => {
        if (item.innerHTML.includes('outer-link')) {
            item.target = '_blank';
            item.innerHTML = `<strong>${item.innerHTML}</strong>`;
        }
    })

    document.querySelectorAll("nav#link-list").forEach((item) => {
        item.style.display = "flex";
        item.style.flexDirection = "column";
        item.style.width = "30%";
        item.style.margin = "0px auto";
        item.style.border = "1px solid blue";
        item.style.padding = "16px";
    })
}

changeOuterLinks();
export { changeOuterLinks };