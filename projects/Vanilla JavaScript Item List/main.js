let form = document.getElementById('addForm');
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e) {
	e.preventDefault();

	// Get input value
	let newItem = document.getElementById('item').value;
	// Exit if no value was entered
	if (newItem === '' || newItem === ' ') {
		document.getElementById('item').value = '';
		return;
	}
	// Create mew li element
	let li = document.createElement('li');
	// Add class
	li.className = 'list-group-item';
	// Add text node with input value
	li.appendChild(document.createTextNode(newItem));
	// Create del button element
	let deleteBtn = document.createElement('button');
	// Add classes to delete button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	// Append text node to delete button
	deleteBtn.appendChild(document.createTextNode('X'));
	// Append button to li
	li.appendChild(deleteBtn);
	// Append li to list
	itemList.appendChild(li);
	// Clear input box
	document.getElementById('item').value = '';
}

// Remove item
function removeItem(e) {
	if (e.target.classList.contains('delete')) {
		if (confirm('Are you sure?')) {
			let li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
}

// Filter items
function filterItems(e) {
	// Convert text to lower case
	let text = e.target.value.toLowerCase();
	// Get lis
	let items = itemList.getElementsByTagName('li');
	// Convert to an array
	Array.from(items).forEach(function(item) {
		let itemName = item.firstChild.textContent;
		if (itemName.toLowerCase().indexOf(text) != -1) {
			item.style.display = 'block';
		} else {
			item.style.display = 'none';
		}
	});
}
