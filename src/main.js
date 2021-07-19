
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


function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
