import Ele from '../elements';

// const root = Ele.main.root.self;
// const logoWrap = Ele.header.logoWrap;
// const searchBox = Ele.header.searchBox;
const header = Ele.header.self;
const searchIcon = Ele.header.searchIcon;
const searchText = Ele.header.searchText;
const searchClose = Ele.header.searchClose;

const menu = Ele.header.menu;
const box = Ele.header.menuBox;
const items = Array.from(box.children);

const menuToggle = () => {
    menu.classList.toggle('on');
    menu.children[1].classList.toggle('on');
    box.classList.toggle('on');
};

if (header !== null) {
    // logoWrap.classList.add('on');
    // searchBox.classList.add('on');
    searchIcon.addEventListener('click', () => {
        searchText.classList.toggle('on');
    });

    searchClose.addEventListener('click', () => {
        searchText.classList.toggle('on');
    });

    menu.addEventListener('click', menuToggle);

    for (var i = 0; i < items.length; i++) {
        items[i].addEventListener('click', menuToggle);
    }
}
