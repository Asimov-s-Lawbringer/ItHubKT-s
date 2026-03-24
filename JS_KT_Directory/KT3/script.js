const items = document.querySelectorAll('li');
items.forEach(item => {
    item.onclick = function(event) {
        event.stopPropagation();
        const submenu = item.querySelector('ul');
        if (submenu) {
            submenu.classList.toggle('visible');
        }
    };
});
