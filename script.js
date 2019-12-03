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

let x=5, y=15;
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

 function move(){
	let moveFlag = true;
	let coordinates = [
			[figureBody[0].getAttribute('positionX'), figureBody[0].getAttribute('positionY')],
			[figureBody[1].getAttribute('positionX'), figureBody[1].getAttribute('positionY')],
			[figureBody[2].getAttribute('positionX'), figureBody[2].getAttribute('positionY')],
			[figureBody[3].getAttribute('positionX'), figureBody[3].getAttribute('positionY')],
	];

	 for(let i=0; i<coordinates.length; i++){
	 	if (coordinates [i][1]==1 ||document.querySelector(`[positionX = "${coordinates[i][0]}"][positionY =' +
				' "${coordinates[i][1]-1}"]`).classList.contains('set')){
	 		moveFlag=false;
	 		break;
		}
	 }

	 if (moveFlag) {
	 	for(let i=0; i<figureBody.lenght; i++){
	 		figureBody[i].classList.remove('figure');
		}
		figureBody=[
				document.querySelector(`[positionX= "${coordinates[0][0]}"][positionY= "${coordinates[0][1]-1}"]`),
				document.querySelector(`[positionX= "${coordinates[1][0]}"][positionY= "${coordinates[1][1]-1}"]`),
				document.querySelector(`[positionX= "${coordinates[2][0]}"][positionY= "${coordinates[2][1]-1}"]`),
				document.querySelector(`[positionX= "${coordinates[3][0]}"][positionY= "${coordinates[3][1]-1}"]`),
		];
	 	for(let i=0; i<figureBody.length; i++) {
	 		figureBody[i].classList.add('figure');
		}
	 } else {
			 for(let i=0; i<figureBody.length; i++) {
				 figureBody[i].classList.add('figure');
				 figureBody[i].classList.add('set');
		 }
		 create();
	 }
 }

let interval;
interval = setInterval(() => {
	move();
}, 300);

