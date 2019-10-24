let tetris=document.createElement('div');
tetris.classList.add('tetris');

for(let i=1; i<181; i++){
	let excel=document.createElement('div');
	excel.classList.add('excel');
	tetris.appendChild(excel);
}

let main=document.getElementsByClassName('main')[0];
main.appendChild(tetris);

let excel=document.getElementsByClassName('excel');
let i=0;

for (let y=18; y>0; y--){
	for (let x=1; x<11; x++){
		excel[i].setAttribute('positionX', x);
		excel[i].setAttribute('positionY', y);
		i++;
	}
}

let x=5, y=10;
let mainArr=[
	//палка
	[
		[0, 1],
		[0, 2],
		[0, 3]
	],

	//квадрат
	[
		[1,0],
		[0,1],
		[1,1]
	],

	//эльобразный
	[
		[1,0],
		[0,1],
		[0,2]
	],

	//обратныйЭль
	[
		[1,0],
		[1,1],
		[1,2]
	],

	//молния
	[
		[1,0],
		[0,1],
		[-1,1]
	],

	//обратная молния
	[
		[-1,0],
		[0,1],
		[1,1]
	],

	//Тэ
	[
		[-1,1],
		[0,1],
		[1,1]
	],
]

let currentFigure=0;     //вспомогательная переменная
let figureBody=0;				 //переменная тела фигуры

function create() {      //создание фигуры
	function getRandom() {
		return Math.round(Math.random()*(mainArr.length-1))
	}

	currentFigure=getRandom();  //вывод рандомной фигуры

	figureBody=[
		document.querySelector(`[positionX="${x}"][positionY="${y}"]`),
		document.querySelector(`[positionX="${x+mainArr[currentFigure][0][0]}"][positionY="${y+mainArr[currentFigure][0][1]}"]`),
		document.querySelector(`[positionX="${x+mainArr[currentFigure][1][0]}"][positionY="${y+mainArr[currentFigure][1][1]}"]`),
		document.querySelector(`[positionX="${x+mainArr[currentFigure][2][0]}"][positionY="${y+mainArr[currentFigure][2][1]}"]`)
	]

	for(let i=0;i<figureBody.length;i++){
		figureBody[i].classList.add('figure')
	}

}


create()