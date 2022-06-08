let coverSelector = document.querySelector(".cover");
let desSelector = document.querySelector (".description");
let movienameSelector = document.querySelector(".max");


let getMovies = async (url) => {
    let response = await fetch(`${url}`);

    if (response.ok) {
        response = response.json();
        console.log(response);
        return Promise.resolve(response);
    } else {
        return Promise.reject("La requête n'a pas aboutie")
    } 
};

function showMovies() {
    let url = `https://api.themoviedb.org/3/movie/76341?api_key=bf26301d9698c1061427652e6ea2f518&language=fr&include_image_language=fr,null`;
    getMovies(url).then ((response) => {
        console.log(response);
        coverSelector.src = `https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg`;
        desSelector.textContent = response.overview;
        movienameSelector.textContent = response.original_title;

    })
};

showMovies();   

function listMovies() { 
    let url2= `https://api.themoviedb.org/3/movie/76341/similar?api_key=bf26301d9698c1061427652e6ea2f518&language=fr&include_image_language=fr,null&page=1`
    getMovies(url2).then ((result) => {
    console.log(result);
  
    let array = results;
    var coverid = results;
    var string = 

    array.forEach(element => {
        let titre = document.createElement("h1");
        titre.textContent = original_title;
        let cover = document.createElement("img");
        cover.src = `https://image.tmdb.org/t/p/w500${coverid}`;

    });
        
    });
};

listMovies();