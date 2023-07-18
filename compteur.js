function Compteur() {
    var score = document.getElementById('score');
    var number = score.innerHTML;
    number++;
    score.innerHTML = number;
}