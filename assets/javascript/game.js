

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
var gameHealth;

//--> 0 = offense, 1 = defense,
var attack = 0;
var defense = 0;
var health = 0;


var charChosen = ["hermione", "ron", "harry"];
// expelliarmus, protego, stupefy, levicorpus

var hermione = {


     setData: function(){
        attack = 30;
        defense = 20;
        health += 10;
        $('#attackDisplay').text(attack);
        $('#defenseDisplay').text(attack);
        $('#healthDisplay').text(attack);
    }
};

var ron = {

     setData: function(){
        attack = 20;
        defense = 20;
        health += 20;
        $('#attackDisplay').text(attack);
        $('#defenseDisplay').text(attack);
        $('#healthDisplay').text(attack);
    }
    
    
};

var harry = {

     setData: function(){
        attack = 10;
        defense = 20;
        health += 30;
        $('#attackDisplay').text(attack);
        $('#defenseDisplay').text(attack);
        $('#healthDisplay').text(attack);
    }
};






//background changes -- depending on the book/level we are on 

$("#book1").on("click", function() {
  // $('#book1').css("background-image", "url(./assets/images/open_book.png)");
   $('body').css("background-image", "url(./assets/images/sorcerer.jpg)"); 
   $('#charBox').css("visibility","visible");
   gameAttack = 20;
   gameDefense = 10;
    gameHealth = 10;
   music.play();
   sorcerer = true;
});

$("#book2").on("click", function() {
    $('body').css("background-image", "url(./assets/images/chamber.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 30;
   gameDefense = 20;
   gameHealth = 20;
    music.play();
    chamber = true;
});

$("#book3").on("click", function() {
    $('body').css("background-image", "url(./assets/images/azkaban.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 40;
    gameDefense = 30;
    gameHealth = 30;
    music.play();
    azkaban = true;
});

$("#book4").on("click", function() {
    $('body').css("background-image", "url(./assets/images/goblet.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 50;
   gameDefense = 60;
   gameHealth = 40;
    music.play();
    goblet = true;
});

$("#book5").on("click", function() {
    $('body').css("background-image", "url(./assets/images/pheonix.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 70;
   gameDefense = 80;
   gameHealth = 50;
    music.play();
    pheonix = true;
});

$("#book6").on("click", function() {
    $('body').css("background-image", "url(./assets/images/prince.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 80;
   gameDefense = 90;
   gameHealth = 60;
    music.play();
    prince = true;
});

$("#book7").on("click", function() {
    $('body').css("background-image", "url(./assets/images/hallows.jpg)"); 
    $('#charBox').css("visibility","visible");
    gameAttack = 100;
   gameDefense = 100;
   gameHealth = 60;
    music.play();
    hallows = true;
});

//----------------------------------------//
// getting to the character choices: //

$("#hermione").on("click", function() {
    
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#gameField').css("visibility","visible");
   hermione.setData();

});

$("#potter").on("click", function() {
   
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#gameField').css("visibility","visible");

    harry.setData();
});

$("#ron").on("click", function() {
    
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#gameField').css("visibility","visible");
    ron.setData();
});

// game play button clicks

$("#attack").on("click", function() {
    if (attack > gameDefense){
        attack +=10;
        gameHealth -=10;
        $('#attackDisplay').text(attack);
    }else if (attack < gameAttack){
        health -=10;
        $('#healthDisplay').text(health);
    }
    
});

$("#defense").on("click", function() {
    if (defense > gameAttack){
        attack +=10;
        gameHealth -=5;
    }else if (defense < gameAttack){
        attack -=20;
        gameHealth -=10;
    }
});




