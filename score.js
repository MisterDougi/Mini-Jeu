// ceci devrait être un compteur de point, mais je n'arrive pas à le faire fonctionner, un conseil ?


var Number = 0;                     // var nombre à rentrer dans score (va compter le score)
var s = new String();               // var affichage score

setInterval(affiche , 100 );        // affichage se renouvel tout les 100millisecondes
var score;                          // var score à afficher
var a;                              // compteur/décrémentation

function affiche() {
        score = Number.toString();                            // on donne a score la valeur d'affichage Number
        a = 7;
        for(var d = score.length-1 ; d >= 0 ; d--) {          // boucle pour d >= 0 avec d = dcore.length-1 (càd la longueur de                                                                     la variable en caractère) 
                s = score.substr(d, 1);                       // /?\
                a--;
                this["cp"+a].gotoAndStop(Number + 1);         // on affiche en temps réel le score, on stop, et on recommence.
        }
        Number += 1;
};