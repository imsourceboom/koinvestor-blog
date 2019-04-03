var clipboard = new Clipboard('.btn-copy', {
    text: function () {
        return document.querySelector('input[type=hidden]').value;
    }
});

clipboard.on('success', function (e) {
    alert("Copied!");
    e.clearSelection();
});

var inputCopied = document.querySelector('#input-url');
var copiedButton = document.querySelector('.btn-copy');

inputCopied.value = location.href;

//safari
if (navigator.vendor.indexOf("Apple") == 0 && /\sSafari\//.test(navigator.userAgent)) {
    copiedButton.addEventListener('click', function () {
        var msg = window.prompt("Copy this link", location.href);
    })
}