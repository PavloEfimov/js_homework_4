document.getElementById('result_9').onclick = f1

function f1() {

    var imp = prompt('введите данные с разделителем ", "', '');

    if (imp == null) { alert('ошибка - Вы не ввели массив!') } else

        var arr = imp.split(', ');


    document.getElementById('result_9_1').onclick = f2

    function f2() {

        alert('длина массива составляет ' + arr.length);

    }
}