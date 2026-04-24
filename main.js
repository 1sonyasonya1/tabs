const list = document.querySelector('#list');
const tabs = list.querySelectorAll('.tabs__item');

const obj = [
    { id: "t1", label: "Tab1" },
    { id: "t2", label: "Tab2", isDone: true },
    { id: "t3", label: "Tab3", notificationCount: 1 }
  ];

tabs[0]?.classList.add('active');
setNotification();

list.addEventListener('click', setActive);

function setActive(event) {
    const tab = event.target.closest('.tabs__item');
    if(!tab) return;
    if(tab.classList.contains('active')) return;
    tabs.forEach((t) => t.classList.remove('active'))
    tab.classList.add('active');
}

function setNotification() {
    tabs.forEach((tab) => {
        const tabData = obj.find((item) => item.id === tab.id);
        setDone(tab, tabData);
        setCount(tab, tabData);
    })
}

function setDone(tab, tabData) {
        if (tabData?.isDone) {
            tab.classList.add('done');
        }
}

function setCount(tab, tabData) {
        const count = tabData?.notificationCount;
        if(count > 9) {
            tab.classList.add('count');
            tab.dataset.count = '9+';
        } else if (count > 0) {
            tab.classList.add('count');
            tab.dataset.count = String(count);
        } else {
            delete tab.dataset.count;
        }
}