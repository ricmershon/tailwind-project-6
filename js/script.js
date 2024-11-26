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