
let outputArea = document.getElementById('outputArea')
let output = document.getElementById('output')
let inputArea = document.getElementById('inputArea')
let addButton = document.getElementById('add')
let subtractButton = document.getElementById('subtract')
let input = document.getElementById('input')
let displayValue = 0
input.defaultValue = 1

const increaseOutput = () => {
	let newValue = displayValue + parseInt(input.value)
	output.content = ''
	displayValue = newValue
	output.textContent = displayValue
	if (displayValue < 0){
		output.style.color = 'red'
	}
	else {
		output.style.color = 'black'
	}
}

const decreaseOutput = () => {
	let newValue = displayValue - parseInt(input.value)
	output.content = ''
	displayValue = newValue
	output.textContent = displayValue
	if (displayValue < 0){
		output.style.color = 'red'
	} 
	else {
		output.style.color = 'black'
	}
}

const reverseColor = (e) => {
	e.target.style.backgroundColor = 'white'
	e.target.style.color = 'grey'
}

const resetColor = (e) => {
	e.target.style.backgroundColor = 'grey'
	e.target.style.color = 'white'
}

addButton.addEventListener('click', increaseOutput)
addButton.addEventListener('mouseenter', reverseColor)
addButton.addEventListener('mouseleave', resetColor)

subtractButton.addEventListener('click', decreaseOutput)
subtractButton.addEventListener('mouseenter', reverseColor)
subtractButton.addEventListener('mouseleave', resetColor)
