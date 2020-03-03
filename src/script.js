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
        let listItem = `<li>${name}</li>`;
        listElement.insertAdjacentHTML('beforeend', listItem);
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
        renderList();
        form.reset();
    } )
} );
