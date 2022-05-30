// !===============
//? instagram : reza._.farhangian
//* github : rezafarhangian
// !===============



let $ = document;

// !==================
// ?       humberger menu
//! ==================

let btnMenu = $.querySelector(".menu-humberger");
let boxMenu = $.querySelector(".nav-menu");
let btnLine = $.querySelector(".menu-humberger__line");
let iconCloseMenu = $.querySelector(".nav-menu__close");
let menuMobileItem =$.querySelectorAll('.menu-mobile__link')

let inOpen = false;

function openAndCloseMenu() {
  if (inOpen) {
    boxMenu.style.left = "-32rem";
    btnLine.classList.remove("menu-humberger__line--open");
    inOpen = false;
  } else {
    boxMenu.style.left = "0";
    btnLine.classList.add("menu-humberger__line--open");
    inOpen = true;
    closeCart();
  }
}
btnMenu.addEventListener("click", openAndCloseMenu);
iconCloseMenu.addEventListener("click", openAndCloseMenu);

menuMobileItem.forEach(function(item){
    item.addEventListener('click',function(){
      boxMenu.style.left = "-32rem";
      btnLine.classList.remove("menu-humberger__line--open");
      inOpen = false;
    })
})


// ?=====================
//!              cart
//? ====================
let btnShowBasket = $.querySelector("#openBasket");
let boxCart = $.querySelector(".cart");
let iconCloseCart = $.querySelector(".cart__close");
let btnShowCartMobile = $.querySelector("#openCartMobile");
let shadowBody = $.querySelector(".shadow");

function openCart() {
  boxCart.style.left = "0";
  shadowBody.style.display = "block";
}

function closeCart() {
  boxCart.style.left = "-40rem";
  shadowBody.style.display = "none";
}

function openCartInMobile() {
  boxCart.style.left = "0";
  shadowBody.style.display = "block";
  boxMenu.style.left = "-40rem";
  btnLine.classList.remove("menu-humberger__line--open");
  inOpen = false;
}


shadowBody.addEventListener('click',function(){
  closeCart()
  closeRegisterWhitIcon()
})




btnShowBasket.addEventListener("click", openCart);
btnShowCartMobile.addEventListener("click", openCartInMobile);
iconCloseCart.addEventListener("click", closeCart);


//? ================
//!         login
// ?================
let btnOpenRegister = $.querySelector("#openregister");
let formRegister = $.querySelector(".register");
let iconCloseRegister = $.querySelector(".register__close");
let openRegisterInMobile = $.querySelector("#openRegisterMobile");
let input = $.querySelector(".register-form__input");
let btnSubmitRsgister = $.querySelector(".register__btn");

function openRegister() {
  formRegister.style.transform = "scale(1)";
  shadowBody.style.display = "block";
}

function closeRegisterWhitIcon() {
  formRegister.style.transform = "scale(0)";
  shadowBody.style.display = "none";
}

function openRegisterWhitMenuMobile() {
  formRegister.style.transform = "scale(1)";
  shadowBody.style.display = "block";
  openAndCloseMenu();
}

btnOpenRegister.addEventListener("click", openRegister);
iconCloseRegister.addEventListener("click", closeRegisterWhitIcon);
openRegisterInMobile.addEventListener("click", openRegisterWhitMenuMobile);

