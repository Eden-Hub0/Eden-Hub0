let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

var doctroId = null;

function setCookie(name, value, days) {
    const expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = `expires=${expirationDate.toUTCString()}`;

    
    document.cookie = `${name}=${value}; ${9};`; // Adjust the path as needed
    console.log(document.cookie)
}


  
function logAllCookies() {
    const cookies = document.cookie.split(";");
    console.log('All Cookies:' + cookies);
    cookies.forEach(cookie => {
      const [name, value] = cookie.trim().split('=');
      console.log(`${name}: ${value}`);
    });
  }


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}




var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});

    // Example using Fetch API
const form = document.querySelector('form');


form.addEventListener('submit', async (event) => {
  event.preventDefault();

  console.log('Form submitted!');
  //const formData = new FormData(form);

  var email = document.getElementById("email-input").value;
  
  var password = document.getElementById("password-input").value;

  var bodyParams = {
    email : email,
    password : password
  }
  const requestBodyString = JSON.stringify(bodyParams);

  

 

  if (true) {
    // Handle successful login
    
    const currentPath = window.location.pathname;
    
    const directoryPath = currentPath.substring(0, currentPath.lastIndexOf('/'));
    
    
    console.log(directoryPath);
    window.location.href = `${directoryPath}/profile_doctor.html?id=${2}`;

    

    // Redirect to the user's profile or another page
  } else {
    // Handle login failure
    const error = await response.text();
    console.error('Login failed:', error);
    // Display an error message to the user
  }
});

