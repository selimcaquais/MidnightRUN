let map = new Image(); // Je déclare ma variable map(ma carte) qui est donc une image
map.src = 'img/cine/cine.png' ; // Source de l'image

let foreground = new Image();// Je déclare ma variable foreground(objet au premier plan), une image
foreground.src ='img/cine/foreground.png'; // Source de l'image

let perso = new Image(); // Je déclare ma variable perso(personnage) qui est aussi une image
perso.src = 'img/character/charDown/charD1.png'; // Source de l'image


//Je donne la position initial de mon Personnage sur la carte /!\ MULTIPLE 4 /!\
xPerso = 632;
yPerso = 132;

let tableauDiscussion= { // phrase de base du personnage ou de l'objet
  '8,3' : "Cette porte est bloqué pour le moment.",
  '9,9' : "Pourquoi le film ne démarre pas..Je suis sur le film est même pas bien..",
  '11,9' : "Je me suis mis au premier rang pour tout voir !",
  '15,9' : "Ce que je préfère au ciné c'est les popcorns !",
  '17,9' : "J'ai trop hâte que ça commence !",
  '9,12' : "T'façon il meurt à la fin.",
  '12,12' : "Me dérange pas le film va bientôt commencer !",
  '14,12' : "Alors ça avance ? J'ai hâte de voir le film !",
  '17,12' : "Qu'est ce que je fais ici.. Je devrai être à la soirée en haut.. au moins là bas on s'amuse",
  '15,14' : "Le projecteur semble pas bien fonctionner..",
};
// /*Je définis d'abord l'ordre dans le quel je dois parler au personnage pour avancer dans l'histoire.
// Pour éviter un problème d'incrémentation infini, j'utilise deux tableaux. L'ordre est donc de cette manière :
// tableau 1 index 0 -> tableau 2 index 1 -> tableau 1 index 1 -> tableau 2 index 2...
// Ensuite en correspondance à ces tableaux je défini de la même manière l'ordre d'affichage du texte.*/

ordrerToTalk = ['14,12','12,12','9,12','15,14','8,3'];
ordrerToTalk2 = ["null",'17,12','9,9','15,9','14,12'];

orderText = ["- Noah : Je sais que tu veux sortir, mais je te donnerai la clé de la porte uniquement si tu répare le projecteur. Va voir le technicien il t'aidera.",
             "Voici l'ordre ainsi que les objets à récupéré : <br>D'abord le miroir, puis le cable du projecteur, et enfin la clé USB du film. Trouves les personnes qui possèdent ces objets. Quand c'est finis répare le projecteur.",
             "- Théa : Bien vu tu as l'oeil c'est moi qui avait le câble du projecteur.",
             "Projecteur réparé !",
             "Porte ouverte !"
             ];

orderText2 = ["null",
              "- Technicien : Pour réparer le projecteur il te faut des objets précis, il y'a un ordre à respecter pour aller chercher les objets, va voir la personne à gauche de Noah il connait l'ordre.",
              "- Clarisse : Tu m'as trouvé ! C'est moi qui est le miroir. Prends le, tiens.",
              "- Solenn : J'avais caché la clé USB dans mes popcorns mais tu m'as quand même trouvé ! Voici la clé USB !",
              "- Noah : Tiens voilà la clé, me dérange pas plus le film commence !"];
function histoire(array,i,j){
  /*Si la clé array correspond à sa clé dans le bonne ordre de passage alors j'affiche le texte crrespondant.
    Si j'ai réalisé toute les quêtes(j==6) alors je passe à la salle suivante.
    Si aucune de ses conditions sont réalisés alors j'affiche le texte de base correspondant à l'objet ou au personnage.*/
  if (array == false) {
    text.innerHTML ="Intéragissez avec un objet ou un personnage."
  }
  else if (j==5) {
    document.location.href="salle5.html";
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
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0,0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 138, 861, 138, 861, 861, 861, 138, 861, 138, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0,138, 861, 861, 138, 861, 138, 861, 861, 138, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