// ?===============
// !           Product
// ?===============
const foodItem = [
  {
    id: 1,
    Score: "امتیاز 3.4",
    title: "بال سوخاری",
    text: "۷عدد بال سوخاری،سس انار،یک عدد سس کچاپ تند و...",
    price: 58000,
    cover: "/images/food/بال-سوخاری.jpg",
    count: 1,
  },
  {
    id: 2,
    Score: "امتیاز 5.4",
    title: "ساندویچ قارچ برگر",
    text: "۱۶۰گرم برگر مخصوص پرپروک،سس مایونز،خیارشور و...",
    price: 28000,
    cover: "/images/food/ساندویچ-قارچ-برگر-پرپروک.jpg",
    count: 1,
  },
  {
    id: 3,
    Score: "امتیاز 3.7",
    title: "چیزبرگر مخصوص",
    text: "۱۶۰گرم برگر مخصوص،پنیرگدا،سس کچاپ و...",
    price: 63000,
    cover: "/images/food/چیز-برگر-مخصوص-پرپروک.jpg",
    count: 1,
  },
  {
    id: 4,
    Score: "امتیاز 3.4",
    title: "سیب زمینی",
    text: "یک پرس سیب زمینی سرخ شده",
    price: 52000,
    cover: "/images/food/سیب-زمینی.jpg",
    count: 1,
  },
  {
    id: 5,
    Score: "امتیاز 8.4",
    title: "پیتزا پنجره ای",
    text: "ژامبون گوشت،سوسیس،قارچ و...",
    price: 68000,
    cover: "/images/food/پیتزا-پنچره-ای.jpg",
    count: 1,
  },
  {
    id: 6,
    Score: "امتیاز 7.7",
    title: "قارچ سوخاری",
    text: "یک پرس قارچ سوخاری شده",
    price: 32000,
    cover: "/images/food/قارچ-سوخاری.jpg",
    count: 1,
  },

  {
    id: 7,
    Score: "امتیاز 3",
    title: "مرغ سوخاری",
    text: "۵تکه مرغ،سالاد کلم،نان بروتچن و...",
    price: 86000,
    cover: "/images/food/مرغ-سوخاری-5تکه-نرمال.jpg",
    count: 1,
  },
  {
    id: 8,
    Score: "امتیاز 5.9",
    title: "پیتزا اروستو",
    text: "رست بیف،سس خامه،زیتون و...",
    price: 45000,
    cover: "/images/food/پیتزا-آروستو-پینو.jpg",
    count: 1,
  },
  {
    id: 9,
    Score: "امتیاز 6.5",
    title: "ساندویچ چیگن برگر",
    text: "چیکن برگر،گوجه،خیارشور و...",
    price: 56000,
    cover: "/images/food/ساندویچ-چیکن-برگر-پرپروک.jpg",
    count: 1,
  },
  {
    id: 10,
    Score: "امتیاز 8",
    title: "پیتزا استیک",
    text: "گوشت استیک،زیتون سیاه،سس مارینرا و...",
    price: 51000,
    cover: "/images/food/پیتزا-استیک-سیسیلی.jpg",
    count: 1,
  },
  {
    id: 11,
    Score: "امتیاز 2.9",
    title: "ساندویچ چیزبرگر",
    text: "۱۳۰گرم برگر مخصوص،سیر،پیاز و...",
    price: 90000,
    cover: "/images/food/ساندویچ-چیز-برگر-پرپروک.jpg",
    count: 1,
  },
  {
    id: 12,
    Score: "امتیاز 4.1",
    title: "نان سیسلی",
    text: "گوشت چرخ کرده،قارچ،فلفل دلمه،سیر و...",
    price: 66000,
    cover: "/images/food/نان-سیر-سیسیلی.jpg",
    count: 1,
  },

  {
    id: 13,
    Score: "امتیاز 6.3",
    title: "پیتزا بیستکا",
    text: "استیک،فلفل دلمه،سس قارچ و...",
    price: 112000,
    cover: "/images/food/پیتزا-بیستکا.jpg",
    count: 1,
  },
  {
    id: 14,
    Score: "امتیاز 3.4",
    title: "پیتزا سبزیجات",
    text: "ذرت،قارچ،زیتون و...",
    price: 48000,
    cover: "/images/food/پیتزا-سبزیجات.jpg",
    count: 1,
  },
  {
    id: 15,
    Score: "امتیاز 2.8",
    title: "پیتزا سیسلی",
    text: "مخلوط ۵نوع پنیر،ریحان تازه،سیر و..",
    price: 79000,
    cover: "/images/food/پیتزا-مارگاریتا-سیسیلی.jpg",
    count: 1,
  },
  {
    id: 16,
    Score: "امتیاز 1.4",
    title: "پیتزا مارگاریتا",
    text: "گوشت استیک،زیتون سیاه،پنیرموزارلا و...",
    price: 58000,
    cover: "/images/food/پیتزا-مارگاریتا.jpg",
    count: 1,
  },
  {
    id: 17,
    Score: "امتیاز 4.6",
    title: "پیتزا چیگن باربیکیو",
    text: "مرغ باربیکو،پنیرمخصوص پرپروک و...",
    price: 99000,
    cover: "/images/food/پیتزا-چیکن-باربیکیو.jpg",
    count: 1,
  },
  {
    id: 18,
    Score: "امتیاز 2.5",
    title: "پیتزا ژامبون",
    text: "ژامبون استیک ۹۰٪گوشت،سس قارچ و...",
    price: 82000,
    cover: "/images/food/پیتزا-ژامبون-استیک-بافلفل.jpg",
    count: 1,
  },

  {
    id: 19,
    Score: "امتیاز 9",
    title: "پیتزا کارزانا",
    text: "رست بیف،بادمجان باطعم سیر و...",
    price: 49000,
    cover: "/images/food/پیتزا-کارزانا.jpg",
    count: 1,
  },
  {
    id: 20,
    Score: "امتیاز 6",
    title: "چیپس و پنیر",
    text: "چیپس تهیه شده از خمیر پرپروک",
    price: 30000,
    cover: "/images/food/چیپس-و-پنیر.jpg",
    count: 1,
  },
];

