import Ele from '../../elements';

const fileBox = Ele.admin.input.fileBox;
// console.log(fileBox);
// console.log(fileBox.self);
// console.log(fileBox.hidden);

if (fileBox.self !== null) {
    fileBox.hidden.addEventListener('change', () => {
        // console.log(fileBox.hidden.files);
        // console.log(fileBox.hidden.files[0].name);
        // console.log(fileBox.view.value);
        fileBox.view.value = fileBox.hidden.files[0].name;
    });
}
