const li = document.querySelectorAll("li");

const quote = document.querySelectorAll(".quote");
const but = document.querySelector(".random");

const fav = document.querySelectorAll(".heart");

// click event for the navbar(kol li tedina l section)
li[0].onclick = function() {
  // Clear any existing class name
  li[0].offsetParent.className = "";
  // Add 'qod' class to the offset parent element
  li[0].offsetParent.classList.add("qod");
};


li[1].onclick = function() {
  li[1].offsetParent.className = "";
  li[1].offsetParent.classList.add("favorite");
};

li[2].onclick = function() {
  li[2].offsetParent.className = "";
  li[2].offsetParent.classList.add("all");
};

// click event for the button (t3tilna random number between 0 and the quotelength)
but.onclick = function() {
  // Generate a random quote number
  let quoteNum = Math.floor(Math.random() * quote.length);
  
  // Remove 'active' class from all quote elements
  quote.forEach(q => q.classList.remove("active"));
  
  // Add 'active' class to the randomly selected quote element
  quote[quoteNum].classList.add("active");
};
// shuffle the quotes 


// click event for the heart icons (liked quotes)
fav.forEach(f => f.onclick = function() {
  // Get the heart icon element
  const heartIcon = this.querySelector("i");
  // Get the parent element of the heart icon (the quote)
  const parentElement = this.parentElement.parentElement;
  
  // Toggle 'fav' class on the parent element (twli favorite)
  parentElement.classList.toggle("fav");
  
  // Check if 'fav' class is present on the parent element (to fill the heart)
  if (parentElement.classList.contains("fav")) {
    // If 'fav' class is present, remove 'fa-regular' and add 'fa-solid' class to the heart icon
    heartIcon.classList.remove("fa-regular");
    heartIcon.classList.add("fa-solid");
  } else {
    // If 'fav' class is not present, remove 'fa-solid' and add 'fa-regular' class to the heart icon
    heartIcon.classList.remove("fa-solid");
    heartIcon.classList.add("fa-regular");
  }
});
