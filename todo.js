
var ul = document.getElementById('list');
var li;
var label;


var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click', removeItem);

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul=document.getElementById('list');
    var textnode = document.createTextNode(item);


if (item === '') {
    return false;
    
} else{

    li = document.createElement('li');

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.setAttribute('id', 'check');

    label = document.createElement('label');

    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li, ul.childNodes[0]);


    setTimeout(() => {
        li.className = 'visual'}, 200);
    input.value = '';
    }   
}


function removeItem(){
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index]);
        }
            }   
}


