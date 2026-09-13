// =====================================
// CLOCK
// =====================================

function updateClock() {

    const now = new Date();

    const hours = String(
        now.getHours()
    ).padStart(2, "0");

    const minutes = String(
        now.getMinutes()
    ).padStart(2, "0");

    const seconds = String(
        now.getSeconds()
    ).padStart(2, "0");

    document.getElementById("clock").textContent =
        `${hours}:${minutes}:${seconds}`;
}


updateClock();

setInterval(
    updateClock,
    1000
);



// =====================================
// BIRTHDAY POPUP
// =====================================

const openButton =
    document.getElementById("openButton");

const popup =
    document.getElementById("popup");

const closeX =
    document.getElementById("closeX");

const closeButton =
    document.getElementById("closeButton");



function openPopup() {

    popup.classList.add("active");

}


function closePopup() {

    popup.classList.remove("active");

}



openButton.addEventListener(
    "click",
    openPopup
);


closeX.addEventListener(
    "click",
    closePopup
);


closeButton.addEventListener(
    "click",
    closePopup
);



// =====================================
// CLOSE POPUP WITH BACKGROUND CLICK
// =====================================

popup.addEventListener(
    "click",
    function (event) {

        if (event.target === popup) {

            closePopup();

        }

    }
);



// =====================================
// RANDOM FACT
// =====================================

const randomMessage =
    document.getElementById("randomMessage");

const factButton =
    document.getElementById("factButton");



const facts = [

    "You are officially older than you were yesterday. Congratulations.",

    "Statistically speaking, today is an excellent day for cake.",

    "This website contains an unreasonable amount of purple.",

    "Birthday.exe has detected maximum levels of iconic energy.",

    "Another year has been successfully installed.",

    "Your friendship file has been marked as IMPORTANT.",

    "System analysis complete: you are still awesome.",

    "Warning: excessive birthday vibes detected.",

    "Today's recommended activity: existing dramatically.",

    "Achievement unlocked: ANOTHER YEAR."

];



factButton.addEventListener(
    "click",
    function () {

        const randomIndex =
            Math.floor(
                Math.random() * facts.length
            );

        randomMessage.textContent =
            facts[randomIndex];

    }
);



// =====================================
// MUSIC PLAYER
// =====================================

const musicBox =
    document.getElementById("musicBox");

const birthdaySong =
    document.getElementById("birthdaySong");

const musicStatus =
    document.getElementById("musicStatus");



musicBox.addEventListener(
    "click",
    function () {

        if (
            birthdaySong.paused
        ) {

            birthdaySong.play()
                .then(function () {

                    musicBox.classList.add(
                        "playing"
                    );

                    musicStatus.textContent =
                        "NOW PLAYING ♪";

                })
                .catch(function () {

                    musicStatus.textContent =
                        "CLICK AGAIN TO PLAY ▶";

                });

        }

        else {

            birthdaySong.pause();

            musicBox.classList.remove(
                "playing"
            );

            musicStatus.textContent =
                "PAUSED ❚❚";

        }

    }
);



// =====================================
// MUSIC ENDED
// =====================================

birthdaySong.addEventListener(
    "ended",
    function () {

        musicBox.classList.remove(
            "playing"
        );

        musicStatus.textContent =
            "CLICK TO PLAY ▶";

    }
);



// =====================================
// ESC KEY
// =====================================

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            popup.classList.contains("active")
        ) {

            closePopup();

        }

    }
);