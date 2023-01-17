let map = new Image(); // Je déclare ma variable map(ma carte) qui est donc une image
map.src = 'img/garage/garage.png' ; // Source de l'image

let foreground = new Image();// Je déclare ma variable foreground(objet au premier plan), une image
foreground.src ='img/garage/foreground.png'; // Source de l'image

let perso = new Image(); // Je déclare ma variable perso(personnage) qui est aussi une image
perso.src = 'img/character/charUp/charU1.png'; // Source de l'image


//Je donne la position initial de mon Personnage sur la carte /!\ MULTIPLE 4 /!\
xPerso = 296;
yPerso = 432;

let tableauDiscussion= { // phrase de base du personnage ou de l'objet
  '10,3' : "Les poids léger sont rangé ici.",
  '12,3' : "Les poids moyen sont rangé ici.",
  '14,3' : "Les poids lourd sont rangé ici.",
  '20,3' : "Il y'aurai presque la place de passer à côté du pneu mais il faudrait que la porte du garage soit un peu plus ouverte..",
  '18,8' : "- Pierre : Je m'ennui.. Je vais aller à la cuisine !",
  '8,10' : "Ça à l'air lourd !",
  '19,10' : 'La radio est éteinte pour le moment.',
  '10,11' : "- Mélanie : Moi aussi j'aurais aimé participer à la soirée ! ..mais bon actuellement je suis en médecine.",
  '16,11' : "- Mec musclé : Tu peux aller plus vite, j'ai pas que ça à faire..",
};
// /*Je définis d'abord l'ordre dans le quel je dois parler au personnage pour avancer dans l'histoire.
// Pour éviter un problème d'incrémentation infini, j'utilise deux tableaux. L'ordre est donc de cette manière :
// tableau 1 index 0 -> tableau 2 index 1 -> tableau 1 index 1 -> tableau 2 index 2...
// Ensuite en correspondance à ces tableaux je défini de la même manière l'ordre d'affichage du texte.*/
ordrerToTalk = ['16,11','16,11','16,11','16,11'];
ordrerToTalk2 = ["null",'10,3','19,10','14,3','20,3'];

orderText = ["- Mec musclé : Aide moi à m'échauffer, prouves ta valeur et j'ouvrirai la porte de garage pour que tu puisse passer. Commences par aller me chercher les poids léger.",
             "- Mec musclé : Merci, tu peux mettre la music en route également ?",
             "- Mec musclé : Cool ! Maintenant on passe au choses sérieuse, montre moi que tu sais t'entraîner avec les poids lourds, sinon je serai déçu..",
             "- Mec musclé : Je suis extrêment déçu.. J'ai ouvert le garage suffisament pour que tu passes à gauche des pneus. Dégage de ma vue maintenant !"];

orderText2 = ["null",
              "Poids léger récupéré",
              "Radio allumé",
              "Entraînemant au poids lourd échoué",
              "Porte ouverte"];

function histoire(array,i,j){
  /*Si la clé array correspond à sa clé dans le bonne ordre de passage alors j'affiche le texte crrespondant.
    Si j'ai réalisé toute les quêtes(j==6) alors je passe à la salle suivante.
    Si aucune de ses conditions sont réalisés alors j'affiche le texte de base correspondant à l'objet ou au personnage.*/
  if (array==false) {
    text.innerHTML = 'Intéragissez avec un objet ou un personnage.'
  }
  else if (i==4) {
    document.location.href="fin.html";
  }
  else if (array == ordrerToTalk[i]) {
    text.innerHTML = orderText[i];
    j=i+1
  }
  else if(array == ordrerToTalk2[j]){
    text.innerHTML = orderText2[j];
    i=j
  }else{
   text.innerHTML = tableauDiscussion[array];
  }



   return incrementationHistoire1=i,incrementationHistoire2=j;
}

// Tableau des collisions
const collisions =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 138, 861, 138, 861, 138, 861, 861, 861, 861, 861, 138, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 861, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 138, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 138, 0, 0, 0, 0, 0, 138, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
