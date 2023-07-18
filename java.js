var garde;
var bases = [];
var aliens = [];
var projectiles = [];
var score;
var scoreInc;
var augVit;
var bg;
var al;
var pr;
var ga;

function setup() {
  // fonction d'initialisation (fond / garde / aliens / reset)
  augVit = 0;

  for (var i = 0; i < projectiles.length; i++) {
    projectiles[i].evaporate();
  }
  for (var l = 0; l < aliens.length; l++) {
    aliens[l].evaporate();
  }

  score = document.getElementById("score");
  score.innerHTML = 0;

  bg = loadImage("img/Fond.jpg");
  al = loadImage("img/Biomasse.png");
  ga = loadImage("img/Garde.png");
  pr = loadImage("img/Tir.png");

  createCanvas(320, 480);

  garde = new Garde();

  for (var j = 0; j < 5; j++) {
    bases[j] = new Bases(j * 50 + 60, height + 9);
  }
  for (var k = 0; k < 3; k++) {
    aliens[k] = new Aliens(k * 50 + 60, 0);
  }
}

function draw() {
  // fonction d'affichage
  background(bg);
  garde.show(ga);

  for (var i = 0; i < projectiles.length; i++) {
    // boucle pour faire avancer le projectile
    projectiles[i].show(pr);
    projectiles[i].move();
    for (var j = 0; j < aliens.length; j++) {
      if (projectiles[i].hits(aliens[j])) {
        // si projectile touche alien
        aliens[j].evaporate(); // effacer un alien
        projectiles[i].evaporate(); // effacer un projectile
        aliens[j] = new Aliens(i * 50 + 35, 0); // recreer un alien

        score = document.getElementById("score"); // Compteur
        scoreInc = score.innerHTML; // Compteur
        scoreInc++; // Compteur
        score.innerHTML = scoreInc; // Compteur

        if (scoreInc > 15) {
          augVit = 0.0015;
        }
        if (scoreInc > 30) {
          augVit = 0.003;
        }
        if (scoreInc > 45) {
          augVit = 0.006;
        }
        if (scoreInc > 60) {
          augVit = 0.012;
        }
        if (scoreInc > 75) {
          augVit = 0.024;
        }
        if (scoreInc > 105) {
          augVit = 0.048;
        }

        if (scoreInc == 10) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 20) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 30) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 40) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 50) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 60) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 70) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 80) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
        if (scoreInc == 90) {
          aliens.push(new Aliens(j * 50 + 60, 0));
        }
      }
    }
  }

  for (var i = 0; i < aliens.length; i++) {
    aliens[i].show(al);
    aliens[i].move(augVit);
    for (var j = 0; j < bases.length; j++) {
      if (aliens[i].hits(bases[j])) {
        // si alien touche base
        scoreInc = score.innerHTML;
        alert("Game Over. Votre score est de " + scoreInc + "."); // affiche Game Over.
        setup();
      }
    }
  }

  for (var i = 0; i < bases.length; i++) {
    bases[i].show();
  }

  for (var i = projectiles.length - 1; i >= 0; i--) {
    if (projectiles[i].toDelete) {
      projectiles.splice(i, 1);
    }
  }

  for (var j = aliens.length - 1; j >= 0; j--) {
    if (aliens[j].toDelete) {
      aliens.splice(j, 1);
    }
  }
}

function keyPressed() {
  // fonction clavier
  if (keyCode === UP_ARROW) {
    // fleche_haut
    var projectile = new Projectile(garde.x, height - 50); // envoyer un projectile
    projectiles.push(projectile); // permet d'en envoyer plusieurs (spam)
  }

  if (garde.x < 260) {
    // éviter que le garde dépace sur la droite
    if (keyCode === RIGHT_ARROW)
      // fleche_droite
      garde.x = garde.x + 53; // le garde se déplace sur la droite
  }

  if (garde.x > 60) {
    // éviter que le garde dépace sur la gauche
    if (keyCode === LEFT_ARROW)
      // fleche_gauche
      garde.x = garde.x - 53; // le garde se déplace sur la gauche
  }
}
