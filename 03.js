document.getElementById('numbering').onclick = f1

function f1() {

	var n = 0;
    var elements = document.getElementById('task3').childNodes;
    for (var i = 0; i < elements.length; i++) {
        var input = elements[i];
        
        if (input.nodeName == "#text") continue;
        n++;
        input.innerHTML = '№' + n + ': ' + input.innerHTML;
        
    }
}