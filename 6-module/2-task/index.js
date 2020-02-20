'use strict';

class Carousel {
  slides = [
    {
      id: 0,
      title: 'BEST LAPTOP DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 1,
      title: 'BEST HEADPHONES DEALS',
      img: './assets/images/default-slide-img.jpg'
    },
    {
      id: 2,
      title: 'BEST SPEAKERS DEALS',
      img: './assets/images/default-slide-img.jpg'
    }
  ];

  constructor(element) {
    this.el = element;
    this.currentSlide = 0;

    this.el.innerHTML = `<div id="mainCarousel" class="main-carousel carousel slide">
    <ol class="carousel-indicators">
    </ol>
    <div class="carousel-inner">
        <!--Вот здесь будет активный слайд-->
    </div>

    <button class="carousel-control-prev" href="#mainCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next" href="#mainCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </button>
    </div>`;

    const ol = this.el.querySelector("ol");
    for(let i = 0; i < this.slides.length; ++i)    
      ol.insertAdjacentHTML("beforeend",`<li data-target="#mainCarousel" data-slide-to="${i}" class="carousel-indicator"></li>`);
       
    this.el.querySelector(".carousel-indicators").onclick = this.onclickIndicator.bind(this);
    this.el.querySelector(".carousel-control-prev").onclick = this.onclikButton.bind(this);
    this.el.querySelector(".carousel-control-next").onclick = this.onclikButton.bind(this);

    this.showActiveSlide();
  }

  showActiveSlide()
  {


    const div = this.el.querySelector(".carousel-inner");
    const slide = this.slides[this.currentSlide];
    div.innerHTML = `<div class="carousel-item active">
    <img src="${slide.img}" alt="Activelide">
      <div class="container">
        <div class="carousel-caption">
            <h3 class="h1">${slide.title}</h3>
            <div>
                <a class="btn" href="#" role="button">
                    View all DEALS
                    <img src="assets/icons/icon-angle-white.svg" class="ml-3" alt="">
                </a>
            </div>
        </div>
    </div>`;

    const unactiveInd = this.el.querySelector("ol").querySelectorAll(`li:not([data-slide-to="${this.currentSlide}"])`);

    for(const ind of unactiveInd)
    {
      ind.classList.contains("active") && ind.classList.remove("active");
    }

    this.el.querySelector("ol").querySelector(`li[data-slide-to="${this.currentSlide}"]`).classList.add("active");  
  }

  onclikButton (event)
  {
    if(event.target.dataset.slide == "prev")  
    {
      if(--this.currentSlide < 0)
          this.currentSlide = this.slides.length - 1;
    }
    if(event.target.dataset.slide == "next")  
      if(++this.currentSlide >= this.slides.length)
          this.currentSlide = 0;

    this.showActiveSlide();
  }

  onclickIndicator (event)
  {
    if(!event.target.classList.contains("carousel-indicator"))
      return;

    this.showActiveSlide();    
  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Carousel = Carousel;
