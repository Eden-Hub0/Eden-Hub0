function logAllCookies() {
  const cookies = document.cookie;
  console.log("All Cookies:" + cookies);
  cookies.forEach((cookie) => {
    const [name, value] = cookie.trim().split("=");
    console.log(`${name}: ${value}`);
  });
}

console.log("................");

// Initialize Swiper
const swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  fade: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// Get the search input element and search button
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// Get all the card elements and the "No results" message element
const cards = document.querySelectorAll(".card.swiper-slide");
const noResultsMessage = document.getElementById("no-results-message");

// Add event listener to the search input for live search
searchInput.addEventListener("input", searchByName);

// Function to search by name
function searchByName() {
  const searchTerm = searchInput.value.toLowerCase();
  let foundMatch = false;

  cards.forEach(function (card) {
    const nameElement = card.querySelector(".name");
    const name = nameElement.textContent.toLowerCase();

    if (name.includes(searchTerm)) {
      card.style.display = "block";
      foundMatch = true;
    } else {
      card.style.display = "none";
    }
  });

  // Display no results message if no matches found
  if (!foundMatch) {
    noResultsMessage.style.display = "block";
    cards.forEach(function (card) {
      card.style.display = "none";
    });
  } else {
    noResultsMessage.style.display = "none";
  }
}

// Get the order by alphabetical button and card container
const orderByAlphabeticalButton = document.getElementById(
  "filter-alphabetical"
);
const cardContainer = document.querySelector(".card-wrapper");

orderByAlphabeticalButton.addEventListener("click", function () {
  const cardsArray = Array.from(cardContainer.querySelectorAll(".card"));

  cardsArray.sort(function (cardA, cardB) {
    const nameA = cardA.querySelector(".name").textContent.toLowerCase();
    const nameB = cardB.querySelector(".name").textContent.toLowerCase();

    if (nameA < nameB) {
      return -1;
    } else if (nameA > nameB) {
      return 1;
    } else {
      return 0;
    }
  });

  cardContainer.innerHTML = "";

  cardsArray.forEach(function (card) {
    cardContainer.appendChild(card);
  });
});

// Get the filter by date button
const filterDateButton = document.getElementById("filter-date");

filterDateButton.addEventListener("click", function () {
  const cardsArray = Array.from(cardContainer.querySelectorAll(".card"));

  cardsArray.sort(function (cardA, cardB) {
    const dateA = new Date(
      cardA.querySelector(".extra-data:last-of-type").textContent
    );
    const dateB = new Date(
      cardB.querySelector(".extra-data:last-of-type").textContent
    );
    return dateB - dateA; // Compare in descending order (recent to old)
  });

  cardContainer.innerHTML = "";

  cardsArray.forEach(function (card) {
    cardContainer.appendChild(card);
  });
});

// Store the original order of the cards
const originalOrder = Array.from(
  document.querySelectorAll(".card.swiper-slide")
);

// Function to restore the original order of the cards
function restoreCardOrder() {
  cardContainer.innerHTML = "";

  originalOrder.forEach(function (card) {
    cardContainer.appendChild(card);
  });
}

