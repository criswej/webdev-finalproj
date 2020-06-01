var favorites= ["funk", "history", "gardening", "movies"]
var navbar = document.getElementById("navbar")
favorites.forEach(function(item)

{console.log(item)
var link = `<a class="navbar-brand" href="${item}.html">${item}</a>`
navbar.innerHTML += link
})