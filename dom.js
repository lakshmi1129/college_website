function dom() {
    var mail = user.value
    localStorage.setItem('username', mail)
    var password = pswd.value
    localStorage.setItem('password', password)
    var confirmpass = cpswd.value
    if (password == confirmpass) {
        alert("Registration Successful")
        window.location = "login.html"
    }
    else {
        alert("Confirm Password Incorrect")
        window.location = "register.html"

    }


}


function login() {
    var user = luser.value
    var pswd = lpswd.value
    if (user == localStorage.getItem('username')) {
        if (pswd == localStorage.getItem('password')) {
            alert('Login Successfull')
            window.location = "loginhome.html"
        }
        else {
            alert('Invalid password')
        }
    }
    else {
        alert('Invalid Username')
    }
}



function mark() {
    let exam = new Promise((res, rej) => {
        // let res = edu.value
        // math.random gives numbers between 0-1, then multiply it by 10 and to avoid decimal part math.floor is used
        let winner =Math.floor ((Math.random() *1000)/10)
        console.log(winner);


        if (winner <= 100) {
            res(`Your Result is: ${winner} %`)
        }
        else {
            rej('No result available')
        }
    })
    exam.then((won) => {
        resultDisplay.innerHTML = won
    }).catch((won) => {
        resultDisplay.innerHTML = won
    })


}  
