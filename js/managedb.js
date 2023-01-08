import(app.js);

const loginContent = document.querySelector("login-content");

var db = openDatabase("database");

function isInDatabase() {
    userCheck = document.getElementById("username").value;
    passwordCheck = document.getElementById("password").value;
    console.log(userCheck);
    console.log(passwordCheck);

    check = db.transaction(function (check) {
        check.executeSql("SELECT user FROM users WHERE CODIGO = 'userCheck'")
    })

    if (check === true) {
        newUser();
    } else {
        document.write("Usuário não registrado")
    }
}

