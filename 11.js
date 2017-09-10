var rand = Math.floor(Math.random() * 11);
console.log(rand);

var i = 3;

document.getElementById('task11').onclick = f1

// alert('осталось ' + i + ' попытки(а) в задаче 11');

out11.innerHTML = ('осталось ' + i + ' попытки(а)');

function f1() {

    var a11 = attempt11.value

    if (a11 == null || a11 == "" || isNaN(a11)) { alert('Ошибка, введите число !') } else {

        if (a11 < rand) {
            alert('меньше чем нужно!'),
                i--,
                alert('осталось ' + i + ' попытки(а)');
                out11.innerHTML = ('осталось ' + i + ' попытки(а)'),
                attempt11.value=''
        } else if (a11 > rand) {
            alert('больше чем нужно!'),
                i--,
                alert('осталось ' + i + ' попытки(а)');
                out11.innerHTML = ('осталось ' + i + ' попытки(а)');
        } else {return alert('вы угадали!!!');
            attempt11.value='';
    }

        if (i == 0) { return alert('попытки закончились...');
            attempt11.value='';
        location.reload(); }
    }

}