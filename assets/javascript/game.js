

var opening = true;
var sorcerer = false;
var azkaban = false;
var chamber = false;
var goblet = false;
var pheonix = false;
var prince = false;
var hallows = false;

var hermPlayed = false;
var ronPlayed = false;
var harPlayed = false;


var music = document.getElementById("theme");

//var gameAttack = 0; 
var gameDefense = 0; 
var gameHealth = 0;

//--> 0 = offense, 1 = defense,
var attack = 0;
var defense = 0;
var health = 0;


var charChosen = ["hermione", "ron", "harry"]
// expelliarmus, protego, stupefy, levicorpus
var charIndex;

var hermione = {


     setData: function(){
        $("#currentChar").empty();
        $('#currentChar').append(dynamicChar("hermione"));
        attack = 30;
        defense = 2;
        health += 10;
        charIndex = 0;
       // console.log(charIndex);
        hermPlayed = true;
        $('#attackDisplay').text(attack);
        $('#defenseDisplay').text(attack);
        $('#healthDisplay').text(attack);
      
        
    }
};

var ron = {

     setData: function(){
        $("#currentChar").empty();
        $('#currentChar').append(dynamicChar("ron"));
        attack = 20;
        defense = 2;
        health += 20;
        charIndex = 1;
        //console.log(charIndex);
        ronPlayed = true;
        $('#attackDisplay').text(attack);
        $('#defenseDisplay').text(attack);
        $('#healthDisplay').text(attack);
    }
    
    
};

var harry = {

     setData: function(){
        $("#currentChar").empty();
        $('#currentChar').append(dynamicChar("potter"));
        attack = 10;
        defense = 2;
        health += 30;
        charIndex = 2;
        //console.log(charIndex);
        harPlayed = true;
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
  
   gameDefense = 10;
    gameHealth = 10;
    $('#aiHealth').text(gameHealth);
    $('#aiAttack').text(gameDefense);
   music.play();
   sorcerer = true;
});

$("#book2").on("click", function() {
    $('body').css("background-image", "url(./assets/images/chamber.jpg)"); 
    $('#charBox').css("visibility","visible");
    
   gameDefense = 20;
   gameHealth = 20;
   $('#aiHealth').text(gameHealth);
   $('#aiAttack').text(gameDefense);
    music.play();
    chamber = true;
});

$("#book3").on("click", function() {
    $('body').css("background-image", "url(./assets/images/azkaban.jpg)"); 
    $('#charBox').css("visibility","visible");
 
    gameDefense = 30;
    gameHealth = 30;
    $('#aiHealth').text(gameHealth);
    $('#aiAttack').text(gameDefense);
    music.play();
    azkaban = true;
});

$("#book4").on("click", function() {
    $('body').css("background-image", "url(./assets/images/goblet.jpg)"); 
    $('#charBox').css("visibility","visible");
 
    gameDefense = 40;
    gameHealth = 40;
    $('#aiHealth').text(gameHealth);
    $('#aiAttack').text(gameDefense);
    music.play();
    goblet = true;
});

$("#book5").on("click", function() {
    $('body').css("background-image", "url(./assets/images/pheonix.jpg)"); 
    $('#charBox').css("visibility","visible");
  
   gameDefense = 50;
   gameHealth = 50;
   $('#aiHealth').text(gameHealth);
   $('#aiAttack').text(gameDefense);
    music.play();
    pheonix = true;
});

$("#book6").on("click", function() {
    $('body').css("background-image", "url(./assets/images/prince.jpg)"); 
    $('#charBox').css("visibility","visible");
  
   gameDefense = 60;
   gameHealth = 60;
   $('#aiHealth').text(gameHealth);
   $('#aiAttack').text(gameDefense);
    music.play();
    prince = true;
});

$("#book7").on("click", function() {
    $('body').css("background-image", "url(./assets/images/hallows.jpg)"); 
    $('#charBox').css("visibility","visible");
   
   gameDefense = 70;
   gameHealth = 60;
   $('#aiHealth').text(gameHealth);
   $('#aiAttack').text(gameDefense);
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
   $('#hermione').css("visibility","collapse");
  // $('#currentChar').append(dynamicChar("hermione"));
   $('#harry').css("visibility","visible");
   $('#ron').css("visibility","visible");
   $('#bookBox').remove();
   

});

$("#potter").on("click", function() {
   
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#gameField').css("visibility","visible");
    harry.setData();
    $('#potter').css("visibility","collapse");
   // $('#currentChar').append(dynamicChar("potter"));
    $('#hermione').css("visibility","visible");
   $('#ron').css("visibility","visible");
   $('#bookBox').remove();
  
});

$("#ron").on("click", function() {
    
    $('#charBox').css("visibility","visible");
    $('#bookBox').css("visibility","collapse");
    $('#gameField').css("visibility","visible");
    ron.setData();
    $('#ron').css("visibility","collapse");
 //   $('#currentChar').append(dynamicChar("ron"));
    $('#hermione').css("visibility","visible");
    $('#potter').css("visibility","visible");
    $('#bookBox').remove();
 
});

// game play button clicks

$("#attack").on("click", function() {
  
    $('#healthDisplay').text(health);

        if (health > 0){
            defense +=2; //+1 originally
            gameHealth = gameHealth - (attack+defense);
            $('#aiHealth').text(gameHealth);

            $('#attackDisplay').text(attack);
            health = health - gameDefense;
           
            if (gameHealth < 0 || gameHealth ==0){ // if you have depleted the game health to 0 you win
                $('#charBox').css("visibility","collapse");
                $('#bookBox').css("visibility","collapse");
                $('#gameField').css("visibility","collapse");
                $('#charBox').remove();
                $('body').css("background-image", "url(./assets/images/win.jpg)"); 
                $('body').css("background-size", "100%"); 
              
            }
        }else if (!(hermPlayed && harPlayed && ronPlayed)){ // if all the characters not have played
            console.log(charIndex);
            if (charIndex == 0 ){
               // console.log(charIndex);
                ron.setData();    
            }else if (charIndex == 1){
               // console.log(charIndex);
                harry.setData(); 
            }else if (charIndex == 2){
              //  console.log("ronPlayed");
                hermione.setData(); 
            }

        }else {
            $('#charBox').css("visibility","collapse");
            $('#bookBox').css("visibility","collapse");
            $('#gameField').css("visibility","collapse");
            $('#charBox').remove();
            $('body').css("background-image", "url(./assets/images/loss.jpg)"); 
            $('body').css("background-size", "100%"); 
        }
         
 
});

function dynamicChar(char){
    var cChar = $("<img>");
    cChar.addClass("currentChar");
   // cChar.text(answers[qCount][i]);
   cChar.attr("src", "assets/images/" + char + ".jpg");
   cChar.attr("height", "200px");
   cChar.attr("width", "200px");
    $("#currentChar").append(cChar);
}

/*$("#defense").on("click", function() {
    if (defense > gameAttack){
        attack +=10;
        gameHealth -=5;
    }else if (defense < gameAttack){
        attack -=20;
        gameHealth -=10;
    }
});*/




