const showMore = document.querySelector(".show-more");
const productslength = document.querySelectorAll(".catalog__watch-li").length;
let items = 8;

showMore.addEventListener('click', () => {

    items += 8;
    const array = Array.from(document.querySelector('.catalog__watch').children);
    const vizItems = array.slice(0, items);

    vizItems.forEach(el => el.classList.add('is-vizible'));

    if (vizItems.length === productslength) {
        
        showMore.style.display = 'none';

    }

});