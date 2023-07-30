const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const cardWidth = 370; // Adjust this based on the actual width of your cards
const numVisibleCards = 2;

nextButton.addEventListener('click', () => {
  if (currentIndex < 9 - numVisibleCards) {
    currentIndex++;
    updateCarouselPosition();
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarouselPosition();
  }
});

function updateCarouselPosition() {
  const translateXValue = -currentIndex * cardWidth;
  carousel.style.transform = `translateX(${translateXValue}px)`;
}

// client experience sliding
const cardsContainer = document.querySelector('.cards-container');
  let cardIndex = 0;

  function showNextCard() {
    cardIndex = (cardIndex + 1) % 6;
    const offset = -cardIndex * 400; // Assuming each card has a width of 400px
    cardsContainer.style.transform = `translateX(${offset}px)`;
  }

  function startCardSlider() {
    setInterval(showNextCard, 3000); // Change card every 3 seconds (adjust as desired)
  }

  startCardSlider();
