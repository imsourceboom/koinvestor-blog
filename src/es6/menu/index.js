import Ele from '../elements';

const draft = Ele.main.menu.draft;
const choice = Ele.main.menu.choice;
const arrow = Ele.main.menu.arrow;
const box = Ele.main.menu.box;
const items = Array.from(Ele.main.menu.items);

const menuTrigger = () => {
    choice.classList.toggle('on');
    arrow.classList.toggle('on');
    box.classList.toggle('on');
};

if (draft != null) {
    /*
        '프로젝트 선택'을 클릭하면 발생하는 이벤트
        메뉴가 아래로 나타나고 위로 사라지는 애니메이션
    */
    choice.addEventListener('click', menuTrigger);

    /*
        메뉴 리스트 아이템을 클릭하면 발생하는 이벤트
        메뉴가 위로 사라지는 애니메이션
    */
    // 최신 문법
    // items.map(c => {
    //     c.addEventListener('click', e => {
    //         menuTrigger();
    //     });
    // });

    // 구 문법
    // for (var i = 0; i < items.length; i++) {
    //     items[i].addEventListener('click', function() {
    //         menuTrigger();
    //     });
    // }
}
