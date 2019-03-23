import Ele from '../elements';
// import imagesLoaded from 'imagesloaded';

// import Masonry from 'masonry-layout';

// const grid = Ele.main.root.grid;
// let msnry;

// if (root != null || project != null) {
//     imagesLoaded(grid, () => {
//         msnry = new Masonry(grid, {
//             itemSelector: '.grid-item',
//             columnWidth: '.grid-sizer',
//             percentPosition: true,
//             gutter: '.gutter-sizer'
//         });
//     });
// }

const project = Ele.main.project.self;

var grid = document.getElementsByClassName('grid')[0];
var allItems = document.getElementsByClassName('grid-item');

// function resizeGridItem(item) {
//     var rowHeight = parseInt(
//         window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')
//     );
//     var rowGap = parseInt(
//         window.getComputedStyle(grid).getPropertyValue('grid-row-gap')
//     );
//     var rowSpan = Math.ceil(
//         (item.querySelector('.content').getBoundingClientRect().height +
//             rowGap) /
//             (rowHeight + rowGap)
//     );
//     item.style.gridRowEnd = 'span ' + rowSpan;
// }

// function resizeAllGridItems() {
//     // allItems = document.getElementsByClassName('item');
//     for (var x = 0; x < allItems.length; x++) {
//         resizeGridItem(allItems[x]);
//     }
// }

// function resizeInstance(instance) {
//     let item;
//     item = instance.elements[0];
//     resizeGridItem(item);
// }

// window.onload = resizeAllGridItems();
// window.addEventListener('resize', resizeAllGridItems);

// for (var x = 0; x < allItems.length; x++) {
//     imagesLoaded(allItems[x], resizeInstance);
// }

if (project != null) {
    window.onscroll = function(ev) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            var gtem = document.createElement('div');
            gtem.setAttribute('class', 'grid-item');
            gtem.innerHTML = `
                                <div class="content">
                                    <img class="photothumb" src="http://placehold.it/536x385">
                                    <div class="desc">
                                        <p class="title">
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                        </p>
                                        <div class="summary">
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                            무한 스크롤로 인해 나타나는 아이템들 입니다.
                                        </div>
                                        <div class="who">
                                            <img src="/static/svg/project/ambrosus.svg">
                                            <span class="firm">Paypie</span>
                                            <span class="author">[작성자이름]</span>
                                        </div>
                                    </div>
                                </div>
                            `;

            grid.appendChild(gtem);

            // function resizeGridItem(item) {
            //     var rowHeight = parseInt(
            //         window
            //             .getComputedStyle(grid)
            //             .getPropertyValue('grid-auto-rows')
            //     );
            //     var rowGap = parseInt(
            //         window
            //             .getComputedStyle(grid)
            //             .getPropertyValue('grid-row-gap')
            //     );
            //     var rowSpan = Math.ceil(
            //         (item.querySelector('.content').getBoundingClientRect()
            //             .height +
            //             rowGap) /
            //             (rowHeight + rowGap)
            //     );
            //     item.style.gridRowEnd = 'span ' + rowSpan;
            // }

            // function resizeAllGridItems() {
            //     // allItems = document.getElementsByClassName('item');
            //     for (var x = 0; x < allItems.length; x++) {
            //         resizeGridItem(allItems[x]);
            //     }
            // }

            // function resizeInstance(instance) {
            //     let item;
            //     item = instance.elements[0];
            //     resizeGridItem(item);
            // }

            // window.onload = resizeAllGridItems();
            // window.addEventListener('resize', resizeAllGridItems);

            // for (var x = 0; x < allItems.length; x++) {
            //     imagesLoaded(allItems[x], resizeInstance);
            // }
        }
    };
}
