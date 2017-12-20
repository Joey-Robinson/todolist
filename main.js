const form = document.getElementById('addForm');
const itemList = document.getElementById('items');
const fliter = document.getElementById('fliter');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', deleteItem);
filter.addEventListener('keyup', filterItems);

function addItem(e) {
    e.preventDefault();
    let newItem = document.getElementById('item').value;
    let li = document.createElement('li');
    let deleteBtn = document.createElement('button');
    li.appendChild(document.createTextNode(newItem));
    li.className = 'list-group-item';
    li.appendChild(deleteBtn);
    deleteBtn.className = `btn btn-danger btn-sm float-right delete`;
    deleteBtn.appendChild(document.createTextNode('X'));
    itemList.appendChild(li);
}

function deleteItem(e) {
    if (e.target.classList.contains('delete')) {
        let li = e.target.parentElement;
        itemList.removeChild(li);
    }
}

function filterItems(e) {
    let text = e.target.value.toLowerCase();
    let items = itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}