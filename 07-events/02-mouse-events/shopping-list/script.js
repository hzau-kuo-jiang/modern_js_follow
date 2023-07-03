const logo = document.querySelector('img');

const onClick = () => console.log('You clicked the logo')
const onDoubleClick = () => {
	if (document.body.style.background === 'purple') {
		document.body.style.background = 'white';
		document.body.style.color = 'black';
	} else {
		document.body.style.background = 'purple';
		document.body.style.color = 'white';
	}
}
const onRightClick = () => console.log('You right clicked the logo')
const onMouseDown = () => console.log('You pressed the mouse down')
const onMouseUp = () => console.log('You released the mouse button')
const onMouseWheel = () => console.log('You scrolled the mouse wheel')
const onMouseOver = () => console.log('You hovered over the logo')
const onMouseOut = () => console.log('You left the logo')
const onDragStart = () => console.log('You started dragging the logo')
const onDrag = () => console.log('You are dragging the logo')
const onDragEnd = () => console.log('You stopped dragging the logo')

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);