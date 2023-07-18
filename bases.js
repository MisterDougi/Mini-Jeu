/* Les bases vont être des "capteurs" pour que l'on puisse
voir si un alien dépace le garde (s'il n'a donc pas été tué) 
ce qui fera perdre le joueur. */


function Bases(x, y) {
    this.x = x;
    this.y = y;
    this.r = 10;
    this.toDelete = false;
    
    this.evaporate = function() {
        this.toDelete = true;
    }
    
    this.show = function() {
        fill(51);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }
}
