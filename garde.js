function Garde() {
    this.x = width/2;
    
    this.show = function (url) {
        image(url, this.x - 15, height - 42, 29, 40);
    }
    
}