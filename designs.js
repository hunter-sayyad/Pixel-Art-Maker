// Select color input
const colorChoice=document.getElementById('colorPicker')
// Select size input
const gridHeight=document.getElementById('inputHeight')
const gridWidth=document.getElementById('inputWidth')
// Select submit button
const submitGridButton = document.querySelector('#sizePicker input[type="submit"]');
// Select Canvas
const designCanvas=document.getElementById('pixelCanvas')

// When size is submitted by the user, call makeGrid()
submitGridButton.addEventListener('click',function(event){
	event.preventDefault();
	makeGrid(gridWidth.value,gridHeight.value);
});
// When a cell is clicked change color
designCanvas.addEventListener('click', function(evnt){
	if (evnt.target.tagName === 'TD') {
		evnt.target.style.backgroundColor = colorChoice.value;
            }
        });
function makeGrid(width, height) {
	designCanvas.innerHTML='';
	for(let i=0;i < height;i++){
		const row = designCanvas.insertRow()
		for (let j = 0; j < width; j++) {
			const cell = row.insertCell()
		}
	}


}
