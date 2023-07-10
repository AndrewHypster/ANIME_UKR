const cards = document.querySelectorAll(".card");

for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("mousemove", startRotate);
  card.addEventListener("mouseout", stopRotate);
  card.addEventListener("click", clickCard);
}

function startRotate(event) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = "rotateX(" + -(event.offsetY - halfHeight) / 5 + "deg) rotateY(" + (event.offsetX - halfHeight) / 5 + "deg)";
}

function stopRotate() {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}

function clickCard() {
  const cardItem = this.querySelector(".card-item");
  // const wrapper = document.body.querySelector(".wrapper");
  // wrapper.style.display = "none";
  // const body = document.body;
  // body.style.height = '100vh'
  // body.style.backgroundImage = `url(${cardItem.src})`;
  // body.style.backgroundRepeat = `no-repeat`;
  // body.style.backgroundPositionX = `center`;
  // body.style.backgroundPositionY = `center`;
  // body.style.backgroundSize = 'contain'
  cardItem.style = `
    -webkit-transform: scale(2.5);
    -ms-transform: scale(2.5);
    transform: scale(2.5);
  `
}
