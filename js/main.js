/* Descrizione
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
Milestone 1 - Creiamo il nostro array di oggetti che rappresentano ciascun post.
 Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: id del post,
  numero progressivo da 1 a n nome autore, foto autore, data in formato americano (mm-gg-yyyy),
   testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
Non è necessario creare date casuali, per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.
 Unsplash (https://unsplash.it/300/300?image=<id>)
Milestone 2 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
Milestone 3 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. 
Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
**BONUS
1 - Formattare le date in formato italiano (gg/mm/aaaa)
2 - Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
3 - Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone. */

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=134",
        "author": {
            "name": "Francesco Rossi",
            "image": "https://unsplash.it/300/300?image=19"
        },
        "likes": 105,
        "created": "2020-06-05"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Giuseppe Verdi",
            "image": "https://unsplash.it/300/300?image=229"
        },
        "likes": 26,
        "created": "2020-06-05"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=454",
        "author": {
            "name": "Federico Cardi",
            "image": "https://unsplash.it/300/300?image=229"
        },
        "likes": 48,
        "created": "2020-06-05"
    }
];



const carouselContainerElement = document.querySelector(".posts-list");
let carousel = "";
posts.forEach((element) => {

    carousel = `  
    <div class="post">
        <div class="post__header">
            <div class="post-meta">
                <div class="post-meta__icon profile-pic-default " >
                    <img class="profile-pic" src="${element["author"]["image"]}" alt=${element["author"]["name"].charAt(0)}>
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${element["author"]["name"]}</div>
                    <div class="post-meta__time"> ${element["created"].split("-").reverse().join("-")}</div>
                </div>
            </div>
        </div>
        <div class="post__text">${element["content"]}</div>
        <div class="post__image">
            <img src="${element["media"]}" alt="">
        </div>
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" id="js-like-button${element["id"]}"  data-postid="${element["id"]}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${element["id"]}" class="js-likes-counter">${element["likes"]}</b> persone
                </div>
            </div>
        </div>
    </div> `;




    carouselContainerElement.innerHTML += carousel;

});




posts.forEach(element => {
    let btnLike = document.getElementById(`js-like-button${element["id"]}`);
    console.log("prova", btnLike);
    btnLike.addEventListener("click", () => {
        btnLike.classList.add("like-button--liked");
        console.log(element["likes"]++);
        ++element["likes"];
    });
});

