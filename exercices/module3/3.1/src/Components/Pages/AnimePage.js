

const AnimePage = () => {
  
    const main = document.querySelector('main');
    const homePage = `
        <div id="animeDiv" class="square square-lg bg-secondary">
            <small>Square</small>
        </div>
        <script src="anime.min.js"></script>
        `;
    main.innerHTML = homePage;
};


export default AnimePage;
