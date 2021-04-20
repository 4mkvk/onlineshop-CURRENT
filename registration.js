let username = document.getElementById("username")
let login = document.getElementById("loginInput")
let password = document.getElementById("passwordInput")
let passwordRepeat = document.getElementById("passwordInput2")
let btn = document.getElementById("btn")



$("#confirmCode").hide();

const registrationCode = Math.floor(Math.random() * 9999) + 1000;

$("#myBtn").click(function () {
    const userEmail = $("#userEmail").val();
    sendEmail(userEmail);
    $("#emailBlock").hide();
    $("#confirmCode").show();
});

btn.addEventListener("click", function () {
    const userCode = Number($("#code").val());
    if (userCode === registrationCode) {
        register();
    } else {
        alert("NE PRAVILNO!");
    }
});

function sendEmail(userEmail) {
    (function () {
        emailjs.init("user_ff1FMAT2kdXu57dcA5kiB");
    })();

    var templateParams = {
        from_name: 'ITSTEP',
        to_name: userEmail,
        message: 'Your registration code: ' + registrationCode,
        to_email: userEmail,
        reply_to: ''
    };

    emailjs.send('service_rh2qval', 'template_9ytb7ap', templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function (error) {
            console.log('FAILED...', error);
        });
}

function register() {
    if (login.value.length < 8) {
        login.style.border = "3px solid red"
    }
    if ((password.value !== passwordRepeat.value) || (password.value.length < 8) || (passwordRepeat.value.length < 8)) {
        password.style.border = "3px solid red"
        passwordRepeat.style.border = "3px solid red"
    }
    else if (password.value === passwordRepeat.value) {
        localStorage.setItem("login", login.value);
        localStorage.setItem("password", password.value)
        localStorage.setItem("username", username.value)
        localStorage.setItem("cart", [])

        $.ajax({
            url: "https://itemsapi.pythonanywhere.com/drivers/",
            type: "post",
            data: {
                phone: login.value,
                car_number: password.value,
                fullname: username.value
            },
            success: function (response) {
                location.href = "login.html"
            },
            error: function () {
                alert("Error!!!")
            }
        })


    }
}






