let count = 0;
const body = document.querySelector("body");
const affichage = document.querySelector('#affichage');
const compteur = document.querySelector('#compteur');

body.addEventListener("click", clickCount);

function clickCount() {
  count++;
  compteur.innerHTML = count
  if(count == 5){
    affichage.innerHTML = "Bravo, bel échauffement ! "
  }
  if(count == 10){
    affichage.innerHTML = "Vous êtes passé maître en l'art du clic ! "
  }
}

