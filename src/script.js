let list = [];
window.addEventListener('load', () => {
    const form = document.querySelector('#shopping');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let item = document.querySelector('#item').value;
        let time = new Date().getTime();
        let obj = { name: item, id: time };
        list.push( obj );
        console.log( list );
    } );
} );