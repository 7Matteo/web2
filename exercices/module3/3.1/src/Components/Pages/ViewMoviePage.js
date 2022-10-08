import { clearPage } from '../../utils/render';


const ViewMoviePage = () => {

  
    const main = document.querySelector('main');
    const viewMoviePage = `
        <table class="table">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Duration (min)</th>
                <th scope="col">Budget (million)</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
            </tr>
            </tbody>
        </table>`;
    main.innerHTML = viewMoviePage;
};

const ViewMovie = () => {
    clearPage();
    ViewMoviePage();
  };
  

export default ViewMovie;
