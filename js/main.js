$(document).ready(function () {
  const hotelSwiper = new Swiper('.hotel-slider', {
  // Optional parameters
  
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
}); 


const reviewsSwiper = new Swiper('.reviews-slider', {
  // Optional parameters
  loop: true,
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--prev',
    prevEl: '.reviews-slider__button--next',
  },
  
}); 


var menuButton = $(".menu-button");
menuButton.on("click", function() {
  document
  $(".navbar-bottom").toggleClass('navbar-bottom--visible');
});
var modalButton = $("[data-togle=modal]");
var closeModalButton = $(".modal__close");
var closeModalButton1 = $(".modal__overlay");
modalButton.on("click", openModal);
closeModalButton.on("click", closeModal);
closeModalButton1.on("click", closeModal1);

function openModal() {
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.addClass('modal__overlay--visible');
  modalDialog.addClass('modal__dialog--visible');
} 

function closeModal(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
} 
function closeModal1(event) {
  event.preventDefault();
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalOverlay.removeClass('modal__overlay--visible');
  modalDialog.removeClass('modal__dialog--visible');
} 

$('.modal__input--phone').mask('+7(000) 000-0000');
$('.footer__input--phone').mask('+7(000) 000-0000');

$('.form').each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Enter a name",
      minlength: "The name must not be shorter than 2 letters",
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address name@domain.com",
    },
    phone: {
      required: "Phone is required",
      
    },
  },
}); 

});
AOS.init();
});