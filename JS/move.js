
// Initialisation de la variable d'incrémentation
let incrementation=1;

//EventListener qui s'active lorsqu'une touche est appuyée
document.addEventListener('keypress',function(e){

      let keyPress = e.key; //Récupération de la touche appuyer sous forme d'encodage .key. Exemple : '65'=>'a';

        if (keyPress=='z') {

            /*Si touche flèche du haut pressé alors le perso change de position et la fonction animation
            est appelé*/

            animation("U","Up",incrementation);
            if (incrementation == 36) {
                incrementation=0;
            }
            incrementation+=1
            if (up==true) {
                yPerso-=4 /* pour ne pas avoir de pb de collisions je dois incrémenter ma position (x ou y)
                avec des multiples de 32 car les blocs de hitbox ont une taille de 32*/
            }

          }

        //Répétition des mêmes conditions vu juste au dessus, mais pour les autres flèches directionnelles.

        else if (keyPress=='s') {

            animation("D","Down",incrementation);
            if (incrementation == 36) {
                incrementation=0;
            }
            incrementation+=1
            if (down==true) {
                yPerso+=4
            }

          }

        else if (keyPress=='q') {

            animation("L","Left",incrementation);
            if (incrementation == 36) {
                incrementation=0;
            }
            incrementation+=1
            if (left==true) {
                xPerso-=4
            }

          }

        else if (keyPress=='d') {

            animation("R","Right",incrementation);
            if (incrementation == 36) {
                incrementation=0;
            }
            incrementation+=1
            if (right==true) {
                xPerso+=4
            }

          }
      })
