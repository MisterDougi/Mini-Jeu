function Projectile(x, y) {
    this.x = x;
    this.y = y;
    this.r = 8;
    this.toDelete = false;
    
    this.show = function(url) {
        image(url, this.x-2, this.y, this.r*2, this.r*2);
    }
    
    this.evaporate = function() {
        this.toDelete = true;
    }
    
    this.hits = function(aliens) {
        var d = dist(this.x, this.y, aliens.x, aliens.y);
        if (d < this.r + aliens.r) {
            return true;
        } else {
            return false;
        }
    }
    
    this.move = function() {
        this.y = this.y - 5;
    }
}
