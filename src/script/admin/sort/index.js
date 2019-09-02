import Ele from '../../elements';

const sortFilter = Ele.admin.sort.self;

const activeSwich = e => {
    const child = Array.from(e.currentTarget.children);
    child.map(item => {
        if (
            e.target === item ||
            e.target.parentElement === item ||
            e.target.parentElement.parentElement === item
        ) {
            item.classList.add('on');
        } else if (e.target !== e.currentTarget) {
            item.classList.remove('on');
        }
    });
};

if (sortFilter !== null) {
    sortFilter.addEventListener('click', activeSwich);
}
