let map = new Image(); // Je déclare ma variable map(ma carte) qui est donc une image
map.src = 'img/bureau/bureau.png' ; // Source de l'image

let foreground = new Image();// Je déclare ma variable foreground(objet au premier plan), une image
foreground.src ='img/bureau/foreground.png'; // Source de l'image

let perso = new Image(); // Je déclare ma variable perso(personnage) qui est aussi une image
perso.src = 'img/character/charDown/charD1.png'; // Source de l'image


//Je donne la position initial de mon Personnage sur la carte /!\ MULTIPLE 4 /!\
xPerso = 632;
yPerso = 104;

let tableauDiscussion= { // phrase de base du personnage ou de l'objet
  '8,4' : "Je sais pas ce que je fais ici, je me suis perdu après être passé par la cuisine.. mes souvenirs sont flous.",
  '11,3' : "Cette bibliothèque est pleine de livres.",
  '16,2' : "Quelle belle carte du monde",
  '17,2' : "Quelle belle carte du monde",
  '11,8' : "Ce contrat à l'air important",
  '18,7' : "Y'a pleins de calcul compliqué.. 12 523€.. Pffff..j'aurais pas du boire ces shooter, je comprends rien maintenant.",
  '19,7' : "Y'a pleins de calcul compliqué.. 96 748€.. Pffff..J'aurais pas du boire ces shooter, je comprends rien maintenant.",
  '8,10' : "Y'a un jeu incroyable ! MidNightRun.. Je connaissais pas, je note !",
  '16,10' : "J'aimerai bien voyager.. fin pour ça suffit de retourner à la cuisine.",
  '10,14' : "Je suis retenu ici pour terminer la paperasse... ça m'énerve ! ",
  '19,12' : "Depêches toi, j'ai envie d'aller boire un coup en haut ! ",
  '20,2' : "Il faut un badge  pour descendre plus bas.",
};
// /*Je définis d'abord l'ordre dans le quel je dois parler au personnage pour avancer dans l'histoire.
// Pour éviter un problème d'incrémentation infini, j'utilise deux tableaux. L'ordre est donc de cette manière :
// tableau 1 index 0 -> tableau 2 index 1 -> tableau 1 index 1 -> tableau 2 index 2...
// Ensuite en correspondance à ces tableaux je défini de la même manière l'ordre d'affichage du texte.*/
ordrerToTalk = ['19,12','19,12','19,12','19,12','19,12'];
ordrerToTalk2 = ["null",'11,8','11,3','19,7','10,14','20,2'];

orderText = ["- Ugo : Faut que je finisse la paperasse avant d'aller boire un coup en haut.. tu peux m'aider ? Je te donne le badge de l'ascenceur en échange ! Va me chercher la feuille sur la table, en face de la chaise jaune. ",
             "- Ugo : Mmhhh.. Je vois.. Tu peux aller me chercher un livre sur la comptabilité, il est une des étagères.",
             "- Ugo : Super merci ! J'aurais besoin également du chiffre inscrit sur la droite du tableau stp.",
             "- Toi : Le chiffre c'est  96 738€ !<br> - Ugo : Nickel ! La feuille est rempli, il te reste plus qu'à la donner à la stagiaire et je te donnerai le badge !",
             "- Ugo : Voici le badge, prends en soin."
             ];

orderText2 = ["null",
              "Feuille de comptabilité récupéré !",
              "La compta pour les nuls récupéré",
              "96 738€, faut que je retienne ce chiffre !",
              "- Tiffany : Merci, va récupéré le badge, au moins toi tu pourras partir..",
              "Ascenseur déverouiller"];

function histoire(array,i,j){
  /*Si la clé array correspond à sa clé dans le bonne ordre de passage alors j'affiche le texte crrespondant.
    Si j'ai réalisé toute les quêtes(j==6) alors je passe à la salle suivante.
    Si aucune de ses conditions sont réalisés alors j'affiche le texte de base correspondant à l'objet ou au personnage.*/
  if (array==false) {
    text.innerHTML ="Intéragissez avec un objet ou un personnage."
  }
  else if (i==5) {
    document.location.href="salle4.html";
  }
  else if (array == ordrerToTalk[i]) {
    text.innerHTML = orderText[i];
    j=i+1
  }
  else if(array == ordrerToTalk2[j]){
    text.innerHTML = orderText2[j];
    i=j
  }else {
        text.innerHTML = tableauDiscussion[array];

  }




   return incrementationHistoire1=i,incrementationHistoire2=j;
}

// Tableau des collisions
const collisions =[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 138, 138, 861, 861, 138, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 138, 861, 861, 861, 861, 0, 0, 861, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 861, 138, 138, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 0, 0, 0, 0, 861, 861, 861, 138, 0, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 138, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
