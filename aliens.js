function Aliens(x, y) {
    this.x = Math.floor(random(1, 6)) * (320 / 6);                    // 1 <= x < 6 et on arrondie à l'entier inférieur * 100
    
    this.y = random(-200, -50);
    this.yspeed = 1;
    this.r = Math.floor(random(2, 5)) * 8;
    this.toDelete = false;
    
    this.evaporate = function() {
        this.toDelete = true;
    }
    
    this.show = function(url) {
        image(url, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
    }
    
    this.hits = function(bases) {
        var d = dist(this.x, this.y, bases.x, bases.y);
        if (d < this.r + bases.r) { 
            return true;
        } else {
            return false;
        }
    }
    
    this.move = function(augVit) {
        this.yspeed = this.yspeed + 0.03 + augVit;  
        this.y = this.y + this.yspeed;                // vitesse initiale des aliens
    }
}