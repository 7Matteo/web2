import rebelleImage from "../../img/rebelle.jpg"
import titanicImage from "../../img/titanic.jpg"


const HomePage = () => {

  
  const main = document.querySelector('main');
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
        src="${titanicImage}"
        alt="Stormtrooper"
      />
    </div>
  </div>`;
  main.innerHTML = homePage;
};

export default HomePage;
