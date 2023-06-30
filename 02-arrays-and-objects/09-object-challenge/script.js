const library = [
	{
		title: 'The Road Ahead',
		author: 'Bill Gates',
		status: {
			own: true,
			reading: false,
			read: false
		}
	},
	{
		title: 'Steve Jobs',
		author: 'Walter Isaacson',
		status: {
			own: true,
			reading: false,
			read: false
		}
	},
	{
		title: 'Mockingjay',
		author: 'Suzanne Collins',
		status: {
			own: true,
			reading: false,
			read: false
		}
	}
]

function readAll(library) {
	library.forEach(book => book.status.read = true)
}

readAll(library)

console.log(library)
/*
function changeFirstBookName(library, newName = 'firstBook') {
	library[0].title = newName
}

changeFirstBookName(library)*/

const {title: firstBook} = library[0];
console.log(firstBook);

console.log(library)

const libraryJSON = JSON.stringify(library)

console.log(libraryJSON)