// Add event listener to the restore order button
const restoreOrderButton = document.getElementById("restore-order");
restoreOrderButton.addEventListener("click", restoreCardOrder);
document.addEventListener("DOMContentLoaded", function () {
  // Use fetch or another method to get data from your API

  const urlId = new URLSearchParams(window.location.search);

  const doctorId = urlId.get("id");
  console.log(doctorId);

  var data = [
    {
      id: 1,
      first_name: "Fatima",
      last_name: "Harach",
      birthdate: "1990-01-01",
      gender: "Female",
      picture: "./assets/patient1.jpg",
      last_consultation: "2024-07-20",
      phone: "+966512345678",
      birth_place: "Alger, Algérie",
      blood_type: "O+",
      insurance_number: "INS123456789",
      birth_certificate_number: "BCN987654321",
      vaccines: [
        { vaccine: "Hepatitis B", administration_date: "1990-02-01" },
        { vaccine: "Polio", administration_date: "1990-04-15" }
      ],
      disease: [
        { chronic_disease: "Diabetes", diagnostic_date: "2015-06-10" }
      ],
      allergy: [
        { allergy: "Penicillin", administration_date: "2000-05-12" }
      ]
    },
    {
      id: 2,
      first_name: "Ahmed",
      last_name: "Zebedi",
      
      birthdate: "1985-05-15",
      gender: "Male",
      picture: "./assets/patient2.jpg",
      last_consultation: "2024-07-20",
      phone: "+966534567890",
      birth_place: "Oran, Algérie",
      blood_type: "A-",
      insurance_number: "INS987654321",
      birth_certificate_number: "BCN123456789",
      vaccines: [
        { vaccine: "MMR", administration_date: "1986-07-21" },
        { vaccine: "Tetanus", administration_date: "2000-09-15" }
      ],
      disease: [
        { chronic_disease: "Hypertension", diagnostic_date: "2018-04-05" }
      ],
      allergy: [
        { allergy: "Dust Mites", administration_date: "1995-03-22" }
      ]
    },
    {
      id: 3,
      first_name: "Mereiem",
      last_name: "Douwieb",
      birthdate: "1992-12-10",
      gender: "Female",
      picture: "./assets/patient3.jpg",
      last_consultation: "2024-07-20",
      phone: "+966501234567",
      birth_place: "Constantine, Algérie",
      blood_type: "B+",
      insurance_number: "INS456789123",
      birth_certificate_number: "BCN321654987",
      vaccines: [
        { vaccine: "COVID-19", administration_date: "2021-08-10" },
        { vaccine: "Flu", administration_date: "2023-11-05" }
      ],
      disease: [],
      allergy: [
        { allergy: "Peanuts", administration_date: "1998-12-15" }
      ]
    },
    {
      id: 4,
      first_name: "Youcef",
      last_name: "Nasri",
      birthdate: "1988-07-20",
      gender: "Male",
      picture: "./assets/patient4.jpg",
      last_consultation: "2024-07-20",
      phone: "+966556789012",
      birth_place: "Tebessa, Algérie",
      blood_type: "AB-",
      insurance_number: "INS741258963",
      birth_certificate_number: "BCN963852741",
      vaccines: [
        { vaccine: "Hepatitis A", administration_date: "1989-05-30" },
        { vaccine: "DTP", administration_date: "1990-07-12" }
      ],
      disease: [
        { chronic_disease: "Asthma", diagnostic_date: "2002-10-18" }
      ],
      allergy: []
    }
    
  ]

  data.forEach((patient) => {
    const cardWrapper = document.querySelector(".card-wrapper");

    console.log(patient.id);
    const card = document.createElement("div");
    card.classList.add("card", "swiper-slide");

    card.innerHTML =
      '<div class="image-content">' +
      '<span class="overlay"></span>' +
      '<div class="card-image">' +
      '<img src="' +
      patient.picture +
      '" alt="" class="card-img">' +
      "</div>" +
      "</div>" +
      '<div class="card-content">' +
      '<h2 class="name">' +
      patient.first_name +
      " " +
      patient.last_name +
      "</h2>" +
      '<p class="extra-data">Age: ' +
      calculateAge(patient.birthdate) +
      "</p>" +
      '<p class="extra-data">Gender: ' +
      patient.gender +
      "</p>" +
      '<p class="extra-data">Last consultation: <span class="date">' +
      formatDate(patient.last_consultation) +
      "</span></p>" +
      '<div class="buttons-container">' +
      '<div class="patient-buttons">' +
      '<a href="patient-profiles/' +
      generateProfileUrl(patient) +
      '"><button class="button">Full profile</button></a>' +
      '<a href="consultation-page.html"><button class="button">New consultation</button></a>' +
      "</div>" +
      "</div>" +
      "</div>";

    cardWrapper.appendChild(card);
  });
});

// Helper function to calculate age
function calculateAge(birthdate) {
  // Implement the logic to calculate age from birthdate
  // For simplicity, let's assume birthdate is in the format 'YYYY-MM-DD'
  const birthYear = new Date(birthdate).getFullYear();
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

// Helper function to format date
function formatDate(dateString) {
  // Implement the logic to format the date as needed
  // For simplicity, let's assume dateString is in the format 'YYYY-MM-DD'
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Helper function to generate profile URL
function generateProfileUrl(patient) {
  // Implement the logic to generate the profile URL as needed
  return `patient_profile.html?id=` + patient.id;
}
