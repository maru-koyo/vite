import $ from 'jquery';
import gsap from 'gsap';

gsap.to('.aaa', 0.3, { opacity: 0.3 });
document.querySelector('.aaa');
$('.hello').on('click', function () {
  $('.world').fadeToggle();
});

const huruine = '111';

console.log(huruine);
