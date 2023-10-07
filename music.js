const canvas = document.getElementById('musicCanvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

const divider = 60;
const colls = width / divider
const rows = colls;

function orangeSquare() {

    context.save();
    context.fillStyle = "white";
    context.fillRect((width / 4) - 13, (height / 4) - 13, width, height); 
    context.restore();

    context.save();
    context.fillStyle = "orange";
    context.fillRect(width / 4, height / 4, width, height);
    context.restore();
};


// Control frame rate by specifying a target frame rate (e.g., 60 frames per second).
const targetFrameRate = 10;
const frameInterval = 1000 / targetFrameRate;

let lastFrameTime = 0;


function drawMe(timestamp) {
    const elapsedTime = timestamp - lastFrameTime;

    if (elapsedTime >= frameInterval) {  

        context.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < divider; i++) {
            for (let j = 0; j < divider; j++){
                const dx = i * colls;
                const dy = j * rows; 

                const rCol = 100 + j * Math.floor(Math.random() * 100);
                const gCol = 3 + j * 12; 
                const bCol = 253;

                const rectColor = "rgb(" + rCol + "," + gCol + "," + bCol + ")";
                const colorRect = rectColor;
                
                context.save();
                context.translate(0, 0);
                context.fillStyle = colorRect;
                context.fillRect(dx, dy, rows, colls);
                context.clearRect(dx + 2, dy + 2, rows * 0.75, colls * 0.75); 
                context.translate(0.02 * i, 0.02 * j);
                context.fillStyle = "#0D0D0D"; 
                context.fillRect(dx + j * 2, dy - Math.floor(Math.random() * 4) * j, rows * Math.random()*0.7, colls * Math.random()); 
                context.strokeRect = "green";
                context.restore();

            }
        }

        // Update the last frame time.
        lastFrameTime = timestamp;

        orangeSquare();
    }
    requestAnimationFrame(drawMe);
}



drawMe();

