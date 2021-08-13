import { cardInfo } from './cardInfo.js';

const grid = document.querySelector('.storiesPageGrid');

const createCard = (card) => `
  <div class="storiesGridCard" style="background-image: url(${card.href});" >
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