// !===================
// ?  create pagination
// !===================
let foodContainer = $.querySelector(".Products-box");
let paginationContainer = $.querySelector(".Products__paginate");

let currentPage = 1;
let rowsCount = 6;

function createBoxFood(allFood, foodContain, rowsCount, currentPage) {
  foodContain.innerHTML = "";

  let endIndex = rowsCount * currentPage;
  let startIndex = endIndex - rowsCount;

  let paginatedFoods = allFood.slice(startIndex, endIndex);
  paginatedFoods.forEach((food) => {
    foodContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="Product">
       <div class="Product__top">
         <img class="Product__img" src="${food.cover}" alt="">
       </div>

         <div class="Product__bottom">
           <div class="product__Scores">
           <span class="product__Score">${food.Score}</span>
             <svg class="product__star" xmlns="http://www.w3.org/2000/svg" width="20.912" height="19.939" viewBox="0 0 20.912 19.939">
               <path id="Path_4240" data-name="Path 4240" d="M252.662-154.157v.286a6.55,6.55,0,0,1-.481.515q-2.363,2.058-4.736,4.1a.254.254,0,0,0-.1.294c.286,1.2.564,2.408.844,3.612q.328,1.41.655,2.819a.525.525,0,0,1-.494.7.916.916,0,0,1-.413-.145q-2.772-1.663-5.536-3.339a.311.311,0,0,0-.379-.009c-1.859,1.13-3.724,2.249-5.586,3.375a.562.562,0,0,1-.683.017.559.559,0,0,1-.181-.641c.494-2.11.981-4.222,1.479-6.331a.342.342,0,0,0-.132-.4q-2.4-2.064-4.783-4.142a4.643,4.643,0,0,1-.39-.433v-.286a.632.632,0,0,1,.54-.4q1.271-.1,2.542-.212c1.349-.116,2.7-.237,4.046-.348a.254.254,0,0,0,.248-.185c.4-.953.8-1.9,1.2-2.855q.674-1.6,1.349-3.192a.547.547,0,0,1,.609-.4.587.587,0,0,1,.455.418q1.265,3.006,2.533,6.01a.283.283,0,0,0,.277.207c.468.029.936.073,1.4.114,1.674.145,3.347.3,5.022.43A.716.716,0,0,1,252.662-154.157Z" transform="translate(-231.75 161.758)" fill="#fa0"/>
             </svg>
             </div>
             <h3 class="Product__title">${food.title}</h3>
               <p class="Product__text">${food.text}</p>
               <div class="Product__price">
                 <span class="Product__price-text">${food.price} تومان</span>
                 <a class="product__purchase" href="javascrip:void(0)" onclick="addProductTocart(${food.id})">سفارش</a>
               </div>
         </div>
     </div>`
    );
  });
}

function setupPagination(allFood, paginationCont, rowsCount) {
  paginationCont.innerHTML = "";

  let pageCount = Math.ceil(allFood.length / rowsCount);

  for (let i = 1; i < pageCount + 1; i++) {
    let bbb = createPaginationBtn(i, allFood);
    paginationContainer.appendChild(bbb);
  }
}

function createPaginationBtn(page, allfoodsArray) {
  let button = $.createElement("button");
  button.innerHTML = page;
  button.className = "pagi";

  if (page === currentPage) {
    button.classList.add("pagi--active");
  }

  button.addEventListener("click", function () {
    currentPage = page;
    createBoxFood(allfoodsArray, foodContainer, rowsCount, currentPage);

    let prevBtn = $.querySelector("button.pagi--active");
    prevBtn.classList.remove("pagi--active");

    button.classList.add("pagi--active");
  });

  return button;
}

createBoxFood(foodItem, foodContainer, rowsCount, currentPage);
setupPagination(foodItem, paginationContainer, rowsCount);

// !================
// ?    add foods to cart
// !================
let foodBasket = $.querySelector(".cart__box");
let showPrice = $.querySelector(".cart-payment__price");

let foodsBasketArray = [];

//!Food validation in the shopping cart
function addProductTocart(foodId) {
  let getPropertyFood = foodItem.find(function (food) {
    return food.id === foodId;
  });

  let someBasket = foodsBasketArray.some(function (cart) {
    return cart.id === getPropertyFood.id;
  });

  if (someBasket) {
    foodsBasketArray.forEach(function (food) {
      if (food.id === foodId) {
        addnumberFoods(foodId);
      }
      basketProductsGenerator(foodsBasketArray);
      showAllPriceProduct(foodsBasketArray);
    });
  } else {
    foodsBasketArray.push(getPropertyFood);
    basketProductsGenerator(foodsBasketArray);
    showAllPriceProduct(foodsBasketArray);
    setLocalStorage(foodsBasketArray);
  }
  showAlert(foodId);
}

function basketProductsGenerator(product) {
  foodBasket.innerHTML = "";
  product.forEach(function (food) {
    foodBasket.insertAdjacentHTML(
      "beforeend",
      `<div class="product-cart">
     <div class="product-cart__wrapper-one">
       <img class="product-cart__img" src="${food.cover}" alt="">
     </div>
     <div class="product-cart__wrapper-two">
       <h4 class="product-cart__title">${food.title}</h4>
     </div>
     <div class="product-cart__wrapper-three">
       <span class="product-cart__price">${food.price}</span>
       <span>تومان</span>
     </div>
       <div class="product-cart__wrapper-four">
         <button class="product-cart__minus" onclick="minusNumberFoods(${food.id})">-</button>
         <span class="product-cart__number" >${food.count}</span>
         <button class="product-cart__plus" onclick="addnumberFoods(${food.id})">+</button>
       </div>
          <div class="product-cart__wrapper-five">
            <svg onclick="removeProductAtcart(${food.id})" class="h-8 w-8 text-red-500 product-cart__icon"  fill="none" viewBox="0 0 24 24" stroke="#b63b3b">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
            </svg>                                                          
          </div>
   </div>`
    );
  });
}


// !==============================
// ?Notification when adding foods to the cart
// !==============================
let alertwWrapper = $.querySelector(".Notification");

function showAlert(foodId) {
  foodItem.find(function (food) {
    if (food.id === foodId) {
      alertwWrapper.insertAdjacentHTML(
        "beforeend",
        ` <div class="alert">
      <div class="alert__wrapper">
        <span class="alert__text"><span class="alert__name">${food.title}</span> به سبد خرید اضافه شد</span>
        <span class="alert-remove">
          <svg class="h-4 w-4 text-black alert__remove-icon"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="#409240" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <line x1="18" y1="6" x2="6" y2="18" />  <line x1="6" y1="6" x2="18" y2="18" /></svg>
        </span>
      </div>
      <span class="alert__time"></span>
    </div>`
      );
      removeAlert();
    }
  });
}

function notification() {
  

  document.querySelector('.alert').style.right = "0";
}

function removeAlert() {
  setTimeout(function () {

    $.querySelector(".alert").remove();

  }, 3000);
}


// !=================
// ?localstorage
// !=================
function setLocalStorage(basketFood) {
  localStorage.setItem("foods", JSON.stringify(basketFood));
}

function getLocalStorage() {
  let localStorageFood = JSON.parse(localStorage.getItem("foods"));

  if (localStorageFood) {
    foodsBasketArray = localStorageFood;
  } else {
    foodsBasketArray = [];
  }
  basketProductsGenerator(foodsBasketArray);
}

window.addEventListener("load", getLocalStorage);

// remove food at cart
function removeProductAtcart(foodId) {
  {
    let findIndexFoods = foodsBasketArray.findIndex(function (food) {
      return food.id === foodId;
    });
    foodsBasketArray.splice(findIndexFoods, 1);
    basketProductsGenerator(foodsBasketArray);
    showAllPriceProduct(foodsBasketArray);
    setLocalStorage(foodsBasketArray);
  }
}

//  show all price

function showAllPriceProduct() {
  let total = 0;
  foodsBasketArray.forEach(function (pri) {
    total += pri.price * pri.count;
  });
  showPrice.innerHTML = total;
}
window.addEventListener("load", showAllPriceProduct);

// Add as many foods whit btn
function addnumberFoods(foodId) {
  foodsBasketArray.forEach(function (product) {
    if (product.id === foodId) {
      product.count++;
    }
    setLocalStorage(foodsBasketArray);
    showAllPriceProduct(foodsBasketArray);
    basketProductsGenerator(foodsBasketArray);
  });
}
window.addEventListener("load", addnumberFoods);

// minus as many foods whit btn
function minusNumberFoods(foodId) {
  foodsBasketArray.forEach(function (product) {
    if (product.id === foodId && product.count > 1) {
      product.count--;
    }
    setLocalStorage(foodsBasketArray);
    showAllPriceProduct(foodsBasketArray);
    basketProductsGenerator(foodsBasketArray);
  });
}
window.addEventListener("load", minusNumberFoods);




// !======================
//?         Site discounts timer
// !======================

let countDownDate = new Date(2022, 4, 22, 4, 25, 22);

let discountTime = setInterval(function () {
  let dateTimeNow = new Date().getTime();
  let distace = countDownDate - dateTimeNow;

  if (distace > 0) {
    let dayTime = 1000 * 60 * 60 * 24;
    let hourTime = 1000 * 60 * 60;
    let minuteTime = 1000 * 60;

    let days = Math.floor(distace / dayTime);
    let hours = Math.floor((distace % dayTime) / hourTime);
    let minutes = Math.floor((distace % hourTime) / minuteTime);
    let seconds = Math.floor((distace % minuteTime) / 1000);

    $.querySelector("#day").innerHTML = days < 10 ? "0" + days : days;
    $.querySelector("#hour").innerHTML = hours < 10 ? "0" + hours : hours;
    $.querySelector("#minute").innerHTML =
      minutes < 10 ? "0" + minutes : minutes;
    $.querySelector("#second").innerHTML =
      seconds < 10 ? "0" + seconds : seconds;
  } else {
    clearInterval(discountTime);
  }
});

// !=================
// ?    slider for comments
// !=================
let boxImage = $.querySelector(".Comment__large");
let userName = $.querySelector(".Comment__Name");
let userJob = $.querySelector(".Comment__job");
let userComment = $.querySelector(".Comment__text");
let dots = $.querySelectorAll(".Comment__dot");

let allComments = [
  {
    title: "مستر تیستر",
    cover: "/images/chef3.jpg",
    job: "کارافرین برتر ملی",
    comment:
      " برگرهاشون حرف نداشت و خیلی خیلی خوشمزه بود. پیتزاها هم خوشمزه بود و منو یاد پیتزاهایی که تو انگلیس می خوردم انداخت. منم اولش این سبک رو خیلی دوست نداشتم ولی الان خیلی دوست دارم و به نظرم بینظیر بود",
  },
  {
    title: "میلاد کلانتری",
    cover: "/images/chef2.jpg",
    job: "اینفلوئنسر",
    comment:
      "همیشه زمزمه هایی از برگرلند میشنیدم گفتم یه سربزنم ببینم کیفیتش چطوره،راسیتش اصلا انتظار نداشتم واقعا از این همه کیفیت و طعم بینظیر شکه شدم خلاصه هرچی بگم بازم کمه من که مشتری دائمی  شدم",
  },
  {
    title: "بابک امیری",
    cover: "/images/chef1.jpeg",
    job: "سرآشپز بین المللی",
    comment:
      "برگرلند یکی از تاپ ترین فست فودی هایی بود که تاحالا رفتم،من که همیشه عاشق پیتزام،اول کار پیتزای کارزانا رو تست کردم وای نگم براتون طعم بینظیری داشت من که عاشقش شدم،به شماهام توصیه میکنم حتما یه سر به برگرلند بزنید",
  },
];

function sliderImages(img) {
  boxImage.style.backgroundImage = "url(" + img.cover + ")";
  userName.innerHTML = img.title;
  userJob.innerHTML = img.job;
  userComment.innerHTML = img.comment;
}

function removeClassDots() {
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("Comment__dot--active");
  }
}

let userIndex = 0;

function nextImage() {
  userIndex++;
  if (userIndex > allComments.length - 1) {
    userIndex = 0;
  }
  sliderImages(allComments[userIndex]);
  removeClassDots();
  dots[userIndex].classList.add("Comment__dot--active");
}


function clickToDot(n) {
  userIndex = n;
  sliderImages(allComments[userIndex]);
  removeClassDots();
  dots[userIndex].classList.add("Comment__dot--active");
}

function currentSlide(n) {
  clickToDot(n);
}



setInterval(nextImage, 3000);


