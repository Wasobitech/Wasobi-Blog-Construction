/* =====================================
   WASOBI SMART CONSTRUCTION - MAIN JS
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 80) {
            navbar.style.background = "#0b1f2a";
            navbar.style.padding = "12px 0";
        } else {
            navbar.style.background = "rgba(11,31,42,0.95)";
            navbar.style.padding = "20px 0";
        }
    });

    /* ==========================
       SMOOTH SCROLL
    ========================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            let targetId = this.getAttribute("href");
            if (targetId === "#") return;
            
            let target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

    /* ==========================
       MOBILE MENU CLOSE ON CLICK
    ========================== */
    const navLinks = document.querySelectorAll(".nav-link");
    const menu = document.querySelector("#menu");

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (window.innerWidth < 992) {
                let collapse = bootstrap.Collapse.getInstance(menu);
                if (collapse) {
                    collapse.hide();
                }
            }
        });
    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */
    const counters = document.querySelectorAll(".counter-number");

    counters.forEach(counter => {
        let target = +counter.getAttribute("data-target");
        let count = 0;
        let speed = target / 50; // Kecepatan animasi

        function updateCounter() {
            if (count < target) {
                count += speed;
                counter.innerText = Math.ceil(count);
                setTimeout(updateCounter, 30);
            } else {
                counter.innerText = target + "+";
            }
        }
        updateCounter();
    });

    /* ==========================
       IMAGE LAZY LOAD
    ========================== */
    const images = document.querySelectorAll("img");
    images.forEach(img => {
        img.loading = "lazy";
    });

    /* ==========================
       CURRENT YEAR FOOTER
    ========================== */
    const year = document.querySelector(".year");
    if (year) {
        year.innerText = new Date().getFullYear();
    }

});
