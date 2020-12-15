const reset = () => {
    let result = document.getElementById("result");
    let img = document.querySelectorAll("img");
    result.innerHTML = "Please Select";

    for (let x = 0; x < img.length; x++) {
        img[x].removeAttribute("src");

    }

}




const rock = () => {
    let result = document.getElementById("result");
    let player_img = document.getElementById("player");
    let computer_img = document.getElementById("computer");

    let computer = ["rock", "paper", "scissor"];
    let ran_view = parseInt(Math.random() * 3);
    let computer_chance = computer[ran_view];


    player_img.setAttribute("src", "./img/stone_left.png");


    if (computer_chance == "rock") {
        computer_img.setAttribute("src", "./img/stone_right.png");
        result.innerHTML = "Tied";
    }

    if (computer_chance == "paper") {
        computer_img.setAttribute("src", "./img/paper_right.png");
        result.innerHTML = "Computer Won";
    }

    if (computer_chance == "scissor") {
        computer_img.setAttribute("src", "./img/scissor_right.png");
        result.innerHTML = "Player Won";
    }
}





const paper = () => {
    let result = document.getElementById("result");
    let player_img = document.getElementById("player");
    let computer_img = document.getElementById("computer");

    let computer = ["rock", "paper", "scissor"];
    let ran_view = parseInt(Math.random() * 3);
    let computer_chance = computer[ran_view];


    player_img.setAttribute("src", "./img/paper_left.png");

    if (computer_chance == "rock") {
        computer_img.setAttribute("src", "./img/stone_right.png");
        result.innerHTML = "Player Won";
    }

    if (computer_chance == "paper") {
        computer_img.setAttribute("src", "./img/paper_right.png");
        result.innerHTML = "Tied";
    }

    if (computer_chance == "scissor") {
        computer_img.setAttribute("src", "./img/scissor_right.png");
        result.innerHTML = "Computer Won";
    }
}





const scissor = () => {
    let result = document.getElementById("result");
    let player_img = document.getElementById("player");
    let computer_img = document.getElementById("computer");

    let computer = ["rock", "paper", "scissor"];
    let ran_view = parseInt(Math.random() * 3);
    let computer_chance = computer[ran_view];


    player_img.setAttribute("src", "./img/scissor_left.png");

    if (computer_chance == "rock") {
        computer_img.setAttribute("src", "./img/stone_right.png");
        result.innerHTML = "Computer Won";
    }

    if (computer_chance == "paper") {
        computer_img.setAttribute("src", "./img/paper_right.png");
        result.innerHTML = "Player Won";
    }

    if (computer_chance == "scissor") {
        computer_img.setAttribute("src", "./img/scissor_right.png");
        result.innerHTML = "Tied";
    }
}