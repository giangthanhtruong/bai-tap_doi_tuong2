class Circle {
    constructor(radius,x,y) {
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.canvas = document.getElementById('my_canvas');
        this.ctx = this.canvas.getContext('2d');
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        this.ctx.stroke();
        this.ctx.closePath();
    }
}