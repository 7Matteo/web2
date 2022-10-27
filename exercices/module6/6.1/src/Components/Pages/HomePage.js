const HomePage = () => {
  const main = document.querySelector('main');
  main.innerHTML = 'Deal with the content of your HomePage';

  fetch('https://v2.jokeapi.dev/joke/Any?lang=fr')
    .then((response) => {
      if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
      return response.json();
    })
    .then((joke) => {
      main.innerHTML = `<h3 class="alert alert-success"> ${joke.setup} </h3>
      <h3> ${joke.delivery} </h3>`
    })
    .catch((err) => {
      console.error('HomePage::error: ', err);
  });
};



export default HomePage;
