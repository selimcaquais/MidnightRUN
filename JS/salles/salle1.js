let map = new Image(); // Je déclare ma variable map(ma carte) qui est donc une image
map.src = 'img/salon/SalonParty.png' ; // Source de l'image

let foreground = new Image();// Je déclare ma variable foreground(objet au premier plan), une image
foreground.src ='img/salon/foreground.png'; // Source de l'image

let perso = new Image(); // Je déclare ma variable perso(personnage) qui est aussi une image
perso.src = 'img/character/charDown/charD1.png'; // Source de l'image


//Je donne la position initial de mon Personnage sur la carte
xPerso = 400;
yPerso = 400;

let tableauDiscussion= { // phrase de base du personnage ou de l'objet
  '4,2' : 'Je vais quand même pas fouillez chez les gens sans leur permission !',
  '5,2' : 'Je vais quand même pas fouillez chez les gens sans leur permission !',
  '6,2' : 'Je vais quand même pas fouillez chez les gens sans leur permission !',
  '8,3' : "- Toi : Tu peux m'aider à ouvrir la porte ? <br> - Felix : Je suis en train de lire me dérange pas. ",
  '11,2' : 'La musique est bonne ! :D',
  '20,1' : 'Cette porte parait bloqué pour le moment...',
  '22,2' : 'Il y a tout pleins de snacks ici, ça donne faim !',
  '23,2' : 'Tout ces snacks, ça donne faim, je vais me prendre un !',
  '4,7' : "Ce gateau à l'air délicieux !",
  '5,7' : "Ce gateau à l'air délicieux !",
  '13,6' : "Entrain de prendre un snap de la soirée..",
  '8,8' : "Tu veux encore une clope c'est ça ?!",
  '9,8' : "Je suis en train de parler avec Aleksia ça se voit pas ?",
  '18,8' : "-Karim : Comment je kiff danser, la musique est cool, tu devrais venir danser avec moi.",
  '5,8' : "Je me demande ce qu'il y a dans ce cadeau...",
  '5,9' : "Je me demande ce qu'il y a dans ce cadeau...",
  '15,9' : "-Swanne : C'est ma musique préférée !",
  '13,10' : "J'adore danser !",
  '6,12' : "Je suis pleins phare, mais qu'est ce qu'on s'amuse !",
  '8,13' : "C'est cool le billard ! Aleksia est vraiment devenu riche pour en avoir un chez elle !",
  '21,14' : "J'ai faim...",
  '24,12' : "-Titouan : La soirée est vraiment naze.",
  '24,13' : "-Saverio : Y'a aucune ambiance, en plus ont est même pas bourés."
};
/*Je définis d'abord l'ordre dans le quel je dois parler au personnage pour avancer dans l'histoire.
Pour éviter un problème d'incrémentation infini, j'utilise deux tableaux. L'ordre est donc de cette manière :
tableau 1 index 0 -> tableau 2 index 1 -> tableau 1 index 1 -> tableau 2 index 2...
Ensuite en correspondance à ces tableaux je défini de la même manière l'ordre d'affichage du texte.*/
let ordrerToTalk = ['8,13','8,8','21,14','13,6','13,6','20,1'];
let ordrerToTalk2 = ["null",'13,10','22,2','8,8','11,2','6,2'];

let orderText = ["- Toi : Tu peux m'aider à sortir à la maison ?<br>- Greg : Il faut que tu trouves Aleksia, demandes à son petit frère ou elle est.",
             "- Toi : On m'a dit d'aller te trouver tu peux m'aider à sortir ?<br>- Aleksia : Euh, avant ça tu peux aller donner un snack à ma soeur, c'est celle qui a des cheveux rose.",
             " Soeur de Aleksia : Merci pour le snack !",
             "- Léa : BAISSE LE SON DE L'ENCEINTE JE T'ENTENDS PAS !",
             "- Toi : Je te demandais ou tu as ranger la clé faut que je rejoigne Élise dehors.<br>- Léa : J'ai ranger la clé dans l'armoire.",
             "Porte ouverte !"];

let orderText2 = ["null",
              "- Toi : Peux tu me dire ou est ta grande soeur ?<br>- Petit frère de Aleksia : Elle dansait avec moi, elle est partie ouvrir ces cadeaux je crois..",
              "Snacks récupéré !",
              "- Toi : C'est bon c'est fait !<br>- Aleksia : Pour sortir il te faut la clé de la porte, trouves Léa c'est elle qui l'a rangé. Je crois que Léa est sur son téléphone.",
              "Le son de l'enceinte est maintenant diminué.",
              "Clé récupéré !"];

function histoire(array,i,j){
  /*Si la clé array correspond à sa clé dans le bonne ordre de passage alors j'affiche le texte correspondant.
    Si j'ai réalisé toute les quêtes(j==6) alors je passe à la salle suivante.
    Si aucune de ses conditions sont réalisés alors j'affiche le texte de base correspondant à l'objet ou au personnage.*/
  if (array == false) {
    text.innerHTML ="Intéragissez avec un objet ou un personnage."
  }else if (j==6) {
    document.location.href="salle2.html";
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
const collisions = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 138, 861, 861, 861, 861, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 138, 138, 138, 0, 0, 0, 0, 138, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 138, 138, 0, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 138, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 138, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 861, 138, 0, 0, 138, 138, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 861, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 0, 0, 0, 0, 0, 138, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 861, 861, 861, 138, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 138, 861, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 0, 0, 138, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0,
            0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
