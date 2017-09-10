document.getElementById('task10').onclick=f1

function f1() {

	var numb10 = prompt('введите число', '');

	if (numb10==null||isNaN(numb10)) {alert ('Ошибка, введите число !')}

		else  { var a10 =+numb10;

			function result10() {
				if (a10>=10) {return a10*a10}
					else if (a10<7) { return alert ('число меньше 7')}
					else if (a10 == 7) { return 7}
					else if (a10 == 8) { return 8}
					else if (a10 == 9) { return 9}
			}

			alert(result10());
		}


}