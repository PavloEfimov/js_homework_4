document.getElementById('bckgd_red').onclick=f1

function f1() {
	
	var elements = document.getElementsByTagName('p');
	for (var i = 0; i < elements.length; i++) {
    var input = elements[i];
    input.style.backgroundColor='red';
	}
	
}