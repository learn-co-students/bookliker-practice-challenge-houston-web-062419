document.addEventListener("DOMContentLoaded", function() {
	const ul = document.querySelector("ul")
	const show_panel = document.querySelector("#show-panel")
	const my_username = "varvara"
	const books = fetch("http://localhost:3000/books")
		.then(res => res.json())
        .then(json => {
			console.log(json)
			json.forEach(book => {
				const li = document.createElement("li")
				li.innerText = book.title
				ul.append(li)

				li.addEventListener("click", ()=>{
					show_panel.innerHTML = ""
					const name = document.createElement("h3")
					name.innerText = book.title
					const img = document.createElement("img")
					img.src = book.img_url
					const descr = document.createElement("p")
					descr.innerText = book.description

					const users_ul = document.createElement("ul")
					build_users_ul(book.users, users_ul)

					const btn = document.createElement("button")
					btn.innerText = "Read Book"
					btn.addEventListener("click", ()=>{
						let i_liked = false
						 i_liked = book.users.find(u=>{
							if (u.id == 1)
								return true
							
						})

						if (!i_liked) {
							// const user_li = document.createElement("li")
							// user_li.innerText = my_username
							// users_ul.append(user_li)
							book.users.push({"id":1, "username":my_username})
							patch_users(book)
							build_users_ul(book.users, users_ul)

						}else{
							console.log("already liked")
							book.users = remove_me(book.users)
							patch_users(book)
							build_users_ul(book.users, users_ul)

						}
						
						
					})	

					show_panel.append(name, img, descr, users_ul, btn)
				})
			})

        })
});

function build_users_ul(users, users_ul) {
	users_ul.innerHTML = ""
	users.forEach( user => {
		const user_li = document.createElement("li")
		user_li.innerText = user.username
		users_ul.append(user_li)
	})
}

function remove_me(users) {
	return users.filter(u => u.id != 1);
	
}

function patch_users(book) {
	fetch(`http://localhost:3000/books/${book.id}`, {
		method: "PATCH",
		headers: {
			   "Content-Type": "application/json",
			  Accept: "application/json"
			 },
			body: JSON.stringify({
			users: book.users
    	})
		})	
	.then(res => res.json())
	.then(json => {              
			console.log(json)             
	})
}
