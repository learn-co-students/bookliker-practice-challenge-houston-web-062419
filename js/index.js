document.addEventListener("DOMContentLoaded", function() {

    const booksUrl = 'http://localhost:3000/books'
    const ul = document.getElementById('list')
    const div = document.querySelector('#show-panel')
    const booksDiv = document.querySelector('#list-panel')
    
    fetch(booksUrl)
    .then(res => res.json())
    .then(books => {
        books.forEach(book => renderBook(book))
        
    })

    function renderBook(book){


        const li = document.createElement('li')
        // li.setAttribute('book-id', book.id)
        li.innerText = book.title
        
        li.addEventListener('click', () => {
          showBook(book)
        })

        ul.append(li)
        booksDiv.append(ul)

    }

    function showBook(book){
        div.innerHTML = ""
        const h2 = document.createElement('h2')
        h2.className = 'click-title'
        h2.innerText = book.title

        const image = document.createElement('img')
        image.src = book.img_url
        image.className = 'book-cover'

        const p = document.createElement('p')
        p.innerText = book.description

        const btn = document.createElement('button')
        btn.className = 'like-btn'
        btn.setAttribute('book-id', book.id)
        btn.innerText = 'Read Book'
        btn.addEventListener('click', {

        })

        div.append(h2, image, p, btn) 
    }




});
