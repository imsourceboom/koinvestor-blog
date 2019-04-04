const doc = document;
const ele = {
    body: doc.querySelector('body'),
    intro: {
        self: doc.querySelector('.intro')
    },
    header: {
        self: doc.querySelector('header'),
        logoWrap: doc.querySelector('.logo-wrap'),
        searchBox: doc.querySelector('.search-box'),
        searchText: doc.querySelector('.search-txt'),
        searchIcon: doc.querySelector('.search-icon'),
        searchClose: doc.querySelector('.search-close'),
        // searchText: doc.querySelector('.search-box .txt'),
        // searchMobile: doc.querySelector('.search-for--mobile'),
        menu: doc.querySelector('body header .menu'),
        menuBox: doc.querySelector('body header .menu-box')
    },
    main: {
        self: doc.querySelector('main'),
        // menu: {
        //     draft: doc.querySelector('.draft'),
        //     choice: doc.querySelector('.menu--mobile'),
        //     arrow: doc.querySelector('.menu--mobile img'),
        //     box: doc.querySelector('.menu--mobile-box'),
        //     items: doc.querySelectorAll('.menu--mobile-box .items')
        // },
        root: {
            self: doc.querySelector('.root'),
            about: doc.querySelector('.about'),
            aboutBox: doc.querySelector('.about .box'),
            contents: doc.querySelector('.contents')
            // grid: doc.querySelector('.contents .grid'),
        },
        project: {
            self: doc.querySelector('main > .project')
        },
        detail: {
            self: doc.querySelector('.detail'),
            container: doc.querySelector('.detail .container'),
            image: Array.from(doc.querySelectorAll('.detail .container img')),
            iframe: Array.from(doc.querySelectorAll('.detail .container iframe')),
            alert: doc.querySelector('.detail .alert'),
            share: doc.querySelector('.detail .share')
        }
    },
    admin: {
        menu: {
            self: doc.querySelector('.admin nav.admin--menu'),
            menuWrap: doc.querySelector('.admin nav.admin--menu ul'),
            // menuChild: Array.from(doc.querySelectorAll('.admin nav.admin--menu ul li'))
            menuChild: Array.from(doc.querySelectorAll('.admin nav.admin--menu ul li'))
        },
        sort: {
            self: doc.querySelector('ul.sort')
        },
        list: {
            self: doc.querySelector('.admin .admin--contents .list'),
            head: {
                allcheck: doc.querySelector('.admin .admin--contents .list .head #allcheck')
            },
            body: {
                inputs: Array.from(
                    doc.querySelectorAll('.admin .admin--contents .list .body input')
                )
            },
            footer: {
                pageWrap: doc.querySelector('.admin .admin--contents .list .footer ul')
            }
        },
        input: {
            date: doc.querySelector('.admin .admin--contents form input.date'),
            fileBox: {
                self: doc.querySelector('.admin .admin--contents form .filebox'),
                view: doc.querySelector('.admin .admin--contents form .filebox .file-view'),
                hidden: doc.querySelector('.admin .admin--contents form .filebox .file-hidden')
            }
        }
    }
};

export const copy = {
    inputEle: document.querySelector('#input-url'),
    buttonEle: document.querySelector('.btn-copy')
}

console.log('WebPack On!!');

export default ele;