document.getElementById('underline').onclick=f1

function f1() {

	var inp = tag.value;

	var elements = document.getElementsByTagName(inp);
	for (var i = 0; i < elements.length; i++) {
    var input_ = elements[i];
    input_.style.textDecoration='underline';
}

}