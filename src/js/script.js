import $ from 'jquery';
import gsap from 'gsap';

gsap.to('.aaa', 0.3, { opacity: 0.3 });
document.querySelector('.aaa');
$('.hello').on('click', function () {
  $('.world').fadeToggle();
});

const huruine = '111';

console.log(huruine);

const array = [1, 2, 3, 4, 5];

array.forEach((item) => {
  console.log(item);
  console.log(array + 'px');
});

const cibst = 255;
console.log(cibst);
