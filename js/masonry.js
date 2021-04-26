const element = document.querySelector(".grid");

const options = {
    itemSelector: ".grid-item",
    columnWidth: '.grid-sizer',
}

const masonry = new Masonry(element, options);
