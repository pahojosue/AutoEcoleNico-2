// Récupérer l'ID dans l'URL
const id = new URLSearchParams(window.location.search).get('id');

// Charger les données du fichier JSON
fetch('details.json')
.then(res => res.json())
.then(infos => {
    const data = infos[id];

    if (!data) {
        document.querySelector('.content').innerHTML = "<h1>Page introuvable</h1>";
        return;
    }

    // Image principale
    document.getElementById('image-principale').src = data.image_principale;

    // Titre principal et paragraphes
    document.getElementById('titre1').innerText = data.titre;
    document.getElementById('para1').innerText = data.para1;
    document.getElementById('para2').innerText = data.para2;

    // Deux images horizontales
    document.getElementById('image1').src = data.image1;
    document.getElementById('image2').src = data.image2;

    // Paragraphe avant tableau
    document.getElementById('para3').innerText = data.para3;

    // Titre avant tableau
    document.getElementById('titre2').innerText = data.titre2;

    // Remplir le tableau avec 6 lignes
    const tableau = document.getElementById('tableau');
    tableau.innerHTML = "";
    data.tableau.forEach(row => {
        tableau.innerHTML += `<tr><td>${row.nom}</td><td>${row.valeur}</td></tr>`;
    });

    // Titre 3 et paragraphe 4
    document.getElementById('titre3').innerText = data.titre3;
    document.getElementById('para4').innerText = data.para4;

    // Remplir la liste avec 5 éléments
    const liste = document.getElementById('liste');
    liste.innerHTML = "";
    data.liste.forEach(item => {
        liste.innerHTML += `<li><i class="fa-solid fa-check" style="color: #E81D4F; margin-right: 10px;"></i>${item}</li>`;
    });

    // Dernier titre et paragraphe
    document.getElementById('titre4').innerText = data.titre4;
    document.getElementById('para5').innerText = data.para5;
});
