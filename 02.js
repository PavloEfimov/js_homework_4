document.getElementById('shad').onclick=f1

function f1() {

	var elements = document.getElementsByTagName('img');
	for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    input.style.boxShadow='inset 0 0 10px';
	}

}