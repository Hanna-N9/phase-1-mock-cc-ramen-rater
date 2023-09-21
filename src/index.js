addEventListener("DOMContentLoaded", () => {
  //////Global variables
  const rameURL = "http://localhost:3000/ramens";
  const divRamen = document.querySelector("div#ramen-menu");
  const imgRamen = document.querySelector("img.detail-image");
  const ramenName = document.querySelector("h2.name");
  const ramenRestaurant = document.querySelector("h3.restaurant");
  const ramenForm = document.querySelector("form#new-ramen");

  /////Helpers

  /*2. Click on an image from the #ramen-menu div and see all the info about that ramen displayed inside the #ramen-detail div and where it says insert comment here and insert rating here.
   */
  const displayRamenImg = (ramen) => {
    imgRamen.src = ramen.image;
    imgRamen.alt = ramen.name;
    ramenName.textContent = ramen.name;
    ramenRestaurant.textContent = ramen.restaurant;
  };

  /*1. See all ramen images in the div with the id of ramen-menu. When the page loads, request the data from the server to get all the ramen objects. Then, display the image for each of the ramen using an img tag inside the #ramen-menu div.
   */
  const appendRamenImg = (ramenObj) => {
    const img = document.createElement("img");
    img.src = ramenObj.image;
    img.textContent = ramenObj.name;
    img.addEventListener("click", () => displayRamenImg(ramenObj)); // Attach the listener deliverable 2
    divRamen.appendChild(img);
  };

  const getData = () => {
    fetch(rameURL)
      .then((res) => res.json())
      .then((ramenArray) => ramenArray.forEach(appendRamenImg))
      .catch((err) => alert(err));
  };
  getData();

  /*3. Create a new ramen after submitting the new-ramen form. The new ramen should be added to the #ramen-menu div. The new ramen does not need to persist; in other words, if you refresh the page, it's okay that the new ramen is no longer on the page.
   */
  //Be aware that the data from json file is object hence why, the variables are in object
  const addRamen = (e) => {
    e.preventDefault();
    const inputName = e.target.name.value;
    const inputRestaurant = e.target.restaurant.value;
    const inputImage = e.target.image.value;
    const inputRating = parseInt(e.target.rating.value);
    const inputComment = e.target["new-comment"].value;

    const newRamen = {
      name: inputName,
      restaurant: inputRestaurant,
      image: inputImage,
      rating: inputRating,
      comment: inputComment,
    };

    appendRamenImg(newRamen);
    //displayRamenImg(newRamen);

    e.target.reset();
  };

  ramenForm.addEventListener("submit", addRamen);

  ////Or down below, same as the one above from lines 42-62

  /*  const addNewRamen = () => {
    const inputName = document.getElementById("new-name").value;
    const inputRestaurant = document.getElementById("new-restaurant").value;
    const inputImage = document.getElementById("new-image").value;
    const inputRating = document.getElementById("new-rating").value;
    const inputComment = document.getElementById("new-comment").value;

    const newRamen = {
      name: inputName,
      restaurant: inputRestaurant,
      image: inputImage,
      rating: inputRating,
      comment: inputComment,
    };

    appendRamenImg(newRamen);
    //displayRamenImg(newRamen);
  };

  ramenForm.addEventListener("submit", (e) => {
    e.preventDefault();
    addNewRamen();
    ramenForm.reset();
  }); */
});
