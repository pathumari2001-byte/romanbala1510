// ==============================
// SEARCH
// ==============================
const search = document.getElementById("search");

if (search) {
    search.addEventListener("keyup", function () {

        const value = search.value.toLowerCase();
        const cards = document.querySelectorAll(".game-card");

        cards.forEach(function (card) {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });
}

// ==============================
// IMAGE SLIDER
// ==============================
const slides = document.querySelectorAll(".slide");

if (slides.length > 0) {

    let current = 0;

    setInterval(function () {

        slides[current].classList.remove("active");

        current++;

        if (current >= slides.length) {
            current = 0;
        }

        slides[current].classList.add("active");

    }, 3000);

}

// ==============================
// PASSWORD SHOW / HIDE
// ==============================
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

if (password && togglePassword) {

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {
            password.type = "text";
            togglePassword.innerHTML = "🙈";
        } else {
            password.type = "password";
            togglePassword.innerHTML = "👁️";
        }

    });

}

// ==========================
// Register
// ==========================

const registerBtn = document.getElementById("registerBtn");

if (registerBtn) {

    registerBtn.addEventListener("click", function () {

        const fullName = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const username = document.getElementById("regUsername").value;
        const password = document.getElementById("regPassword").value;

        if (fullName === "" || email === "" || username === "" || password === "") {

            alert("Please fill all fields!");
            return;

        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    });

}


// ==========================
// Login
// ==========================

const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", function () {

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (username === savedUsername && password === savedPassword) {

            localStorage.setItem("loggedIn", "true");

            alert("Login Successful!");

            window.location.href = "index.html";

        } else {

            alert("Invalid Username or Password!");

        }

    });

}

// ==============================
// WELCOME USER
// ==============================
const welcomeUser = document.getElementById("welcomeUser");

if (welcomeUser) {

    const user = localStorage.getItem("username");

    if (user) {
        welcomeUser.innerHTML = "Welcome, " + user;
    }

}

// ==============================
// LOGOUT
// ==============================
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function () {

        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("loggedIn");

        alert("Logged Out Successfully!");

        window.location.href = "login.html";

    });

}

// ==============================
// FAVORITE
// ==============================
const hearts = document.querySelectorAll(".favorite");

hearts.forEach(function (heart) {

    heart.addEventListener("click", function (e) {

        e.stopPropagation();

        if (heart.innerHTML == "🤍") {
            heart.innerHTML = "❤️";
        } else {
            heart.innerHTML = "🤍";
        }

    });

});

// ==============================
// RATING
// ==============================
const ratings = document.querySelectorAll(".rating");

ratings.forEach(function (rating) {

    const stars = rating.querySelectorAll("span");

    stars.forEach(function (star, index) {

        star.addEventListener("click", function (e) {

            e.stopPropagation();

            stars.forEach(function (s) {
                s.style.color = "white";
            });

            for (let i = 0; i <= index; i++) {
                stars[i].style.color = "gold";
            }

        });

    });

});

// ==============================
// GAME POPUP
// ==============================
const popup = document.getElementById("popup");

if (popup) {

    const popupImage = document.getElementById("popupImage");
    const popupTitle = document.getElementById("popupTitle");
    const popupText = document.getElementById("popupText");
    const closePopup = document.getElementById("closePopup");

    const cards = document.querySelectorAll(".game-card");

    cards.forEach(function (card) {

        card.addEventListener("click", function () {

            popup.style.display = "flex";

            popupImage.src = card.querySelector("img").src;

            popupTitle.innerHTML = card.querySelector("h3").innerHTML;

            popupText.innerHTML =
                "This is one of the most popular games available on GameVerse.";

        });

    });

    if (closePopup) {

        closePopup.addEventListener("click", function () {

            popup.style.display = "none";

        });

    }

}

// ==============================
// DARK MODE
// ==============================
const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.innerHTML = "🌞";
        } else {
            themeBtn.innerHTML = "🌙";
        }

    });

}

// ==============================
// LOADING SCREEN
// ==============================
window.addEventListener("load", function () {

    setTimeout(function () {

        const loader = document.getElementById("loader");

        if (loader) {
            loader.style.display = "none";
        }

    }, 3000);

});
// =============================
// CATEGORY FILTER
// =============================

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach(button => {

    button.addEventListener("click", function(){

        const filter = this.dataset.filter;

        document.querySelectorAll(".game-card").forEach(card => {

            if(filter === "all" || card.dataset.category === filter){
                card.style.display = "block";
            }else{
                card.style.display = "none";
            }

        });

    });

});
// ==============================
// Game Details Button
// ==============================

const detailsButtons = document.querySelectorAll(".details-btn");

detailsButtons.forEach(function(btn){

    btn.addEventListener("click", function(e){

        e.stopPropagation();

        const gameName = this.parentElement.querySelector("h3").innerText;

        if(gameName === "Free Fire"){

            alert(
`🎮 Free Fire

Developer : Garena

Genre : Battle Royale

Players : 50

Platform : Android / iOS

Rating : ⭐⭐⭐⭐⭐`
            );

        }

        else if(gameName === "BGMI"){

            alert(
`🎮 BGMI

Developer : Krafton

Genre : Battle Royale

Players : 100

Platform : Android / iOS

Rating : ⭐⭐⭐⭐⭐`
            );

        }

        else if(gameName === "GTA V"){

            alert(
`🎮 GTA V

Developer : Rockstar Games

Genre : Action Adventure

Platform : PC / PS5 / Xbox

Rating : ⭐⭐⭐⭐⭐`
            );

        }

        else if(gameName === "Minecraft"){

            alert(
`🎮 Minecraft

Developer : Mojang

Genre : Sandbox

Platform : PC / Android / iOS

Rating : ⭐⭐⭐⭐⭐`
            );

        }

    });

});
// Download Counter

const downloadButtons = document.querySelectorAll(".download-btn");

downloadButtons.forEach(function(btn){

    btn.addEventListener("click", function(){

        const count = this.nextElementSibling.querySelector("span");

        let downloads = Number(count.innerText);

        downloads++;

        count.innerText = downloads;

        alert("Download Started!");

    });

});
// Auto Search Suggestions

const suggestionBox = document.getElementById("suggestions");

if (search && suggestionBox) {

    search.addEventListener("input", function () {

        const value = this.value.toLowerCase();

        suggestionBox.innerHTML = "";

        document.querySelectorAll(".game-card").forEach(function(card){

            const title = card.querySelector("h3").innerText;

            if(title.toLowerCase().includes(value) && value !== ""){

                const item = document.createElement("div");

                item.innerText = title;

                item.onclick = function(){

                    search.value = title;

                    suggestionBox.innerHTML = "";

                };

                suggestionBox.appendChild(item);

            }

        });

    });

}
// Reviews

const reviewBtn = document.getElementById("reviewBtn");

if(reviewBtn){

    reviewBtn.addEventListener("click", function(){

        const name = document.getElementById("reviewName").value;
        const review = document.getElementById("reviewText").value;

        if(name === "" || review === ""){
            alert("Please fill all fields");
            return;
        }

        const card = document.createElement("div");
        card.className = "review-card";

        card.innerHTML =
        "<h3>" + name + "</h3><p>" + review + "</p>";

        document.getElementById("reviewList").appendChild(card);

        document.getElementById("reviewName").value = "";
        document.getElementById("reviewText").value = "";

    });

}
// =========================
// Back To Top Button
// =========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", function(){

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});
// =========================
// Mobile Menu
// =========================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if(menuToggle && navMenu){

    menuToggle.addEventListener("click", function(){

        navMenu.classList.toggle("active");

    });

}
