/* Extreme Honeymoons - myscripts.js
   JavaScript moved out of the <head> of the Project 6 Graphics page. */

/* Preload the rollover images so the swap is instant */
var PrintButton1 = new Image();
var PrintButton2 = new Image();
var logo1 = new Image();
var logo2 = new Image();

PrintButton1.src = "images/print1.png";
PrintButton2.src = "images/print2.png";
logo1.src = "images/logo.png";
logo2.src = "images/logo2.png";

/* Generic rollover: pass the image's id and the new source */
function rollOver(imgID, newSrc) {
	document.getElementById(imgID).src = newSrc;
}

var imgArray = new Array(
	'Image1Lg.jpg',
	'Image2Lg.jpg',
	'Image3Lg.jpg',
	'Image4Lg.jpg'
);

var titleArray = new Array(
	'Couple Hiking by a Stream',
	'Snowshoeing in the Backcountry',
	'Sunset Over the Water',
	'Mountain Biking the High Country'
);

var imgPath = "images/fullsize/";

function swapImage(imgID) {
	var theImage = document.getElementById('theImage');
	var textDiv = document.getElementById('bottomText');
	theImage.src = imgPath + imgArray[imgID];
	theImage.alt = titleArray[imgID];
	textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
	for (var i = 0; i < imgArray.length; i++) {
		var tmpImg = new Image();
		tmpImg.src = imgPath + imgArray[i];
	}
}

