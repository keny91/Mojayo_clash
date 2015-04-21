 



/*On Load*/
  
$('#logo').ready(function(){

    clickInicio();
    load_Home();
    
  });







/*Active tabs control*/

function clickInicio(){

  document.getElementById("nav_inicio").classList.add("active");
  document.getElementById("nav_war").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_defense").classList.remove("active");
  document.getElementById("nav_farm").classList.remove("active");

}


function clickwar(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_war").classList.add("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_defense").classList.remove("active");
  document.getElementById("nav_farm").classList.remove("active");

}


function clickFarm(){

  document.getElementById("nav_farm").classList.add("active");
  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_war").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_defense").classList.remove("active");
}

function clickPersonal(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_farm").classList.remove("active");
  document.getElementById("nav_war").classList.remove("active");
  document.getElementById("nav_personal").classList.add("active");
  document.getElementById("nav_defense").classList.remove("active");
}



function clickdefense(){

  document.getElementById("nav_inicio").classList.remove("active");
  document.getElementById("nav_farm").classList.remove("active");
  document.getElementById("nav_war").classList.remove("active");
  document.getElementById("nav_personal").classList.remove("active");
  document.getElementById("nav_defense").classList.add("active");

}


/*load each HTML*/

function load_Home(){

  $("#contenedor_bloques").load("./html/home.html");
  clickInicio();
}


function load_war_th7(){

  $('#contenedor_bloques').load('./html/war/th7.html');
  clickwar();

}


function load_war_th8(){

  $('#contenedor_bloques').load('./html/war/th8.html');
  clickwar();

}

function load_war_th9(){

  $('#contenedor_bloques').load('./html/war/th9.html');
  clickwar();

}




function load_farm_thX(){
  $("#contenedor_bloques").load("./html/farm.html");
  clickFarm();
}


function load_defense_thX(){
   $("#contenedor_bloques").load("./html/defense.html");
  clickFarm();
}

function load_personal(){
   $("#contenedor_bloques").load("./html/personal.html");
  clickFarm();
}










/*Functions for image-slide expositors*/



function clickImage1(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block1'));
  $('#slide_block1').slideDown();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}






function expandvideo(video_container){

  button = $('#'+ video_container + ' .video_boton');
  video = $('#'+ video_container + ' .video_container');

  if (video.css('display') == 'none') {

    video.slideDown('fast');
    button.html('Ocultar Vídeo');
    

   }

  else{  
      video.slideUp('fast');
      button.html('Mostrar Vídeo');
     
       };

   button.css('font-size','22pt');
}






function clickImage1(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block1'));
  $('#slide_block1').slideDown();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}

function clickImage2(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block2'));
  $('#slide_block2').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block3').slideUp();
  $('#slide_block4').slideUp();

}
function clickImage3(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block3'));
  $('#slide_block3').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block2').slideUp();
  $('#slide_block4').slideUp();
}

function clickImage4(){
/*  $('#espacio').empty();*/
  $('#espacio').prepend($('#slide_block4'));
  $('#slide_block4').slideDown();
  $('#slide_block1').slideUp();
  $('#slide_block2').slideUp();
  $('#slide_block3').slideUp();
}


/* Resizing images*/

var factor = 2; /*double size*/
var foo_width = $('.resizable_hover_image').width();
var foo_height = $('.resizable_hover_image').height();


$(".resizable_hover_image" ).on( "mouseenter", function() {

/*$('.resizable_hover_image').mouseenter(function() {*/
    $(this).animate({
        top: '-=' + foo_width / factor,
        /*top: '+= 50px' ,*/
        left: '-=' + foo_height / factor ,
        /*left: '+= 25px' ,*/
        width: 100*factor,
        height: 150*factor
        
    },500);
    $(this).css('z-index', 100);
    $(this).css('opacity', 1);
});

$( ".resizable_hover_image" ).on( "mouseout", function() {
/*$('.resizable_hover_image').mouseout(function() {*/
    $(this).animate({
        top: '+=' + foo_width/ factor ,
        /*top: '+= 0',*/
        left: '+=' + foo_height / factor ,
        /*left: '+=0',*/
        width: 100,
        height: 150

        
    },500);
    $(this).css('z-index', 1);
    $(this).css('opacity', 0.7);
});


