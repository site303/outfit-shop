function selectCategory(category) {
    let concept = category;
    document.getElementById('search_concept').textContent = concept;
  }
  
  function search() {
    var searchInput = document.getElementById('search').value;
    var selectedCategory = document.getElementById('search_concept').textContent;
    alert('Search: ' + searchInput + ' in category: ' + selectedCategory);
  }

//слайдер 

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
// function autoSlide() {
//     plusSlides(1);
// }

// Остановить автоматическое переключение при наведении на слайдер
document.querySelector('.slideshow-container').addEventListener('mouseenter', function() {
    clearInterval(slideInterval);
});

// Возобновить автоматическое переключение при уходе курсора с слайдера
document.querySelector('.slideshow-container').addEventListener('mouseleave', function() {
    slideInterval = setInterval(autoSlide, 3000);
});

// Табы 

function chooseDress(evt, dressName) {
  let tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  let tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(dressName).style.display = "block";
  evt.currentTarget.className += "active";
}

window.onload = function() {
  // Устанавить активную вкладку по умолчанию
  document.getElementById('T-shirt').style.display = 'block';
  document.querySelector('.tablinks.active').classList.remove('active'); // Удаляем класс active у всех кнопок
  document.querySelector('.tablinks').classList.add('active'); // Устанавливаем класс active для первой кнопки
}




