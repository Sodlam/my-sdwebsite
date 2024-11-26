
// // JavaScript
// function switchToDark() {
//     document.getElementById('themeStyle').setAttribute('href', '../asset/css/dark.css'); // Consistent path for dark mode
//     document.getElementById('topWhite').src = '../asset/images/shape-top-black-80.png'; // Change to dark mode images
//     document.getElementById('topGrey').src = '../asset/images/shape-top-dark-grey-80.png';
//     document.getElementById('topGreyBottom').src = '../asset/images/shape-top-dark-grey-80.png';

//     // Toggle visibility of the icons
//     document.getElementById("moonIcon").style.display = "none";
//     document.getElementById("sunIcon").style.display = "inline-block";
// }

// function switchToLight() {
//     document.getElementById('themeStyle').setAttribute('href', '../asset/css/light.css'); // Consistent path for light mode
//     document.getElementById('topWhite').src = '../asset/images/shape-top-white-80.png'; // Change to light mode images
//     document.getElementById('topGrey').src = '../asset/images/shape-top-grey-80.png';
//     document.getElementById('topGreyBottom').src = '../asset/images/shape-top-grey-80.png';

//     // Toggle visibility of the icons
//     document.getElementById("moonIcon").style.display = "inline-block";
//     document.getElementById("sunIcon").style.display = "none";
// }


function toggleMode() {
  let themeElement = document.getElementById('themeStyle');
  let toggleIcon = document.getElementById("toggle");
  let topWhite = document.getElementById('topWhite');
  let topGrey = document.getElementById('topGrey');
  let topGreyBottom = document.getElementById('topGreyBottom');

  if (themeElement.getAttribute('href') === '../assets/css/light.css') {
      // Switch to dark mode
      themeStyle.setAttribute('href', './asset/css/dark.css');
      toggleIcon.className = 'fa-solid fa-toggle-off toggleon'
      topWhite.src = './asset/images/shape-top-black-80.png';
      topGrey.src = '../asset/images/shape-top-dark-grey-80.png';
      topGreyBottom.src = '../asset/images/shape-top-dark-grey-80.png';
      
  } else {
      // Switch to light mode
      themeStyle.setAttribute('href', '../asset/css/light.css');
      toggleIcon.className='fa-solid fa-toggle-on toggleon';
      topWhite.src = '../asset/images/shape-top-white-80.png';
      topGrey.src = './asset/images/shape-top-grey-80.png';
      topGreyBottom.src = '../asset/images/shape-top-grey-80.png';
      
  }
}


// Scroll to the top button


// Show the button when the user scrolls down 100px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}

// Scroll to the top when the button is clicked
document.getElementById("scrollTopBtn").addEventListener("click", function(e){
  e.preventDefault(); // Prevent default anchor behavior
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // Smooth scroll effect
  });
});

