//alert('Привет, я JS');

function guess() {
    var number = prompt("Введи число");
    //console.log(number);
    var guessNumber = 10;
    
    if (number > guessNumber) {
        alert("Число слишком большое");
        return guess();
    }
    else if (number < guessNumber) {
        alert("Число слишком маленькое");
        return guess();
    }
    else {
        return alert("Вы угадали");
    }
}

guess();

function reminder() {
    alert("Вы здесь cлишком долго");
}

setTimeout(reminder, 15000);

function valid() {
    var name = 
    document.getElementById("name").value;
    var name = 
    document.getElementById("password").value;
    
    var reg_name = /^[a-za-яё]+$/i;
    var reg_name = /^[0-9]{5,100}/i;
    
    if (reg_name.test(name) == false) {
        alert("Ошибка в поле ФИО")
    }
    
    if (reg_name.test(password) == false) {
        alert("Ошибка в поле пароль")
    }
}


document.querySelector(".button").addEventListener("click", valid);