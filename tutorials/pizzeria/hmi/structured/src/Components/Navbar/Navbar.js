// eslint-disable-next-line no-unused-vars
import { Navbar as BootstrapNavbar } from 'bootstrap';
import HomePage from '../Pages/HomePage';
import LoginPage from '../Pages/LoginPage';
import RegisterPage from '../Pages/RegisterPage';

const Navbar = () => {
  renderNavbar();
  onNavBarClick();
};

function renderNavbar() {
    const navbar = document.querySelector('#navbarWrapper');
    navbar.innerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light bg-danger">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">e-Pizzeria</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#" data-uri="/">Home</a>
                </li>
                <li id="loginItem" class="nav-item">
                  <a class="nav-link" href="#" data-uri="/login">Login</a>
                </li>
                <li id="registerItem" class="nav-item">
                  <a class="nav-link" href="#" data-uri="/register">Register</a>
                </li>           
              </ul>
            </div>
          </div>
        </nav>
    `;
}
  

function onNavBarClick() {
    const navItems = document.querySelectorAll('.nav-link');
  
    navItems.forEach((item) => {
      item.addEventListener('click', (e) => {
        console.log(`click on ${e.target.dataset.uri} navbar item`);
        if (e.target.dataset.uri === '/') {
          HomePage();
        } else if (e.target.dataset.uri === '/login') {
          LoginPage();
        } else if (e.target.dataset.uri === '/register') {
          RegisterPage();
        }
      });
    });
  }
  

export default Navbar;
