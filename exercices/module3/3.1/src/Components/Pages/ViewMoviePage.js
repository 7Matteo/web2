import { clearPage } from '../../utils/render';
import { readAllMovies } from '../../utils/movies';




const ViewMoviePage = () => {
    const movies = readAllMovies();
    
    const main = document.querySelector('main');
    let viewMoviePage = `
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Duration (min)</th>
                <th scope="col">Budget (million)</th>
            </tr>
            </thead>
            <tbody>`
            
            

        movies.forEach(element => {
            viewMoviePage += 
            `<tr>
            <th scope="row">
                <a href="${element.link}">${element.title}</a>
            </th>
            <td>${element.duration}</td>
            <td>${element.budget}</td>
            </tr>`
        });

        viewMoviePage += 
        `</tbody>
        </table>`;
    main.innerHTML = viewMoviePage;
};

const ViewMovie = () => {
    clearPage();
    ViewMoviePage();
  };
  

export default ViewMovie;
