const canvas = document.querySelector('canvas'); // Récupération de mon canvas
const ctx = canvas.getContext('2d'); // Déclaration du contexte de mon canvas, ici 2d
let text = document.getElementById('text');
// définition de la taille de mon canvas :
canvas.width = 960; //largeur de mon canvas
canvas.height = 640;//hauteur de mon canvas

const collisionsMap = []; // J'initialise mon tableau de collisions (hitbox)


let keyE='';//initialisation pour savoir si E est appuyé.

action=['']; // tableau qui va prendre l'id1 et 2 d'un bloc interaction.

//incrémentation pour dérouler l'histoire
let incrementationHistoire1=0;
let incrementationHistoire2=0;

class hitBox{ // class hitbox qui va définir les collisions
    width = 32;
    height = 32;
    postion={};
    blocOrNot='bloc';
    id=null;
    id2=null;
    constructor({position},blocOrNot,id,id2){
        this.position = position;
        this.width = 32;
        this.height = 32;
        this.blocOrNot = blocOrNot;
        this.id = id;
        this.id2 = id2;

    }
      draw(){
        ctx.fillStyle="rgba(255, 255, 255, 0)";
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
};

function animation(direction,nomdossier,incr){

    /*Permet d'animer mon personnage, chaque fois que la variable incrementation est incrémenter de +7
    l'image change. Une fois le cycle d'image finis la variable incrémentation repasse à 0 est le cycle
    recommence.*/

    if (incr == 1) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"1.png"; }
            else if (incr == 8) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"2.png"; }
            else if (incr == 15) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"3.png"; }
            else if (incr == 22) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"4.png"; }
            else if (incr == 29) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"5.png"; }
            else if (incr == 36) {perso.src= "img/character/char"+nomdossier+"/char"+direction+"6.png"; }

}
//création d'un tableau(matrice) correspondant au nombre de colonne et donc ligne que possède ma map
for (let i = 0 ; i < collisions.length; i+=30) {
    collisionsMap.push(collisions.slice(i,30 + i))// slice permet de séléctionner des tranches
}
const limites =[];

collisionsMap.forEach((row,i) =>{ // parcours du tableau, chacune de ses lignes et de ses colonnes
    row.forEach((colonne,j)=>{ // génère un objet avec une position la ou il y a 861 (donc une hitbox)
        if (colonne==861 || colonne ==138) {
            if (colonne == 138) {
                limites.push(
                    new hitBox({
                        position:{
                            x: j*32,
                            y: i*32
                           }
                        },'notBloc',j,i)
                    )
            }else{
                limites.push(
                    new hitBox({
                        position:{
                            x: j*32,
                            y: i*32
                           }
                        },'bloc')
                    )

            }
        }
    })
});

// initialisation des variables qui me permetteront de savoir si j'entre en colisions avec une hitbox
let right = true;
let left = true;
let down = true;
let up = true;
let testright =0;
let testleft =0;
let testup =0;
let testdown =0;
