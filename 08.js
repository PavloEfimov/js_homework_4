document.getElementById('result08').onclick=f1

function f1() {

	var a =  prompt('введите Ваш возраст', '');


if (a==null||a==' '||isNaN(a)) {alert ('Введите возраст!')}

else if (a>16) {
	out08.innerHTML='добро пожаловать';
}
else out08.innerHTML='вы еще молоды'

}