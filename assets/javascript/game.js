

var opening = true;
var sorcerer = false;
var azkaban = false;
var chamber = false;
var goblet = false;
var pheonix = false;
var prince = false;
var hallows = false;

var music = document.getElementById("theme");

var gameAttack;
var gameDefense;
var AIbool = false;
//--> 0 = offense, 1 = defense,
var attack;
var defense;
var win = 5;

var spellName = ["expelliarmus", "protego", "stupefy", "levicorpus"];
// expelliarmus, protego, stupefy, levicorpus



//background changes -- depending on the book/level we are on 

$("#book1").on("click", function() {
  // $('#book1').css("background-image", "url(./assets/images/open_book.png)");
   $('body').css("background-image", "url(./assets/images/sorcerer.jpg)"); 
   $('#charBox').css("visibility","visible");
   gameAttack = 20;
   gameDefense = 10;
   music.play();
   sorcerer = true;
});

$("#book2").on("click", function() {
    $('body').css("background-image", "url(./assets/images/chamber.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 30;
   gameDefense = 20;
    music.play();
    chamber = true;
});

$("#book3").on("click", function() {
    $('body').css("background-image", "url(./assets/images/azkaban.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 40;
    gameDefense = 30;
    music.play();
    azkaban = true;
});

$("#book4").on("click", function() {
    $('body').css("background-image", "url(./assets/images/goblet.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 50;
   gameDefense = 60;
    music.play();
    goblet = true;
});

$("#book5").on("click", function() {
    $('body').css("background-image", "url(./assets/images/pheonix.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 70;
   gameDefense = 80;
    music.play();
    pheonix = true;
});

$("#book6").on("click", function() {
    $('body').css("background-image", "url(./assets/images/prince.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 80;
   gameDefense = 90;
    music.play();
    prince = true;
});

$("#book7").on("click", function() {
    $('body').css("background-image", "url(./assets/images/hallows.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 100;
   gameDefense = 100;
    music.play();
    hallows = true;
});

//----------------------------------------//
// getting to the character choices: //

$("#hermione").on("click", function() {
    
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#attack').css("visibility","visible");
    $('#defend').css("visibility","visible");
   setHermioneData();

});

$("#potter").on("click", function() {
   
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#attack').css("visibility","visible");
    $('#defend').css("visibility","visible");

    setHarryData();
});

$("#ron").on("click", function() {
    
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#attack').css("visibility","visible");
    $('#defend').css("visibility","visible");
    setRonData();
});

// game play button clicks

$("#attack").on("click", function() {
    if (defense){
        attack +=5;

    }else{
        attack -=5;
    }
});

$("#defense").on("click", function() {

});

function setHermioneData(){
    attack = 30;
    defense = 10;
}

function setHarryData(){
    attack = 10;
    defense = 30;
}

function setRonData(){
    attack = 20;
    defense = 20;
}



