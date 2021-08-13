const grid = document.querySelector('.storiesPageGrid');

const cardInfo = [
  {
    date: 'April 16th 2020',
    title: 'The Mountains',
    author: 'John Appleseed',
    href: 'https://res.cloudinary.com/djuu2phoy/image/upload/v1628356313/assets/stories/mobile/mountainsDark_kwj25m.jpg',
  },
  {
    date: 'April 1th 2020',
    title: 'Sunset Cityscapes',
    author: 'Benjamin Cruz',
    href: 'https://res.cloudinary.com/djuu2phoy/image/upload/v1628356415/assets/stories/mobile/cityscapesDark_muxx6h.jpg',
  },
  {
    date: 'April 11th 2020',
    title: '18 Days Voyage',
    author: 'Alexei Borodin',
    href: 'https://res.cloudinary.com/djuu2phoy/image/upload/v1628356510/assets/stories/mobile/voyageDark_ndd55e.jpg',
  },
  {
    date: 'April 9th 2020',
    title: 'Architecturals',
    author: 'Samantha Brooke',
    href: 'https://res.cloudinary.com/djuu2phoy/image/upload/v1628356585/assets/stories/mobile/archDark_tbbmpf.jpg',
  },
];

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
