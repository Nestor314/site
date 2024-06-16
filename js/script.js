const application_grid_item = document.getElementsByClassName('application-grid-item');
const game_link_grid_item = document.getElementsByClassName('game-link');

document.getElementById('loginButton').onclick = function () {
    document.getElementById('loginModal').style.display = 'block';
}

document.getElementsByClassName('close')[0].onclick = function () {
    document.getElementById('loginModal').style.display = 'none';
}

document.getElementById('nav-button').onclick = function () {
    document.getElementById('chatModal').style.display = 'block';
}

window.onclick = function (event) {
    var modal = document.getElementById('loginModal');
    var modal2 = document.getElementById("chatModal");
    if (event.target === modal) {
        modal.style.display = 'none';
    }
    if (event.target === modal2) {

        modal2.style.display = 'none';
    }
}

function login() {
    const username = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        document.getElementById('profileButton').style.display = "block";
        document.getElementById('loginButton').style.display = "none";
        document.getElementById('loginModal').style.display = 'none';

        var mainFrames = document.getElementsByClassName('mainFrame');
        var myprofileFrames = document.getElementsByClassName('myProfileFrame');
        var applicationsFrames = document.getElementsByClassName("applicationsFrame");
        var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

        for (var i = 0; i < someoneprofileFrames.length; i++) {
            someoneprofileFrames[i].style.display = 'none';
        }
        for (var i = 0; i < mainFrames.length; i++) {
            mainFrames[i].style.display = 'none';
        }
        for (var i = 0; i < applicationsFrames.length; i++) {
            applicationsFrames[i].style.display = 'none';
        }
        for (var i = 0; i < myprofileFrames.length; i++) {
            myprofileFrames[i].style.display = 'block';
        }

    } else {
        alert('Неправильный логин или пароль');
    }
}

function exit() {
    document.getElementById('profileButton').style.display = "none";
    document.getElementById('loginButton').style.display = "block";

    var myprofileFrames = document.getElementsByClassName('myProfileFrame');

    var mainFrames = document.getElementsByClassName('mainFrame');
    for (var i = 0; i < mainFrames.length; i++) {
        mainFrames[i].style.display = 'block';
    }
    for (var i = 0; i < myprofileFrames.length; i++) {
        myprofileFrames[i].style.display = 'none';
    }
}

document.getElementById('profileButton').onclick = function () {
    var mainFrames = document.getElementsByClassName('mainFrame');
    var myprofileFrames = document.getElementsByClassName('myProfileFrame');
    var applicationsFrames = document.getElementsByClassName("applicationsFrame");
    var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

    for (var i = 0; i < someoneprofileFrames.length; i++) {
        someoneprofileFrames[i].style.display = 'none';
    }
    for (var i = 0; i < mainFrames.length; i++) {
        mainFrames[i].style.display = 'none';
    }
    for (var i = 0; i < applicationsFrames.length; i++) {
        applicationsFrames[i].style.display = 'none';
    }
    for (var i = 0; i < myprofileFrames.length; i++) {
        myprofileFrames[i].style.display = 'block';
    }
}
document.getElementById('mainFrameButton').onclick = function () {
    var mainFrames = document.getElementsByClassName('mainFrame');
    var myprofileFrames = document.getElementsByClassName('myProfileFrame');
    var applicationsFrames = document.getElementsByClassName("applicationsFrame");
    var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

    for (var i = 0; i < applicationsFrames.length; i++) {
        applicationsFrames[i].style.display = 'none';
    }
    for (var i = 0; i < someoneprofileFrames.length; i++) {
        someoneprofileFrames[i].style.display = 'none';
    }
    for (var i = 0; i < mainFrames.length; i++) {
        mainFrames[i].style.display = 'block';
    }
    for (var i = 0; i < myprofileFrames.length; i++) {
        myprofileFrames[i].style.display = 'none';
    }
}
Array.from(application_grid_item).forEach(function (element) {
    element.onclick = function () {
        var mainFrames = document.getElementsByClassName('mainFrame');
        var applicationsFrames = document.getElementsByClassName("applicationsFrame");
        var myprofileFrames = document.getElementsByClassName('myProfileFrame');
        var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

        for (var i = 0; i < someoneprofileFrames.length; i++) {
            someoneprofileFrames[i].style.display = 'block';
        }
        for (var i = 0; i < applicationsFrames.length; i++) {
            applicationsFrames[i].style.display = 'none';
        }
        for (var i = 0; i < mainFrames.length; i++) {
            mainFrames[i].style.display = 'none';
        }

        for (var i = 0; i < myprofileFrames.length; i++) {
            myprofileFrames[i].style.display = 'none';
        }
    }
})

Array.from(application_grid_item).forEach(function (element) {
    element.onclick = function () {
        var mainFrames = document.getElementsByClassName('mainFrame');
        var applicationsFrames = document.getElementsByClassName("applicationsFrame");
        var myprofileFrames = document.getElementsByClassName('myProfileFrame');
        var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

        for (var i = 0; i < someoneprofileFrames.length; i++) {
            someoneprofileFrames[i].style.display = 'block';
        }
        for (var i = 0; i < applicationsFrames.length; i++) {
            applicationsFrames[i].style.display = 'none';
        }
        for (var i = 0; i < mainFrames.length; i++) {
            mainFrames[i].style.display = 'none';
        }

        for (var i = 0; i < myprofileFrames.length; i++) {
            myprofileFrames[i].style.display = 'none';
        }
    }
})

document.querySelectorAll('.game-link').forEach(function (element) {
    const vocabulary = {
        "dota_game": "Dota 2",
        "lol_game": "League of Legends",
        "minecraft_game": "Minecraft",
        "valorant_game": "Valorant",
        "cs2_game": "Counter Strike 2",
        "overwatch_game": "Overwatch 2",
        "pubg_game": "PUBG",
        "fortnite_game": "Fortnite"
    };
    element.onclick = function (event) {
        event.preventDefault();

        var mainFrames = document.getElementsByClassName('mainFrame');
        var applicationsFrames = document.getElementsByClassName("applicationsFrame");
        var myprofileFrames = document.getElementsByClassName('myProfileFrame');
        var someoneprofileFrames = document.getElementsByClassName("someoneProfileFrame");

        for (var i = 0; i < someoneprofileFrames.length; i++) {
            someoneprofileFrames[i].style.display = 'none';
        }
        for (var i = 0; i < applicationsFrames.length; i++) {

            var clickedElementId = event.currentTarget.id;
            console.log(event)
            for (let word in vocabulary) {
                if (word.includes(clickedElementId)) {

                    document.querySelector('.application-header h3').textContent = 'Заяви гравців у ' + vocabulary[word];
                }
            }
            applicationsFrames[i].style.display = 'block';

        }
        for (var i = 0; i < mainFrames.length; i++) {
            mainFrames[i].style.display = 'none';
        }

        for (var i = 0; i < myprofileFrames.length; i++) {
            myprofileFrames[i].style.display = 'none';
        }
    }
})

function search() {
    const vocabulary = {
        "dota 2": "dota",
        "league of legends": "lol",
        "minecraft": "minecraft",
        "valorant": "valorant",
        "counter strike 2": "cs2",
        "overwatch 2": "overwatch",
        "pubg": "pubg",
        "fortnite": "fortnite"
    };
    const search_input = document.getElementById('search').value.toLowerCase();
    for (let word in vocabulary) {
        if (word.includes(search_input)) {
            document.getElementById(vocabulary[word]).style.display = "block";
        } else {
            document.getElementById(vocabulary[word]).style.display = "none";
        }
    }
}
