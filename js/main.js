function selectCategory(category) {
    var concept = category;
    document.getElementById('search_concept').textContent = concept;
  }
  
  function search() {
    var searchInput = document.getElementById('search').value;
    var selectedCategory = document.getElementById('search_concept').textContent;
    alert('Search: ' + searchInput + ' in category: ' + selectedCategory);
  }

//слайдер 

// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const slideWidth = slider.clientWidth;
// let currentIndex = 0;
// let intervalId;


// function nextSlide() {
//   if (currentIndex < slides.children.length - 1) {
//     currentIndex++;
//   } else {
//     currentIndex = 0; 
//   }
//   updateSlidePosition();
// }


// function startAutoSlide() {
//   intervalId = setInterval(nextSlide, 4000); 
// }


// function stopAutoSlide() {
//   clearInterval(intervalId);
// }


// startAutoSlide();


// document.querySelector('.prev-btn').addEventListener('click', () => {
//   if (currentIndex > 0) {
//     currentIndex--;
//   } else {
//     currentIndex = slides.children.length - 1; 
//   }
//   updateSlidePosition();
//   stopAutoSlide(); 
// });

// document.querySelector('.next-btn').addEventListener('click', () => {
//   nextSlide();
//   stopAutoSlide(); 
// });


// function updateSlidePosition() {
//   slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }


// slider.addEventListener('mouseenter', stopAutoSlide);
// slider.addEventListener('mouseleave', startAutoSlide);


let slideIndex = 1;
let slideInterval;

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }    
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

// Автоматическое переключение слайдов каждые 3 секунды
function autoSlide() {
    plusSlides(1);
}

slideInterval = setInterval(autoSlide, 3000);

// Остановить автоматическое переключение при наведении на слайдер
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

// Возобновить автоматическое переключение при уходе курсора с слайдера
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
    slideInterval = setInterval(autoSlide, 3000);
});



