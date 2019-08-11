// document.addEventListener("DOMContentLoaded", function() {});

const booksUrl = 'http://localhost:3000/books'
const usersUrl = ' http://localhost:3000/users'
const 

fetch(booksUrl)
.then(res => res.json())
.then(books => {
    books.forEach(book => renderBook(book))

})

function renderBook(book){
    const div = document.createElement('div')
    div.className = 'book'

    const h2 = document.createElement('h2')
    h2.className = 'click-title'

    


}


/* <div class="book">
        <h2 class='click-title'>title</h2>
        Once clicked on, needs to go to a page with this on it?
        <img src=book_img_url class="book-cover" />
        <p>description</p>
        <p class='liked-by'> Liked By: </p>
       // id = l'ist' <li>Users.username</li>
        <button class="like-btn">Like <3</button>
    </div> */


