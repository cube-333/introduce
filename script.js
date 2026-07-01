// ================================
// 더 알아보기 버튼
// ================================

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {

        document.getElementById("about").scrollIntoView({
            behavior: "smooth"
        });

    });
}



// ================================
// 오늘의 한마디
// ================================

const quotes = [

    "오늘도 새로운 것을 배워봐요! 😊",

    "실패는 성공의 시작입니다. 💪",

    "꾸준함은 최고의 재능입니다. ⭐",

    "도전하는 사람이 성장합니다. 🚀",

    "작은 노력도 큰 결과를 만듭니다. 🌱"

];

const quoteBtn = document.getElementById("quoteBtn");
const quoteText = document.getElementById("quoteText");

if (quoteBtn) {

    quoteBtn.addEventListener("click", function () {

        const random = Math.floor(Math.random() * quotes.length);

        quoteText.textContent = quotes[random];

    });

}



// ================================
// 버킷리스트 체크
// ================================

const bucketItems = document.querySelectorAll("#bucket li");

bucketItems.forEach(function (item) {

    item.addEventListener("click", function () {

        if (item.textContent.includes("☐")) {

            item.textContent = item.textContent.replace("☐", "☑");

        }

        else {

            item.textContent = item.textContent.replace("☑", "☐");

        }

    });

});



// ================================
// 작품 자세히 보기
// ================================

const detailButtons = document.querySelectorAll(".detailBtn");

detailButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const detail = button.nextElementSibling;

        if (detail.style.display === "block") {

            detail.style.display = "none";

            button.textContent = "자세히 보기";

        }

        else {

            detail.style.display = "block";

            button.textContent = "닫기";

        }

    });

});



// ================================
// 맨 위 버튼
// ================================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    }

    else {

        topBtn.style.display = "none";

    }

});


topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ================================
// 메뉴 클릭 시 부드럽게 이동
// ================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const targetId = this.getAttribute("href");

        const target = document.querySelector(targetId);

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});