canvas = document.getElementById("myCanvas");
ctx  = canvas.getContext("2d");

CAR_width  = 100;
CAR_height = 90;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

CAR_x  = 10;
CAR_y = 10;

function add() {
	background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
 
    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;

}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);


}

function uploadgreencar() {
	ctx.drawImage(greencar_imageTag, CAR_x, CAR_y, CAR_width, CAR_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (CAR_y >=0)
    {
        CAR_y = CAR_y - 10;
        console.log("When up arrow is pressed, x=" + CAR_x + " | y = " +CAR_y );
        uploadBackground();
        uploadgreencar();

    }
}

function down()
{
	if (CAR_y <= 500)
    {
        CAR_y = CAR_y + 10;
        console.log("When down arrow is pressed, x=" + CAR_x + " | y = " +CAR_y );
        uploadBackground();
        uploadgreencar();

    }
}

function left()
{
	if (CAR_x >=0)
    {
        CAR_x = CAR_x - 10;
        console.log("When left arrow is pressed, x=" + CAR_x + " | y = " +CAR_y );
        uploadBackground();
        uploadgreencar();

    }
}

function right()
{
	if (CAR_x <= 700)
    {
        CAR_x = CAR_x + 10;
        console.log("When right arrow is pressed, x=" + CAR_x + " | y = " +CAR_y );
        uploadBackground();
        uploadgreencar();

    }
}
