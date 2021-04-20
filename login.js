let loginFromLocalStorage = localStorage.getItem("login");
let passwordFromLocalStorage = localStorage.getItem("password");
let usernameFromLocalStorage = localStorage.getItem("username")

let btnEnter = document.getElementById("btn");

btnEnter.addEventListener('click', function () {
    $.ajax({
        url: "https://itemsapi.pythonanywhere.com/drivers/",
        type: "get",
        success: function (response) {
            let loginEnter = document.getElementById("loginInput")
            let passwordEnter = document.getElementById("passwordInput")
            let userFound = false;
            for (let i = 0; i < response.length; i++) {
                if (loginEnter.value === response[i]['phone'] && passwordEnter.value === response[i]['car_number']) {
                    userFound = true;
                    break;
                }
            }

            if (userFound) {
                location.href = 'index.html'
            } else {
                loginEnter.style.border = "3px solid red"
                passwordEnter.style.border = "3px solid red"
            }
        },
        error: function () {
            alert("Error!!!")
        }
    })
})
