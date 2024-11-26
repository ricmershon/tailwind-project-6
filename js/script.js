// Tabs and panels function
const tabs = document.querySelectorAll('.tab');
const panels = document.querySelectorAll('.panel');

// Tabs menu event listner
tabs.forEach((tab) => tab.addEventListener('click', onTabClick));

function onTabClick(event) {

    // Deactivate all tabs
    tabs.forEach((tab) => {
        tab.children[0].classList.remove(
            'border-softRed',
            'border-b-4',
            'md:border-b-0'
        )
    });

    // Hide all panels
    panels.forEach((panel) => panel.classList.add('hidden'));

    // Activate new tab and panel based on the data-target attribute.
    event.target.classList.add('border-softRed', 'border-b-4');
    const targetPanelClass = event.target.getAttribute('data-target');
    document.getElementById('panels')
        .getElementsByClassName(targetPanelClass)[0]
        .classList.remove('hidden');
}

// 
const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Mobile menu event listner
menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg')
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg')
    }
})