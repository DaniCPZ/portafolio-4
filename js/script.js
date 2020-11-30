window.addEventListener("load", function () {
  document.querySelector(".preloader").classList.add("opacity-0");
  setTimeout(function () {
    document.querySelector(".preloader").style.display = "none";
  }, 1000);
});

// Portfolio item filter
const filterContainer = document.querySelector(".portfolio-filter"),
  filterBtns = filterContainer.children,
  totalFilterBtn = filterBtns.length,
  portfolioItems = document.querySelector(".portfolio-items").children;
for (let i = 0; i < totalFilterBtn; i++) {
  filterBtns[i].addEventListener("click", function () {
    filterContainer.querySelector(".active").classList.remove("active");
    this.classList.add("active");
    const filterValue = this.getAttribute("data-filter");
    for (let item of portfolioItems) {
      if (filterValue === item.getAttribute("data-category")) {
        item.classList.add("show");
        item.classList.remove("hide");
      } else {
        item.classList.add("hide");
        item.classList.remove("show");
      }
      if (filterValue === "all") {
        item.classList.add("show");
        item.classList.remove("hide");
      }
    }
  });
}
// Portfafolio Light
const lightbox = document.querySelector(".lightbox"),
  lightboxClose = lightbox.querySelector(".lightbox-close"),
  lightboxImg = lightbox.querySelector(".lightbox-img"),
  lightboxText = lightbox.querySelector(".caption-text"),
  lightboxCounter = lightbox.querySelector(".caption-counter");

const portItems = document.querySelectorAll(".portfolio-item"),
  totalPortItem = portItems.length;
let itemIndex = 0;
for (let i = 0; i < totalPortItem; i++) {
  portItems[i].addEventListener("click", function () {
    itemIndex = i;
    changeItem();
    toggleLightbox();
  });
}
function nextItem() {
  if (itemIndex === totalPortItem - 1) {
    itemIndex = 0;
  } else {
    itemIndex++;
  }
  changeItem();
}
function prevItem() {
  if (itemIndex === 0) {
    itemIndex = totalPortItem - 1;
  } else {
    itemIndex--;
  }
  changeItem();
}
function changeItem() {
  imgSrc = portfolioItems[itemIndex]
    .querySelector(".portfolio-img img")
    .getAttribute("src");
  lightboxImg.src = imgSrc;
  lightboxText.innerHTML = portfolioItems[itemIndex].querySelector(
    "h4"
  ).innerHTML;
  lightboxCounter.innerHTML = itemIndex + 1 + " of " + totalPortItem;
}
function toggleLightbox() {
  lightbox.classList.toggle("open");
}
// close lightbox
lightbox.addEventListener("click", function (e) {
  if (e.target === lightboxClose || e.target === lightbox) {
    toggleLightbox();
  }
});

//Aside Navbar
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section");
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSectionClass();

    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSectionClass(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function removeBackSectionClass() {
  for (let k = 0; k < allSection.length; k++) {
    allSection[k].classList.remove("back-section");
  }
}
function addBackSectionClass(num) {
  allSection[num].classList.add("back-section");
}
function showSection(element) {
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.remove("active");
  }
  const href = element.getAttribute("href");
  document.querySelector(href).classList.add("active");
}
function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const href = element.getAttribute("href");

    if (href === navList[i].querySelector("a").getAttribute("href")) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSectionClass();
  addBackSectionClass(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", asideSectionTogglerBtn);
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < allSection.length; i++) {
    allSection[i].classList.toggle("open");
  }
}
