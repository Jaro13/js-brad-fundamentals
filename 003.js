//dlaczeo czasmi trzeba uzywac this?

function changeBackgroud(x) {
    //console.log('test');
    //tutaj super - podaje mam cały ellemtn w consoli
    console.log(x);
    //jelsi chcemy wartosc - jesli zmieny element zmieny takze wartosc
    console.log(x.value);

    var body = document.getElementById('body');
    body.style.backgroundColor = x.value;


    //jak zmienic kolof heading?

    var heading = document.getElementById('heading');
    heading.style.borderColor = '';



}


function validateForm() {




    //UWAGA JESL tutaj jest spacja - to nie działa!!!
    //name="firstName "


    //alert sie odpala czyli wchodzi w funkcje
    //alert(1);

    //var firstName = '';

    var firstName = document.forms["myForm"]["firstName"].value;

    //var firstName = document.forms['myForm']['firstName'].alert;
    //console.log(firstName);

    if (firstName === null || firstName === "") {
        alert("first name is required!");
        return false;
    }


    //dlaczeo nie działą - sprawczenie dlugosci pliku
    if (firstName.length < 3) {
        alert("first name must be at least 3 chars!");
        return false;
    }


}