// javascript
// shopping list array
let list = [];
// function to render list to view
function renderList() {
    // reference to list element
    const listElement = document.querySelector('#list');
    listElement.innerHTML = '';
    // iterate over the list array
    list.forEach( (item) => {
        let name = item.name;
        let listItem = `
        <li id="${item.id}" data-status="${item.status}">
        ${name}
        </li>`;
        listElement.insertAdjacentHTML('beforeend', listItem);
    } );
}
function sortList() {
    list.sort( (item1,item2) => {
        return item2.id - item1.id;
    } );
}

function changeStatus( id ) {
    list.forEach( (item) => {
        if ( item.id == id ) {
            item.status = true;
        }
    } );
}

// wait for load event
window.addEventListener('load', () => {
    // button reference
    const form = document.querySelector('#shopping');
    form.addEventListener('submit', ( event ) => {
        // cancel event, stop refresh
        event.preventDefault();
        // input reference
        const input = document.querySelector('#item');
        // value of input
        let name = input.value;
        // create unique id using timestamp
        let id = new Date().getTime();
        // set status
        let status = false;
        let item = {
            name: name,
            id: id,
            status: status
        }
        // add item to list array
        list.push( item );
        // console.log( list );
        sortList();
        renderList();
        form.reset();
    } );
    const listView = document.querySelector('#list');
    listView.addEventListener('click', (event) => {
        console.log(event.target.id);
        changeStatus( event.target.id );
        renderList();
    } );
} );
