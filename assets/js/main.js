let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;

  let slides = document.getElementsByClassName('mySlides');
  let contents = document.getElementsByClassName('textover');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0.4;
  }

  contents[0].className += ' highlight';

  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }

  slides[slideIndex - 1].style.opacity = 1;
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += ' active';
}

function overlayImg(evt) {
  let slides = document.getElementsByClassName('mySlides');
  let overlay = document.getElementById('overlay-img');
  for (i = 0; i < slides.length; i++) {
    if (slides[i].children[0].alt == evt.srcElement.alt) {
      overlay.style.left = slides[i].style.left;
      break;
    }
  }
}

function changeImg(evt) {
  let contents = document.getElementsByClassName('textover');
  let dynamicImg = document.getElementsByClassName('dynamic-img')[0];
  for (i = 0; i < contents.length; i++) {
    contents[i].className = contents[i].className.replace(' highlight', '');
  }
  evt.srcElement.className += ' highlight';
  let imgClass = evt.srcElement.className;
  if (imgClass.includes('grocery')) {
    dynamicImg.setAttribute('src', './assets/images/grocery.png');
    dynamicImg.setAttribute('alt', 'grocery');
  } else if (imgClass.includes('hero1')) {
    dynamicImg.setAttribute('src', './assets/images/hero1.png');
    dynamicImg.setAttribute('alt', 'hero1');
  } else if (imgClass.includes('hero2')) {
    dynamicImg.setAttribute('src', './assets/images/hero2.png');
    dynamicImg.setAttribute('alt', 'hero2');
  }
}
