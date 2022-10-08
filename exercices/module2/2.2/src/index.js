import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.css';

import rebelleImage from './img/rebelle.jpg';
import titanicRebelle from './img/titanic.jpg';

const homePage = `
<div class="text-center">
  <h3>Welcome to myMovies !</h3>
  <p>Here you can find a selection of our favorite movies ; )</p>
  <div class="pb-3">
    <img class="img-thumbnail w-50" src="${rebelleImage}" alt="Groot" />
  </div>
  <div>
    <img
      class="img-thumbnail w-50"
      src="${titanicRebelle}"
      alt="Stormtrooper"
    />
  </div>
</div>`;

const main = document.querySelector('main');

main.innerHTML = homePage;