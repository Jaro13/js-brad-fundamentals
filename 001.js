document.write("<hr>");
document.write("nazwa");
document.write("<br>");




//data types

//numeber string array object


var number1 = 31;

var number2 = 30;

sum = number1 + number2;

console.log(sum); //tutaj jest dodawnie liczb



var number2 = '30'; //co jesli z liczby zrobimy string?

sum = number1 + number2;

console.log(sum); //tutaj jest dodawnie stringow

console.log('ciekwe czy z tego bedzie string ' + number1);

//ale wynik dodawanie 

console.log('wynik dodawania jeden jesli jedne z elementow string' + number1 + number2); //czyli to jest string


console.log('wynik dodawania stringow to: ' + number1 + number2); //tutaj potratkowanie zmienne jak sring


var test = 'to jest test';
var Test = 'case sensitive - to jest inna zmienna';

if (test === Test) { //odpalic przy takiej opcji ze test = Test
    alert('to jest to samo');
}


//camel case

var mySuperTest = 'super test';

//po inicjalizacji - czyli var mozna juz uzywac zmienne bez var

var myTest = 'po prostu test';

myTest = "to jest juz inna wartosc - takze ma uzyte double quotes"; //rozniaca miedzy sigle and double


//partial case

var MyOtherTest = 'to jest zmienna zapisana wg konwencji partial case';

//arrays

var colors = ['red', 'blue', 'green']; //pusta tablica


//tylko 1 elemnt - nuemracja od 0

//co tutaj jest zle?
//console.log[1];

//jak liczyc jesli 0 jest wazne
console.log(colors[2]);


//co jesli element z kosmosu

console.log(colors[222]);



//wszystko?

console.log(colors);


for (i in colors) {
    //co tutaj ponizej - wyjdzie
    //console.log(colors[1]);
    console.log(colors[i]);
}

//takze podziałac w consoli google chrome - odpalac funkcje itdf


//2 sposob tworzenie tablicy

var otherColors = new Array('red', 'blue', 'yellow');

//jak dodac elemtny

otherColors[3] = 'dark';

//21 min koniec
//takaz ludzi na koncu zrobic

//lepszy sposob

otherColors.push('inny kolor');

//ile elementow w tablicy?


console.log('w tablicy jest : ' + (otherColors.length) + ' elementów');


//ostanie elemnty - index tego elementu - lenght - 1

var myNum = [1, 4, 8, 12]

//liczba elementow ale nie od zera - tylko od 1
//jak to zastosowac
//console.log(otherColors.length - 1);
//jesli nie wiemy i nie chcemy liczyc ile jest elementow jak szybko dodac ostatni
//pierwszy i ostatni
//var suma = myNum[0] + myNum[-1];


//console.log(suma);


//sortownia tabliyc po wartosci
console.log(otherColors.sort());

//dlaczego to nie dziala?
//console.log(otherColors.sort);

//for-loop


for (i = 0; i <= 4; i++) {
    console.log(i);
}

//jak w od najwyzej do najnizezez


//while - loop

//dlaczego nie dzila jesli i nie ma wartosci?

//console.log(i);


//trzeb i zainclialiowazc

var i = 0;


while (i < 5) {
    console.log(i);
    i++; //co jesli nie ma opertatora incremantacji?
}

//inna dla tablic


numbers = [1, 23, 4, 9, 11, 0];

numbers.forEach(function (number) {
    console.log(number);
});

//tradycyjny sposob


for (var i = 0; i < numbers.length; i++) { //tutaj przebiegamy po indeksie
    console.log(numbers[i]); //wyswietlamy elemt o indeksie i
}


//jesli chcemy w odwotnym klierunku

numbers = ['michu', 'imbir'];

numbers.reverse();

for (var i = 0; i < numbers.length; i++) { //tutaj przebiegamy po indeksie
    console.log(numbers[i]); //wyswietlamy elemt o indeksie i
}


//conditionals

//co tutaj jest zle

//to jest kompletenie zle

/*

if (1 = 1) {
    console.log('ok=');
}

*/

if (1 == '1') { //uwaga tutaj wynik jest ok
    console.log('ok');
} else {
    console.log('nie');
}

if (1 === '1') { //to jest prawidłowe sprawdzenie
    console.log('ok2');
} else {
    console.log('nie prawda');
}


var one = 1;
var two = 2;
var three = 3;

if (one === two && two === 2) { //jesli one rowna sie two - to nie jest prawda i two roana sie 2 - to jest prawda ale nie wystarczy to

    console.log('true');
} else {
    console.log('false');
}

//teraz warunke lub ||
if (one === two || two === 2) { //teraz warunke jest spełniony

    console.log('true');
} else {
    console.log('false');
}

//switch

var fruit = 'apple';

switch (fruit) {
    case 'banana':
        console.log('banana')
        break;
    case 'orage':
        console.log('orange')
        break;
    default:
        console.log('nie wiem jaki owoc');
}


//object

var person = {
    firstName: 'michu',
    lastName: 'ro',
    age: 16,
    animals: ['dog', 'cat'],
    adress: {
        'ulica': 'wielka 1',
        'miasto': 'wawa',
        'state': 'jakisStete',
    },

    //to jest metoda tej funkcji - ona cos robi cos buduje
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }

}


console.log(person.age);

console.log(person.animals[1]);

//teraz podaje nam cały adress
console.log(person.adress);

//co jesli chcemy ulice
console.log(person.adress.ulica);

//teraz zroci wartosc - uwaga na this
console.log(person.fullName());


//co jesli nie wpiszemy ()

console.log(person.fullName);


//object constructor

var apple = new Object();
apple.color = 'red';
apple.shape = 'round';

//teraz metod funkcji

apple.describe = function () {
    return 'Apple is color: ' + this.color + 'and shape of apple is ' + this.shape;
}

//to jest zle
console.log(apple.describe);

//to jest ok
console.log(apple.describe());

//przypisaywanie propeties do objektu
//to takaz jest obiekt
function Fruit(color, shape, name) {
    //to sa properties
    this.color = color;
    this.shape = shape;
    this.name = name;

    //to jest metodda

    this.describe = function () {
        return 'color is ' + this.color + 'kształt to ' + this.shape + 'nazwa to' + this.name;
    }

}

var apple = new Fruit('czarny', 'zgniły', 'gruszka');




//caly obiekt
console.log(apple);

//kolor - properties objectu
console.log(apple.color);


//mozna wiele obiektow na podstwi takiego konstukutwa utworzyc
//czyli mellon jest obiektem
var mellon = new Fruit('YELLOW', 'zg', 'mellon');

//caly obiekt
console.log(mellon);

//kolor - properties objectu
console.log(mellon.color);


//odpalamy metode naszego obiektu
console.log(apple.describe());


//tablica obiektów - mozna ja takze utworzyc
var users = [{
        name: 'John Doe',
        age: 33,
    },

    {
        name: 'Michu Ro',
        age: 16,
    },
    {
        name: 'Imbier Kici',
        age: 12,
    },
]

//wszyscy
console.log(users);
//2 user
console.log(users[1]);
//tylko wiek
console.log(users[1].age);







//koniec 32 conditionalas
//takze brad js ajax przegobic to