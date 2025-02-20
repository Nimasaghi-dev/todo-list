const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

console.log(itemsArray);

function displayDate () {
    let date = new Date();
    date = date.toString().split(' ');
    document.getElementById('date').innerHTML = date[0] + ', ' + date[2] + ' ' + date[1] + ' ' + date[3];
}

window.onload = function () {
    displayDate();
}
