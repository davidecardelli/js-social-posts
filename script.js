const posts = [
    {
      id: 1,
      author: 'Phil Mangione',
      authorPhoto: '',
      date: '12/24/2022',
      text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
      postPhoto: 'https://unsplash.it/600/300?image=171',
      like: 10,
    }, {
        id: 2,
        author: 'Francesco Rossi',
        authorPhoto: '',
        date: '12/25/2022',
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.' ,
        postPhoto: 'https://unsplash.it/600/300?image=172',
        like: 20 ,
    }, {
        id: 3 ,
        author: 'Davide Cardelli' ,
        authorPhoto: '' ,
        date: '12/26/2022' ,
        text: 'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.' , 
        postPhoto: 'https://unsplash.it/600/300?image=173' , 
        like: 30 ,
    }
  ];

// Recupero container dei post dal DOM

const container = document.getElementById('container');

// Creo una variabile di supporto per la creazione del post

let post = '';

// Giro nell'array per sparare in pagina i vari post

for (i = 0; i < posts.length; i ++) {

  post += 

  `
  <div class="post">
      <div class="post__header">
        <div class="post-meta">
          <div class="post-meta__icon">
            <img class="profile-pic" src="${posts[i].authorPhoto}" alt="${posts[i].author}" />
          </div>
          <div class="post-meta__data">
            <div class="post-meta__author">${posts[i].author}</div>
            <div class="post-meta__time">${posts[i].date}</div>
          </div>
        </div>
      </div>
      <div class="post__text">${posts[i].text}</div>
      <div class="post__image">
        <img src="${posts[i].postPhoto}" alt="" />
      </div>
      <div class="post__footer">
        <div class="likes js-likes">
          <div class="likes__cta">
            <button class="like-button js-like-button" href="#" data-postid="${posts[i].id}">
              <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
              <span class="like-button__label">Mi Piace</span>
            </button>
          </div>
          <div class="likes__counter">Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].like}</b> persone</div>
        </div>
      </div>
    </div>
  </div>
  `
}

container.innerHTML = post;