/* =====================================================
   KNOWLEDGE SPACE
   JAVASCRIPT
===================================================== */


/* =====================================================
   NAVIGATION
===================================================== */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {

        selectedPage.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
}


/* =====================================================
   MENUS DÉROULANTS
===================================================== */

document.addEventListener("DOMContentLoaded", function() {

    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(function(dropdown) {

        const button = dropdown.querySelector(".dropbtn");

        if (!button) {
            return;
        }

        button.addEventListener("click", function(event) {

            event.stopPropagation();

            dropdowns.forEach(function(otherDropdown) {

                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("open");
                }

            });

            dropdown.classList.toggle("open");

        });

    });


    /* Fermer les menus lorsqu'on clique ailleurs */

    document.addEventListener("click", function() {

        dropdowns.forEach(function(dropdown) {
            dropdown.classList.remove("open");
        });

    });

});


/* =====================================================
   EXPLORER
===================================================== */

function selectUniverse(universe) {

    showPage("explorer");

    setTimeout(function() {

        alert(
            "Tu explores maintenant l'univers : " + universe
        );

    }, 250);

}


/* =====================================================
   APPRENDRE
===================================================== */

function createLearningPath() {

    const input = document.getElementById("learningInput");
    const levelSelect = document.getElementById("level");
    const result = document.getElementById("learningResult");

    if (!input || !levelSelect || !result) {
        return;
    }

    const subject = input.value.trim();
    const level = levelSelect.value;


    /* Vérification */

    if (subject === "") {

        result.innerHTML = `
            <div class="result">

                <strong>Que souhaites-tu apprendre ?</strong>

                <p>
                    Écris un sujet pour créer ton parcours personnalisé.
                </p>

            </div>
        `;

        return;
    }


    /* Création du parcours */

    result.innerHTML = `

        <div class="result">

            <span class="tag">
                PARCOURS PERSONNALISÉ
            </span>

            <h3>
                Ton parcours est prêt 🚀
            </h3>

            <p>
                <strong>Sujet :</strong>
                ${escapeHTML(subject)}
            </p>

            <p>
                <strong>Niveau :</strong>
                ${escapeHTML(level)}
            </p>

            <div class="mini-path">

                <div>
                    <strong>01</strong>
                    Prérequis
                </div>

                <div>
                    <strong>02</strong>
                    Fondamentaux
                </div>

                <div>
                    <strong>03</strong>
                    Approfondissement
                </div>

                <div>
                    <strong>04</strong>
                    Maîtrise
                </div>

            </div>

            <br>

            <button
                class="primary"
                onclick="startLearning()">

                Commencer le parcours

            </button>

        </div>

    `;


    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}


/* =====================================================
   DÉMARRER UN PARCOURS
===================================================== */

function startLearning() {

    alert(
        "Ton parcours d'apprentissage va bientôt commencer 🚀"
    );

}


/* =====================================================
   PROJETS
===================================================== */

function createProject() {

    const name = prompt(
        "Quel est le nom de ton Space Project ?"
    );


    if (!name || name.trim() === "") {
        return;
    }


    const description = prompt(
        "Quel est l'objectif du projet ?"
    );


    const projectList =
        document.getElementById("projectList");


    if (!projectList) {
        return;
    }


    const project =
        document.createElement("article");


    project.className = "project-card";


    project.innerHTML = `

        <span class="status">
            NOUVEAU PROJET
        </span>

        <h2>
            ${escapeHTML(name)}
        </h2>

        <p>
            ${
                escapeHTML(
                    description ||
                    "Projet collaboratif de connaissances."
                )
            }
        </p>

        <div class="project-info">
            👤 1 collaborateur
        </div>

        <button onclick="openProject()">
            Ouvrir le projet →
        </button>

    `;


    projectList.prepend(project);


    alert(
        "Ton Space Project a été créé ! 🚀"
    );

}


/* =====================================================
   OUVRIR UN PROJET
===================================================== */

function openProject() {

    alert(
        "L'espace collaboratif du projet sera développé dans une prochaine version."
    );

}


/* =====================================================
   CONNEXION
===================================================== */

const loginButton =
    document.querySelector(".login");


if (loginButton) {

    loginButton.addEventListener("click", function() {

        alert(
            "La connexion utilisateur sera disponible dans une prochaine version."
        );

    });

}


/* =====================================================
   UTILITAIRE DE SÉCURITÉ
===================================================== */

function escapeHTML(text) {

    const div = document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


/* =====================================================
   ANIMATION AU CHANGEMENT DE PAGE
===================================================== */

function animateCards() {

    const activePage =
        document.querySelector(".page.active");

    if (!activePage) {
        return;
    }

    const cards =
        activePage.querySelectorAll(
            ".action-card, .universe, .concept, .project-card, article"
        );


    cards.forEach(function(card, index) {

        card.style.animationDelay =
            (index * 0.05) + "s";

    });

}


/* =====================================================
   INITIALISATION
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        animateCards();

    }
);
