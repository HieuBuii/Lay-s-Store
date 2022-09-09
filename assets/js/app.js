const btnMenu = document.querySelector(".header__btn-mobile");
const listMoblie = document.querySelector(".header__list");
const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const desc = document.querySelector(".testimonial__desc");
const nameAuthor = document.querySelector(".testimonial__name");
const ageAuthor = document.querySelector(".testimonial__age");
const image = document.querySelector(".testimonial__img-item");
let i = 0;

const comments = [
  {
    id: 1,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat.",
    img: "./assets/image/pp.png",
    name: "Annara Veirmont",
    age: "23 years of Age",
  },
  {
    id: 2,
    comment:
      "Customer testimonials are a beneficial type of social proof: they tell potential new customers about the successes and triumphs others have experienced when using your products or services. And because these are real people.",
    img: "./assets/image/pp2.png",
    name: "Tommy Xiaomi",
    age: "20 years of Age",
  },
  {
    id: 3,
    comment:
      "A testimonial is effectively a review from a client, letting other people know how your products or services benefitted them. Customer testimonials can take multiple forms, but the goal is always the same: to showcase how great your brand is. ",
    img: "./assets/image/pp3.png",
    name: "Tom Holand",
    age: "18 years of Age",
  },
];

btnMenu.addEventListener("click", showMenu);

function showMenu() {
  listMoblie.classList.toggle("is-active");
}

btnNext.addEventListener("click", function (e) {
  handleNext(comments);
});
btnPrev.addEventListener("click", function (e) {
  handlePrev(comments);
});

function handleNext(arr) {
  i++;
  if (i >= arr.length) i = 0;
  desc.textContent = arr[i].comment;
  nameAuthor.textContent = arr[i].name;
  ageAuthor.textContent = arr[i].age;
  image.src = arr[i].img;
}

function handlePrev(arr) {
  i--;
  if (i < 0) i = arr.length - 1;
  desc.textContent = arr[i].comment;
  nameAuthor.textContent = arr[i].name;
  ageAuthor.textContent = arr[i].age;
  image.src = arr[i].img;
}

setInterval(function () {
  handleNext(comments);
}, 4000);
