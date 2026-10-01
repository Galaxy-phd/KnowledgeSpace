/* =========================
   NAVIGATION
========================= */

function showPage(pageName) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageName);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


/* =========================
   EXPLORER
========================= */

function selectUniverse(universe) {

    alert(
        "Tu explores maintenant l'univers : " + universe
    );

}


/* =========================
   APPRENDRE
========================= */

function createLearningPath() {

    const subject =
        document.getElementById("learningInput").value;

    const level =
        document.getElementById("level").value;

    const result =
        document.getElementById("learningResult");


    if (subject.trim() === "") {

        result.innerHTML = `
            <div class="result">
                 cris d'abord ce que tu souhaites comprendre.
            </div>
        `;

        return;
    }


    result.innerHTML = `
        <div class="result">

            <strong>Ton parcours est pr t.</strong>

            <p>
                Sujet : ${subject}
            </p>

            <p>
                Niveau : ${level}
            </p>

            <br>

            <p>
                ? Pr requis
                ? ? Fondamentaux
                ? ? Interm diaire
                ? ? Approfondissement
            </p>

            <br>

            <button
                class="primary"
                onclick="alert('Le parcours sera bient t disponible.')">

                Commencer

            </button>

        </div>
    `;
}


/* =========================
   PROJETS
========================= */

function createProject() {

    const name = prompt(
        "Quel est le nom de ton Space Project ?"
    );

    if (!name) {
        return;
    }


    const description = prompt(
        "Quel est l'objectif du projet ?"
    );


    const projectList =
        document.getElementById("projectList");


    const project = document.createElement("article");

    project.className = "project-card";


    project.innerHTML = `

        <span class="status">
            NOUVEAU PROJET
        </span>

        <h2>
            ${name}
        </h2>

        <p>
            ${description || "Projet collaboratif de connaissances."}
        </p>

        <div class="project-info">
            ?? 1 collaborateur
        </div>

        <button onclick="openProject()">
            Ouvrir le projet ?
        </button>

    `;


    projectList.prepend(project);
}


function openProject() {

    alert(
        "L'espace collaboratif du projet sera d velopp  dans la prochaine version."
    );

}