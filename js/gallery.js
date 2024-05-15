// Activates the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {

	let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
	let mainImage = document.querySelector("#gallery-photo img");

	thumbnails.forEach(thumbnail => {
		thumbnail.addEventListener("click", function() {

		// Set clicked image as main image.
		let newImagesrc = thumbnail.dataset.largeVersion
		mainImage.setAttribute("src", newImagesrc)
		mainImage.setAttribute("alt", thumbnail.alt);

		// Change which image is current.
		document.querySelector(".current").classList.remove("current");
		thumbnail.parentElement.classList.add("current");

		// Update the info.
		let galleryInfo = document.querySelector("#gallery-info");
		let title = galleryInfo.querySelector(".title");
		let desciption = galleryInfo.querySelector(".description");

		title.innerHTML = thumbnail.dataset.title;
		desciption.innerHTML = thumbnail.dataset.desciption;
		});
	});
  }