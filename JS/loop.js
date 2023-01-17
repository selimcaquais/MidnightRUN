// function qui permet de rafraichir en permanence l'image afin de faire bouger mon personnage
function anime() {
    right=true;
    testright=0;
    left=true;
    testleft=0;
    up=true;
    testup=0;
    down=true;
    testdown=0;
    document.addEventListener('keydown', event=>{//Récupération de touche pressé.
        let keyPress = event.key;
        keyE = keyPress
        })

    ctx.drawImage(map,0,0);

   limites.forEach(limite =>{
         limite.draw()
         /* si le y de mon perso plus sa height est égale au y de ma hitbox
         et que le x de mon perso plus sa width est supérieur au x de ma hitbox
         et que le x de mon perso est inférieur au x de ma hitbox plus ma width
         alors je ne peux pas descendre*/
         if (yPerso+48 == limite.position.y && xPerso+32>limite.position.x
            && xPerso< limite.position.x + limite.width) {
                testdown +=1;
            if (limite.blocOrNot == 'notBloc' && keyE=='e') {
                /*Si lors de la collision la touche E est pressé alors action prends comme valeur
                Id1 et Id2 du bloc contre lequel je suis en collision*/
                    action=[limite.id,limite.id2];
                }
         }
         if (yPerso == limite.position.y+limite.height && xPerso+32>limite.position.x
            && xPerso< limite.position.x + limite.width) {
                testup +=1;
            if (limite.blocOrNot == 'notBloc' && keyE=='e') {
                    action=[limite.id,limite.id2];
                }
         }
         if (xPerso+32 == limite.position.x && yPerso+48 >limite.position.y
            && yPerso< limite.position.y + limite.height) {
                testright +=1;
            if (limite.blocOrNot == 'notBloc' && keyE=='e') {
                    action=[limite.id,limite.id2];
                }
         }
         if (xPerso == limite.position.x+limite.width && yPerso+48 >limite.position.y
            && yPerso< limite.position.y + limite.height) {
                testleft +=1;
                if (limite.blocOrNot == 'notBloc' && keyE=='e') {
                    action=[limite.id,limite.id2];
                }
         }
    })

    if (testright>0) {
        right=false
    }
    if (testleft>0) {
        left=false
    }
    if (testup>0) {
        up=false
    }
    if (testdown>0) {
        down=false
    }
    ctx.drawImage(perso,xPerso,yPerso,32,48);// Je dessine mon personnage width et height multiple de 4(pour qu'il n'y ai pas de problèmes de collisions )
    ctx.drawImage(foreground,0,0);//Je dessine tout les éléments de décors ou mon personnage va passer derrière.
    action = action.toString()// action devient une chaine de caractères.
    histoire(action,incrementationHistoire1,incrementationHistoire2);// appelle de ma fonction histoire.
    requestAnimationFrame(anime);//pour looper ma fonction s'apelle elle même

}



anime() // appel de la fonction anime définit plus haut.

