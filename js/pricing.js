const slider = document.querySelector('label');
const monthly = document.querySelector('.monthly');
const yearly = document.querySelector('.yearly');
const basic = document.querySelectorAll('.basic');
const pro = document.querySelector('.pro');
const business = document.querySelector('.business');
console.log(basic);
function togglePrice() {
  if (slider.classList.contains('sliderActive')) {
    monthly.classList.remove('greyed');
    yearly.classList.add('greyed');
    basic.forEach((item) => (item.innerText = '$19.00'));
    pro.innerText = '$39.00';
    business.innerText = '$99.00';
  } else {
    monthly.classList.add('greyed');
    yearly.classList.remove('greyed');
    basic.forEach((item) => (item.innerText = '$190.00'));
    pro.innerText = '$390.00';
    business.innerText = '$990.00';
  }
  slider.classList.toggle('sliderActive');
}

slider.addEventListener('click', togglePrice);
