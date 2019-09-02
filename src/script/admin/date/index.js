import flatpickr from 'flatpickr';
import Ele from '../../elements';

const adminDate = Ele.admin.input.date;

if (adminDate !== null) {
    flatpickr(adminDate, {});
}
