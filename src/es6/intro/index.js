import Ele from '../elements';

const Intro = Ele.intro.self;
const about = Ele.main.root.about;
const logoWrap = Ele.header.logoWrap;
// const searchBox = Ele.header.searchBox;

if (Intro != null) {
    if (!Intro.classList.contains('off')) {
        window.addEventListener('scroll', () => {
            Intro.classList.add('off');
            about.classList.add('on');
            logoWrap.classList.add('on');
            // searchIcon.classList.add('on');
        });
    }
}