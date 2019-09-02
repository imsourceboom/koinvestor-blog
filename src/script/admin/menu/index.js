import Ele from '../../elements';
import { activeSwich } from '../../function';
// import * as Feature from '../../function';

const adminMenu = Ele.admin.menu.self;
const menuWrap = Ele.admin.menu.menuWrap;

if (adminMenu !== null) {
    menuWrap.addEventListener('click', activeSwich);
}
