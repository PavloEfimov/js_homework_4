document.getElementById('numbering').onclick=f1

function f1() {
	
	var elements = document.getElementsByTagName('p');
	for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    var n = i+1;
    input.innerHTML='№'+n+': '+input.innerHTML;
	}
	
}