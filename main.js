/*

TRACCIA:  Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
nome autore,
foto profilo,
data,
testo del post,
immagine (non tutti i post devono avere una immagine) [quindi gestisco il caso],
numero di likes.
- Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
- Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.


*/


// 1. creo array di oggetti 
// 2. stampo gli elementi in pagina 
    // 2.1 attraverso l'array => for
    // 2.2 salvo le varie informazioni di ogni oggetto in delle variabili
    // 2.3 stampo gli elementi in pagina => .innerHTML
// 3. Rendiamo il tasto “Mi Piace” cliccabile => .addEventListener


// SELEZIONO GLI ELEMENTI UTILI 
let posts = document.querySelector(".posts-list");


// ARRAY DI OGGETTI
var postsList = [
    {
        "authorName" : "Phil Mangione" ,
        "authorPhoto" : "https://unsplash.it/300/300?image=15",
        "postDate" : "1 settimana fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "https://unsplash.it/600/300?image=171",
        "likes" : 80
    },

    {
        "authorName" : "Phil Mangione" ,
        "authorPhoto" : "https://unsplash.it/300/300?image=15",
        "postDate" : "1 mese fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "",
        "likes" : 30
    },

    {
        "authorName" : "Phil Mangione" ,
        "authorPhoto" : "https://unsplash.it/300/300?image=15",
        "postDate" : "5 mesi fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "",
        "likes" : 180
    },

    {
        "authorName" : "Phil Mangione" ,
        "authorPhoto" : "https://unsplash.it/300/300?image=15",
        "postDate" : "5 mesi fa",
        "postText" : "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "postImage" : "https://unsplash.it/600/300?image=170",
        "likes" : 75
    }

]


// STAMPA ELEMENTI IN PAGINA 
for(let i = 0; i < postsList.length; i++) {

    // variabile che mi salva l'i-esimo oggetto dell'array 
    // const object = postsList[i];

    // recupero i valori da ciascun oggetto 
    // let authorName = object.authorName;
    // let authorPhoto = object.authorPhoto;
    // let postDate = object.postDate;
    // let postText = object.postText;
    // let postImage = object.postImage;
    // let likes = object.likes;

    const {authorName , authorPhoto , postDate , postText , postImage , likes} = postsList[i]; 

    // inserisco il container del post singolo post
    posts.innerHTML += `<div class="post"></div>`;

    // seleziono il container del post i-esimo
    const innerPost = document.getElementsByClassName("post")[i];


    // inserisco l'header del post 
    innerPost.innerHTML += `
        <div class="post__header">
            <div class="post-meta">                    
                <div class="post-meta__icon">
                    <img class="profile-pic" src=${authorPhoto} alt=${authorName}>                    
                </div>
                <div class="post-meta__data">
                    <div class="post-meta__author">${authorName}</div>
                    <div class="post-meta__time">${postDate}</div>
                </div>                    
            </div>
        </div>
        <div class="post__text">${postText}</div>
    `

    // se il post ha un'immagine la inserisco 
    if (postImage !== "") {
        innerPost.innerHTML += `
            <div class="post__image">
                <img src="${postImage}" alt="">
            </div>
        `
    }


    // inserisco il footer del post 
    innerPost.innerHTML += `
        <div class="post__footer">
            <div class="likes js-likes">
                <div class="likes__cta">
                    <a class="like-button  js-like-button" href="#" data-postid="${i}">
                        <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>
                    </a>
                </div>
                <div class="likes__counter">
                    Piace a <b id="like-counter-${i}" class="js-likes-counter">${likes}</b> persone
                </div>
            </div> 
        </div>            
    `
}

