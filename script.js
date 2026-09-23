/* ==========================================
   ELEMENTS
========================================== */

const header =
    document.getElementById("header");

const themeButton =
    document.getElementById("themeButton");

const menuButton =
    document.getElementById("menuButton");

const navMenu =
    document.getElementById("navMenu");

const navLinks =
    document.querySelectorAll(".nav-link");

const backToTop =
    document.getElementById("backToTop");



/* ==========================================
   HEADER SCROLL
========================================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }


    if (window.scrollY > 500) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});



/* ==========================================
   MOBILE MENU
========================================== */

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("open");


    if (navMenu.classList.contains("open")) {

        menuButton.textContent = "✕";

    } else {

        menuButton.textContent = "☰";

    }

});


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        menuButton.textContent = "☰";

    });

});



/* ==========================================
   DARK MODE
========================================== */

const savedTheme =
    localStorage.getItem("portfolioTheme");


if (savedTheme === "dark") {

    document.body.classList.add("dark-theme");

    themeButton.textContent = "☀️";

}


themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-theme");


    const isDark =
        document.body.classList.contains(
            "dark-theme"
        );


    if (isDark) {

        themeButton.textContent = "☀️";

        localStorage.setItem(
            "portfolioTheme",
            "dark"
        );

    } else {

        themeButton.textContent = "🌙";

        localStorage.setItem(
            "portfolioTheme",
            "light"
        );

    }

});



/* ==========================================
   TYPING EFFECT
========================================== */

const typingText =
    document.getElementById("typingText");


const typingWords = [

    "modern websites.",

    "responsive interfaces.",

    "digital experiences.",

    "creative projects."

];


let wordIndex = 0;

let characterIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1300
            );

            return;

        }

    } else {

        typingText.textContent =
            currentWord.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) %
                typingWords.length;

        }

    }


    const typingSpeed =
        deleting
            ? 45
            : 80;


    setTimeout(
        typingEffect,
        typingSpeed
    );

}


typingEffect();



/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);



/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters =
    document.querySelectorAll(".counter");


let countersStarted = false;


const counterSection =
    document.querySelector(
        ".stats-section"
    );


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting &&
                        !countersStarted
                    ) {

                        countersStarted = true;

                        startCounters();

                    }

                }
            );

        },

        {
            threshold: 0.3
        }

    );


counterObserver.observe(counterSection);



function startCounters() {

    counters.forEach(
        (counter) => {

            const target =
                Number(
                    counter.dataset.target
                );

            const suffix =
                counter.dataset.suffix || "";

            let current = 0;


            const increment =
                Math.max(
                    1,
                    Math.ceil(
                        target / 50
                    )
                );


            const timer =
                setInterval(
                    () => {

                        current +=
                            increment;


                        if (
                            current >=
                            target
                        ) {

                            current =
                                target;

                            clearInterval(
                                timer
                            );

                        }


                        counter.textContent =
                            current +
                            suffix;

                    },
                    30
                );

        }
    );

}



/* ==========================================
   SKILL PROGRESS
========================================== */

const progressPanel =
    document.querySelector(
        ".progress-panel"
    );


const progressBars =
    document.querySelectorAll(
        ".progress-fill"
    );


let progressStarted = false;


const progressObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting &&
                        !progressStarted
                    ) {

                        progressStarted = true;


                        progressBars.forEach(
                            (bar) => {

                                const width =
                                    bar.dataset.width;

                                bar.style.width =
                                    width + "%";

                            }
                        );

                    }

                }
            );

        },

        {
            threshold: 0.25
        }

    );


progressObserver.observe(progressPanel);



/* ==========================================
   PROJECT FILTER
========================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-button"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    (button) => {

        button.addEventListener(
            "click",
            () => {


                filterButtons.forEach(
                    (item) => {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                projectCards.forEach(
                    (card) => {

                        const category =
                            card.dataset.category;


                        if (
                            filter === "all" ||
                            category === filter
                        ) {

                            card.classList.remove(
                                "hidden"
                            );

                        } else {

                            card.classList.add(
                                "hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);



/* ==========================================
   FAQ
========================================== */

const faqItems =
    document.querySelectorAll(
        ".faq-item"
    );


faqItems.forEach(
    (item) => {

        const question =
            item.querySelector(
                ".faq-question"
            );

        const answer =
            item.querySelector(
                ".faq-answer"
            );


        question.addEventListener(
            "click",
            () => {


                const isActive =
                    item.classList.contains(
                        "active"
                    );


                faqItems.forEach(
                    (otherItem) => {

                        otherItem.classList.remove(
                            "active"
                        );


                        const otherAnswer =
                            otherItem.querySelector(
                                ".faq-answer"
                            );


                        otherAnswer.style.maxHeight =
                            null;

                    }
                );


                if (!isActive) {

                    item.classList.add(
                        "active"
                    );


                    answer.style.maxHeight =
                        answer.scrollHeight +
                        "px";

                }

            }
        );

    }
);



/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollPosition =
            window.scrollY + 160;


        sections.forEach(
            (section) => {

                const sectionTop =
                    section.offsetTop;

                const sectionHeight =
                    section.offsetHeight;

                const sectionId =
                    section.getAttribute(
                        "id"
                    );


                if (
                    scrollPosition >=
                        sectionTop &&
                    scrollPosition <
                        sectionTop +
                        sectionHeight
                ) {


                    navLinks.forEach(
                        (link) => {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${sectionId}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            }
        );

    }
);



/* ==========================================
   BACK TO TOP
========================================== */

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }
);



/* ==========================================
   CONTACT FORM DEMO
========================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formStatus =
    document.getElementById(
        "formStatus"
    );


contactForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        formStatus.textContent =
            "Thanks! Your message has been received in this demo.";


        contactForm.reset();


        setTimeout(
            () => {

                formStatus.textContent =
                    "";

            },
            4000
        );

    }
);



/* ==========================================
   CLOSE MENU WHEN CLICKING OUTSIDE
========================================== */

document.addEventListener(
    "click",
    (event) => {

        const clickedInsideMenu =
            navMenu.contains(
                event.target
            );

        const clickedMenuButton =
            menuButton.contains(
                event.target
            );


        if (
            !clickedInsideMenu &&
            !clickedMenuButton &&
            navMenu.classList.contains(
                "open"
            )
        ) {

            navMenu.classList.remove(
                "open"
            );

            menuButton.textContent =
                "☰";

        }

    }
);