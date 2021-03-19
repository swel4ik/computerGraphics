let canvas = document.getElementById("first_example");
let ctx = canvas.getContext('2d');
ctx.fillStyle = "black";
// ctx.fillRect(0, 0, 50, 50);
// let position = 0;
let shift = 50

let x_left = 1 +shift 
let y = 1+shift
let len = 98

let x_left_down = 50 +shift
let y_down = 100 + shift
let len_down = 0.72

let rotation = 1

function inRad(num) {
	return num * Math.PI / 180;
}

let st = false

function sekelton(x, y, invert=false){
    
    ctx.fillStyle = "yellow"
    ctx.strokeStyle = "black"
    ctx.beginPath()
    ctx.moveTo(x+shift, y+shift)
    ctx.lineTo(x + 100 + shift, y+shift)
    ctx.lineTo(x + 100 + shift, y + 25 + shift)
    ctx.lineTo(x+ 50 + shift, y+ 100 + shift)
    ctx.lineTo(x + shift, y+ 25 + shift)
    ctx.closePath()

    if (invert == false){
    ctx.fill()
    ctx.stroke()
    }
    else { ctx.stroke() }

    ctx.beginPath()
    ctx.moveTo(x+shift, y+200+shift)
    ctx.lineTo(x+100+shift, y+200+shift)
    ctx.lineTo(x+100+shift, y+175+shift)
    ctx.lineTo(x+50+shift, y+100+shift)
    ctx.lineTo(x+shift, y+175+shift)
    ctx.closePath();
    if (invert == false) {
        ctx.stroke();
    }
    else {
        ctx.fill()
        ctx.stroke()
    }
}

sekelton(0,0)
setInterval(function () {
    ctx.fillStyle = "yellow"
    if (y <= 25 + shift){
        ctx.clearRect(x_left, y, len, 1);
        y++
    }

    else if (y > 25 + shift && y < 100 + shift){
        ctx.clearRect(x_left, y, len, 1)
        y++
        x_left += 0.68
        len -= 1.36
    }
    
    if (y_down <= 175 + shift)
    {
        ctx.fillRect(x_left_down, y_down, len_down, 1)
        x_left_down -= 0.67
        y_down++
        len_down += 1.34
    }

    else if (y_down >= 175 + shift && y_down < 200 + shift){
        x_left_down = 1 + shift
        len_down = 98
        ctx.fillRect(x_left_down, y_down, len_down, 1)
        y_down++
    }
    
    if (y_down >= 200 + shift && rotation < 180){ 
        
        if (st == false){
            ctx.translate(50 + shift, 100 + shift)
            st = true
        }
        ctx.clearRect(-500, -500, canvas.width * 2, canvas.height*2);
        ctx.rotate(inRad(2))
        rotation += 2
        sekelton(-100, -150, invert=true)
     
    if (rotation >= 180) {
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(-500, -500, canvas.width * 2, canvas.height*2);
        sekelton(0,0)
        shift = 50
        x_left = 1 + shift 
        y = 1 + shift
        len = 98       
        x_left_down = 50 +shift
        y_down = 100 + shift
        len_down = 0.72        
        rotation = 1
        st = false
        }
    }
 
}, 60);