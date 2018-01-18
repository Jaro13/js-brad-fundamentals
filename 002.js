function doClick() {
    alert(1);
}


function changeText(id) {

    id.innerHTML = 'You clicked from function changeTest';

}


function changeHeading() {
    //alert(1);
    var heading = document.getElementById('heading-id');

    heading.innerHTML = 'NEW HEADING';
}

function showTime() {
    //alert(1);
    var time = document.getElementById('time');
    time.innerHTML = Date();

}

function clearTime() {

    var time = document.getElementById('time');
    //ustawiamy ta wartosc na nic
    time.innerHTML = '';

}