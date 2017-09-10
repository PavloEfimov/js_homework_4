
var count = 0; //глобальная переменная
document.getElementById('but1').onclick=f1;
document.getElementById('but2').onclick=f1;

function f1() {
	count +=1;
	out.innerHTML='количество нажатий составляет: '+ count;
}