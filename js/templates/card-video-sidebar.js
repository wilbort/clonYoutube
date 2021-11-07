export const cardVideoSidebar = (data) => `
    <a href="./video.html"
    class="cover">
    <img class="image"
      src=${data.cover}>
      <time class="time">${data.time}</time>
  </a>
  <div class="content">
      <h3 class="title rows-text-2">
        <a href="./video.html">¿Qué es el testing de software y cómo hacerlo? 🐞</a>
      </h3>
      <a href="https://wilbort.pe" target="_blank">WilbortER</a>
      <p class="video-information">
        <span class="views">${data.views} visualizaciones</span>
        <span>Hace 2 horas</span>
      </p>
    </div>
  `
