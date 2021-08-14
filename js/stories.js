import { cardInfo } from './cardInfo.js';

const grid = document.querySelector('.storiesPageGrid');

const createCard = (card) => `
    <style>
    .storiesGridCard.card${cardInfo.indexOf(card)} {
        background-image: url(${card.href});
        position: relative;
    }
    .storiesGridCard.card${cardInfo.indexOf(card)} h3, h4, hr, .readStory {
        z-index: 2;
    }
    .darken {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background-color: rgba(0, 0, 0, .4);
    }
    @media only screen and (min-width: 768px) {
        .storiesGridCard.card${cardInfo.indexOf(card)} {
            background-image: url("https://res.cloudinary.com/djuu2phoy/image/upload/v1628528976/assets/stories/desktop/archDesktopDark_vumzzg.jpg");
        }
    }
    </style>
  <div class="storiesGridCard card${cardInfo.indexOf(card)}" >
  <div class="darken" ></div>
    <h3>${card.date}</h3>
    <h4>by ${card.author}</h4>
    <hr />
    <div class="readStory">
      <a href="/stories.html">
        <h4>read story</h4>
      </a>
      <img
        src="https://res.cloudinary.com/djuu2phoy/image/upload/v1628259686/assets/shared/desktop/arrow_white_bm1xf8.svg"
        alt="arrow"
      />
    </div>
  </div>
  `;

grid.innerHTML = cardInfo.map((singleCard) => createCard(singleCard)).join('');
