const params = new URLSearchParams(window.location.search)
if (params.get("game")) {
    games.forEach(async game => {
    if (game.id != params.get("game")) return
    document.title = `${game.title} | idk what I'm doing`
    document.querySelector("#gameImage").src = game.image
    document.querySelector("#gameTitle").innerHTML = game.title
    if (game.description) document.querySelector("#gameDescription").innerHTML = game.description
    document.querySelector("#frame").src = game.url
    })
}

if (localStorage.getItem("tabIcon")) {
    document.querySelector("link[rel='shortcut icon']").href = localStorage.getItem("tabIcon")
}

if (localStorage.getItem("tabName")) {
    document.title = localStorage.getItem("tabName")
}
