'use strict';

class Menu {
  template = `
  <ul class="list-group sidebar">
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cameraphotos">Camera &amp; Photo</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cameraphotos_accessories" class="dropdown-item"><a>Accessories</a></li>
    
      </ul>
    </li>
  
    <li class="list-group-item dropdown">
      <a class="nav-link dropdown-toggle" id="cinema">Home Cinema, TV &amp; Video</a>
      <ul class="dropdown-menu">   
        
       <li data-id="cinema_audio" class="dropdown-item"><a>Audio</a></li>
    
       <li data-id="cinema_video" class="dropdown-item"><a>Video</a></li>
    
      </ul>
    </li>
  </ul>
  `;

  constructor(element) {
    this.el = element;
    this.el.innerHTML = this.template;

    const mainItems = this.el.querySelectorAll(".list-group-item");
    for(const item of mainItems)
    {
      item.addEventListener("pointerenter", this.onenter.bind(this));
      item.addEventListener("pointerleave", this.onleave.bind(this)); 
      //item.addEventListener("onclick", this.onclick.bind(this)); 
    }

    this.el.querySelector(".list-group").addEventListener("onclick", this.onclick.bind(this)); 

  }

  onenter(event)
  {
    event.target.querySelector(".dropdown-menu").classList.add("show");
    document.querySelector(".backdrop").classList.add("show");
  }

  onleave(event)
  {
    event.target.querySelector(".dropdown-menu").classList.remove("show");
    document.querySelector(".backdrop").classList.remove("show");
  }

  onclick(event)
  {
    if(!event.target.classList.contains("dropdown-item"))
      return;

    this.select(event.target.dataset.id);
  }

  select(id)
  {

  }
}

// Делает класс доступным глобально, сделано для упрощения, чтобы можно было его вызывать из другого скрипта
window.Menu = Menu;