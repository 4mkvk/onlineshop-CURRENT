let link = document.getElementById("link")
link.addEventListener("click", function () {
    localStorage.removeItem("login")
    localStorage.removeItem("password")
    localStorage.removeItem("username")
})