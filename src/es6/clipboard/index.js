import Clipboard from 'clipboard';
import {
    copy
} from '../elements'



const input = copy.inputEle;
const button = copy.buttonEle;

if (input !== null) {
    input.value = location.href;
}

var clipboard = new Clipboard('.btn-copy', {
    text: function () {
        return input.value;
    }
});

clipboard.on('success', function (e) {
    // alert("Copied!");
    e.clearSelection();
});


//safari
if (navigator.vendor.indexOf("Apple") == 0 && /\sSafari\//.test(navigator.userAgent)) {
    button.addEventListener('click', function () {
        // var msg = window.prompt("Copy this link", location.href);
    })
}