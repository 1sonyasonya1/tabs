const list = document.querySelector('#list');


const tabs = [
    { id: "t1", label: "Tab1" },
    { id: "t2", label: "Tab2", isDone: true },
    { id: "t3", label: "Tab3", notificationCount: 1 }
  ];

  let activeId = tabs[0].id; 

list.addEventListener('click', setActive);

function setActive(event) {
    const tabs = list.querySelectorAll('.tabs__item');
    const tab = event.target.closest('.tabs__item');
    if(!tab) return;
    if(tab.classList.contains('active')) {
        return
    }
    tabs.forEach((t) => t.classList.remove('active'))
    tab.classList.add('active');
}