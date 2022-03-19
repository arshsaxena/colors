function inputColor() { 
	let bgBody = document.getElementById('container');

	bgColor = document.getElementById('code').value
	bgBody.style.backgroundColor = bgColor;
}

function getHexColorCode() { 
	let bgBody = document.getElementById('container');
	let symbols = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
	
	let bgColor = "#";

	for(let i = 0; i < 6 ; i++) {
		bgColor = bgColor + symbols[Math.floor(Math.random()*16)];
	}

	bgBody.style.backgroundColor = bgColor;
	document.getElementById('code').value = bgColor;
}

function getRGBColorCode() {    
	let bgBody = document.getElementById('container');
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);

	let bgColor = `rgb(${red}, ${green}, ${blue})`;

    bgBody.style.backgroundColor = bgColor;
	document.getElementById('code').value = bgColor;
}

function getRGBAColorCode() {   
	let bgBody = document.getElementById('container');
	let red = Math.round(Math.random() * 255);
	let green = Math.round(Math.random() * 255);
	let blue = Math.round(Math.random() * 255);
	let opacity = +Math.random().toFixed(1);
	
	let bgColorWithOp = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
	
    bgBody.style.backgroundColor = bgColorWithOp;
	document.getElementById('code').value = bgColorWithOp;
}
