var savedCovers = [];
var currentCover;

var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");
var makeNewCoverButton = document.querySelector(".make-new-button");
var homeButton = document.querySelector(".home-button");
var saveMyCoverButton = document.querySelector(".save-cover-button");
var showRandomButton = document.querySelector(".random-cover-button");
var viewSavedButton = document.querySelector(".view-saved-button");
var makeMyCoverButton = document.querySelector(".create-new-book-button");
var homeView = document.querySelector(".home-view");
var formView = document.querySelector(".form-view");
var savedCoverView = document.querySelector(".saved-view");
var descriptor1 = document.querySelector("#descriptor1");
var descriptor2 = document.querySelector("#descriptor2");
var cover = document.querySelector("#cover");
var title = document.querySelector("#title");
var savedCoversGrid = document.querySelector(".saved-covers-section");


window.addEventListener("load", generateRandomCover);
showRandomButton.addEventListener("click", generateRandomCover)
makeNewCoverButton.addEventListener("click", pgLoadCreateCover);
homeButton.addEventListener("click", pgLoadHome);
saveMyCoverButton.addEventListener("click", saveCurrentCover);
viewSavedButton.addEventListener("click", pgLoadSavedCovers)
makeMyCoverButton.addEventListener("click", makeCustomCover);




function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover(coverImg, title, desc1, desc2){
  return new Cover(coverImg, title, desc1, desc2);
}


function random() {
  var cover = covers[getRandomIndex(covers)];
  var title = titles[getRandomIndex(titles)];
  var tagline1 = descriptors[getRandomIndex(descriptors)];
  var tagline2 = descriptors[getRandomIndex(descriptors)];
  return [cover, title, tagline1, tagline2];
}

function setHomeCover(cover) {
    coverImage.src = cover.cover;
    coverTitle.innerText = cover.title;
    tagLine1.innerText = cover.tagline1;
    tagLine2.innerText = cover.tagline2;
    currentCover = cover;
}

function generateRandomCover() {
  var randomInfo = random();
  var randomCover = createCover(randomInfo[0], randomInfo[1], randomInfo[2], randomInfo[3]);
  setHomeCover(randomCover);
}

function displaySavedCovers() {
    savedCoversGrid.innerHTML = "";
    for (var i = 0; i < savedCovers.length; i++) {
        savedCoversGrid.innerHTML += `
          <section class="mini-cover" id="${savedCovers[i].id}">
            <img class="cover-image" src="${savedCovers[i].cover}">
            <h2 class="cover-title">${savedCovers[i].title}</h2>
            <h3 class="tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
            <img class="price-tag" src="./assets/price.png">
            <img class="overlay" src="./assets/overlay.png">
          </section>`;
      }
    }

function pgLoadCreateCover() {
    homeView.classList.add('hidden');
    showRandomButton.classList.add('hidden');
    saveMyCoverButton.classList.add('hidden');
    savedCoverView.classList.add("hidden")
    formView.classList.remove('hidden');
    homeButton.classList.remove('hidden');
}

function pgLoadSavedCovers() {
  homeView.classList.add('hidden');
  showRandomButton.classList.add('hidden');
  saveMyCoverButton.classList.add('hidden');
  formView.classList.add('hidden')
  homeButton.classList.remove('hidden')
  savedCoverView.classList.remove('hidden');
  displaySavedCovers();
}

function pgLoadHome() {
  homeButton.classList.add('hidden');
  homeView.classList.remove('hidden');
  savedCoverView.classList.add('hidden');
  showRandomButton.classList.remove('hidden');
  saveMyCoverButton.classList.remove('hidden');
  formView.classList.add('hidden')
}

function saveInputData() {
  covers.push(cover.value);
  titles.push(title.value);
  descriptors.push(descriptor1.value);
  descriptors.push(descriptor2.value);
}

function makeCustomCover(i) {
  i.preventDefault();
    currentCover = createCover(cover.value, title.value, descriptor1.value, descriptor2.value);
  setHomeCover(currentCover);
  saveInputData();
  pgLoadHome();
}

function saveCurrentCover(){
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover);
  }
}
