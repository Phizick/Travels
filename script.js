import anime from "./animejs/lib/anime.es.js";

const slider = document.querySelector(".slider");
const nextBtn = slider.querySelector(".next");
const prevBtn = slider.querySelector(".prev");
const items = slider.querySelectorAll(".item");
const popupInfo = document.querySelector('.popup__info');
const popupInfoBtn = document.querySelector('.explore__btn');

function openPopup(item) {
    item.classList.add("popup_opened");
};

function closePopup(item) {
    item.classList.remove("popup_opened");
};

let h = false;

popupInfoBtn.addEventListener('click', () => {
    openPopup(popupInfo);
    if (h = true) {
        slideup.play();
        
    } else {
        slidedown.play();
        
    };
    console.log(h);
}
);


let slidedown = anime({
    targets: '.popup__container',
    translateY: ['-260','-1050px'],
    easing: 'easeOutCirc',
   duration: 1100,
    autoplay: false,
    h : true,

})

let slideup = anime({
    targets: '.popup__container',
    translateY: ['-1050px','-260px'],
    autoplay: false,
    easing: 'easeOutCirc',
  duration: 1100,
 
   
})




let current = 0;

items.forEach((item) => {
    const textWrapper = item.querySelector(".main__text");
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
});

function animate(current, next, callback) {
    const currentImgs = current.querySelectorAll(".img");
    const currentText = current.querySelectorAll(".letter");
    const nextImgs = next.querySelectorAll(".img");
    const nextText = next.querySelectorAll(".letter");

    const t = 400;
    const offset = "-=" + t * .4;
    const imgOffset = t * .8;

    const timeList = anime.timeline({
        easing: "easeInOutQuint",
        duration: t,
        complete: callback,
    });

    timeList
        .add({
            targets: currentText,
            translateY: [0, "-12px"],
            opacity: [1, 0],
            easing: "easeInCubic",
            duration: t,
            delay: (hole, i) => 10 * (i + 4),
        })
        .add(
            {
                targets: currentImgs[0],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "-40deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            offset
        )
        .add(
            {
                targets: currentImgs[1],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "40deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[2],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "-15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[3],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[4],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[5],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[6],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: currentImgs[7],
                translateY: -600,
                translateZ: 0,
                rotate: [0, "15deg"],
                opacity: [1, 0],
                easing: "easeInCubic",
            },
            "-=" + imgOffset
        )
        .add({
            targets: current,
            opacity: 0,
            visibility: "hidden",
            duration: 20,
            easing: "easeInCubic",
        })
        .add(
            {
                targets: next,
                opacity: 1,
                visibility: "visible",
                duration: 20,
            },
            offset
        )
        .add(
            {
                targets: nextImgs[0],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            offset
        )
        .add(
            {
                targets: nextImgs[1],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[2],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[3],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[4],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[5],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[6],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextImgs[7],
                translateY: [600, 0],
                translateZ: 0,
                rotate: ["-15deg", 0],
                opacity: [0, 1],
                easing: "easeOutCubic",
            },
            "-=" + imgOffset
        )
        .add(
            {
                targets: nextText,
                translateY: ["12px", 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeInCubic",
                duration: t,
                delay: (hole, i) => 10 * (i + 4),
            },
            offset
        );
};

let isPlaying = false;

function updateSlider(newIndex) {
    const currentItem = items[current];
    const newItem = items[newIndex];

    function callback() {
        currentItem.classList.remove("item_active");
        newItem.classList.add("item_active");
        current = newIndex;
        isPlaying = false;
    }

    animate(currentItem, newItem, callback);
};

function next() {
    if (isPlaying) return;
    isPlaying = true;
    const newIndex = current === items.length - 1 ? 0 : current + 1;
    updateSlider(newIndex);
};

function prev() {
    if (isPlaying) return;
    isPlaying = true;
    const newIndex = current === 0 ? items.length - 1 : current - 1;
    updateSlider(newIndex);
};

nextBtn.onclick = next;
prevBtn.onclick = prev;
