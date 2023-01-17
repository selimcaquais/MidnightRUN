

let map = new Image(); // Je déclare ma variable map(ma carte) qui est donc une image
map.src = 'img/kitchen/kitchen.png' ; // Source de l'image

let foreground = new Image();// Je déclare ma variable foreground(objet au premier plan), une image
foreground.src ='img/kitchen/foreground.png'; // Source de l'image

let perso = new Image(); // Je déclare ma variable perso(personnage) qui est aussi une image
perso.src = 'img/character/charUp/charU1.png'; // Source de l'image


//Je donne la position initial de mon Personnage sur la carte /!\ MULTIPLE 4 /!\
xPerso = 640;
yPerso = 496;

let tableauDiscussion= { // phrase de base du personnage ou de l'objet
  '8,2' : "Le frigo est rempli ! Mais qui l'a laissé ouvert ?!",
  '11,2' : "Je me demande bien ce qui est en train d'être cuisiné.. ça sens très bon !",
  '15,3' : "-Chef Brian : Brian is in the kitchen ! ",
  '19,2' : "Il faut un badge pour déverouiller l'ascenceur",
  '8,5' : "- Gaspard : Woooow j'ai la fonsdalle.. ",
  '11,6' : 'Notre rôle de cuisinier est de nourrir tout ceux qui ont faim !',
  '20,6' : "J'aurais préféré devenir barman...",
  '10,8' : "Mmmhhhh ces donuts ont l'air appétissant..",
  '12,8' : "Ça donne faim !",
  '20,9' : "Tu as pu aider le jeune qui avait faim ?",
  '9,10' : "Il y a vraiment pleins de nourriture ici !",
  '12,10' : "À voir toute cette nourriture moi aussi je vais avoir faim..",
  '8,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '9,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '11,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '12,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '14,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '15,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '17,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
  '18,15' : "L'odeur que dégage ces plantes est incroyable, ça donne envie de goûter...",
};
/*Je définis d'abord l'ordre dans le quel je dois parler au personnage pour avancer dans l'histoire.
Pour éviter un problème d'incrémentation infini, j'utilise deux tableaux. L'ordre est donc de cette manière :
tableau 1 index 0 -> tableau 2 index 1 -> tableau 1 index 1 -> tableau 2 index 2...
Ensuite en correspondance à ces tableaux je défini de la même manière l'ordre d'affichage du texte.*/
let ordrerToTalk = ['20,9','12,8','8,2','14,15','15,3','20,9'];
let ordrerToTalk2 = ["null",'11,6','11,6','11,6','11,6','8,5','19,2'];

let orderText = ["- Chef Lucas : On m'a dit que tu voulais sortir de la maison. Si tu aide le jeune qui à faim je te donnerai le badge de l'ascenceur. Va voir la cuisinière elle t'aidera à préparé à manger.",
             "Saucisson récupéré !",
             "Beurre récupéré !",
             "Ingrédient secret récupéré !",
             "- Chef Brian : Merci, tout est maintenant préparé, il te reste plus qu'à donner ce gâteau spécial à Gaspard",
             "Merci d'avoir aider ce jeune ! Voici le badge de l'ascenceur comme promis !"];

let orderText2 = ["null",
              "- Cuisinière Camille : Pour préparé le plat il te faut les ingrédients, va d'abord chercher du saucisson.",
              "- Cuisinière Camille : Super ! Maintenant va chercher du beurre dans le frigo.",
              "- Cuisinière Camille : Il te reste plus qu'un ingrédient à aller chercher.. l'ingrédient secret ! Il se trouve là ou le papillon bleu butine.",
              "- Cuisinière Camille : Maintenant donne ses ingrédients au chef Brian, il t'aidera à cuisiné.",
              "- Gaspard : Merci je me sens encore mieux qu'avant ! Il est ouf ce gâteau !!",
              "Ascenseur déverouiller !"];

function histoire(array,i,j){
  /*Si la clé array correspond à sa clé dans le bonne ordre de passage alors j'affiche le texte crrespondant.
    Si j'ai réalisé toute les quêtes(j==6) alors je passe à la salle suivante.
    Si aucune de ses conditions sont réalisés alors j'affiche le texte de base correspondant à l'objet ou au personnage.*/
   if (array == false) {
    text.innerHTML ="Intéragissez avec un objet ou un personnage."
  }else if (i==6) {
    document.location.href="salle3.html";
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
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 0, 0, 138, 861, 861, 861, 861, 861, 861, 0, 138, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 138, 0, 0, 0, 0, 0, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 0, 138, 0, 0, 0, 0, 0, 0, 0, 0, 138, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 138, 861, 138, 861, 861, 861, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 138, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 138, 861, 861, 138, 861, 861, 861, 0, 0, 0, 0, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 0, 861, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 138, 138, 0, 138, 138, 0, 138, 138, 0, 138, 138, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 0, 861, 861, 0, 861, 861, 0, 861, 861, 0, 0, 0, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 861, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
