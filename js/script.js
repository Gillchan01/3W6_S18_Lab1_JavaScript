function genererContenu() {
  // Obtenir le div ou ajouter les éléments:
  let demo = document.getElementById("demo");
  //Effacer le contenu précédent
  demo.innerHTML = "";

  //Lire valeurs du premier formulaire:
  let nombreSections = Number(document.getElementById("qty").value);
  let titre = document.getElementById("titre").value
  let contenu = document.getElementById("contenu").value

  //Boucle 
  for (let i = 0; i < nombreSections; i++){
    //Créer titre et ajouter div
    let h2 = document.createElement("h2");
    h2.textContent = titre + " " + i;
    demo.appendChild(h2);

    //Créer paragraphe et ajouter après titre
    let p = document.createElement("p");
    p.textContent = contenu + " " + i;
    demo.appendChild(p)
  }
}
  
function changerStyle() {
  //Récupérer le div "demo"
  let demo = document.getElementById("demo");
  //Récupérer les éléments p DE DEMO!!!
  let paragraphes = demo.getElementsByTagName("p");
  //Lire couleur du champ couleur
  let couleur = document.getElementById("couleur").value;
  //Parcourir les paragraphes et changer la couleur
  for (let i = 0; i < paragraphes.length; i++){
    paragraphes[i].style.color = couleur;
  }
}
  
function changerClassBoutons() {
  
  //Récupérer les éléments bouton
  let boutons = document.getElementsByTagName("button")
  //Lire contenu du champ btnClass
  let styleBouton = document.getElementById("btnClass").value;

  for (let i = 0; i < boutons.length; i++){
    boutons[i].className = styleBouton
  }
}