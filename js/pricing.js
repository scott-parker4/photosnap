const slider = document.querySelector('label');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const basic = document.querySelectorAll('.basic');
const pro = document.querySelectorAll('.pro');
const business = document.querySelectorAll('.business');

function updatePrice(card, price) {
  card.forEach((item) => (item.innerText = price));
}

function togglePrice() {
  if (slider.classList.contains('sliderActive')) {
    monthly.classList.remove('greyed');
    yearly.classList.add('greyed');
    updatePrice(basic, '$19.00');
    updatePrice(pro, '$39.00');
    updatePrice(business, '$99.00');
  } else {
    monthly.classList.add('greyed');
    yearly.classList.remove('greyed');
    updatePrice(basic, '$190.00');
    updatePrice(pro, '$390.00');
    updatePrice(business, '$990.00');
  }
  slider.classList.toggle('sliderActive');
}

slider.addEventListener('click', togglePrice);
