import { clearPage } from '../../utils/render';
import { addOneMovie } from '../../utils/movies';

const AddMoviePage = () => {
    const main = document.querySelector('main');
    const addMoviePage = `
    
    <div class="d-flex justify-content-center">
        
        <form class = "w-25 text-center">
            <div class="form-group pb-3">
                <h3>Add a movie</h3>   
            </div>
            <div class="form-group pb-3">
                <label for="titleInput">Title</label>
                <input id="titleInput" class="form-control">
            </div>
            <div class="form-group pb-3">
                <label for="durationInput">Duration</label>
                <input id="durationInput" class="form-control">
            </div>
            <div class="form-group pb-3">
                <label for="budgetInput">Budget</label>
                <input id="budgetInput" class="form-control">
            </div>
            <div class="form-group pb-3">
                <label for="linkInput">Link</label>
                <input id="linkInput" class="form-control">
            </div>
            <button type="submit" id"submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>`;
    main.innerHTML = addMoviePage;
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const title = document.querySelector("#titleInput");
        const duration = document.querySelector("#durationInput");
        const budget = document.querySelector("#budgetInput");
        const link = document.querySelector("#linkInput");
        addOneMovie({title : title.value, duration : duration.value, budget : budget.value, link : link.value});
    });
};

const RegisterMovie = () => {
    clearPage();
    AddMoviePage();
  };
  

export default RegisterMovie;
