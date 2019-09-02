import Ele from '../../elements';

const adminList = Ele.admin.list.self;

if (adminList != null) {
    // 페이지 active Event
    const pageWrap = Ele.admin.list.footer.pageWrap;

    const eTarget = e => {
        const child = Array.from(e.currentTarget.children);
        child.map(e => {
            if (e == event.target && e.classList.contains('page')) {
                e.classList.add('active');
            } else {
                if (event.target.nodeName == 'LI') {
                    e.classList.remove('active');
                }
            }
        });
    };

    pageWrap.addEventListener('click', eTarget);

    // All Checked Event
    const allcheck = Ele.admin.list.head.allcheck;
    const bodyInputs = Ele.admin.list.body.inputs;

    allcheck.addEventListener('click', () => {
        bodyInputs.map(e => {
            e.checked = allcheck.checked;
        });
    });
}
