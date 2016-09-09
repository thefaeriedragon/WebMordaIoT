
function svgMechanic(){

var svgdom;
 // Нам нужно дождаться, пока вся графика (и наша карта тоже) загрузится, поэтому используем window.onload,
  var svgobject = document.getElementById('imap'); // Находим тег <object>
  if ('contentDocument' in svgobject) {              // У нас действительно там что-то есть?
     svgdom = jQuery(svgobject.contentDocument);  // Получаем доступ к объектной модели SVG-файла
    // Теперь делаем свою работу, например:
  }

itemBehavior("#Pot1",svgdom);
labelLoader("#Pot1",svgdom);

itemBehavior("#Pot2",svgdom);
labelLoader("#Pot2",svgdom);

itemBehavior("#Pot3",svgdom);
labelLoader("#Pot3",svgdom);

itemBehavior("#Pot4",svgdom);
labelLoader("#Pot4",svgdom);

itemBehavior("#Pot5",svgdom);
labelLoader("#Pot5",svgdom);

itemBehavior("#Pot6",svgdom);
labelLoader("#Pot6",svgdom);

itemBehavior("#Pot7",svgdom);
labelLoader("#Pot7",svgdom);

itemBehavior("#Pot8",svgdom);
labelLoader("#Pot8",svgdom);

itemBehavior("#Pot9",svgdom);
labelLoader("#Pot9",svgdom);

itemBehavior("#Crane4",svgdom);
itemBehavior("#Crane3",svgdom);
itemBehavior("#Crane2",svgdom);
itemBehavior("#Crane1",svgdom);

itemBehavior("#WaterMeter",svgdom);
waterSpeed("#WaterMeter",svgdom);

itemBehavior("#WaterPool",svgdom);
pumpPower("#WaterPool",svgdom);

itemBehavior("#WaterTower",svgdom);

itemBehavior("#Lamp1",svgdom);
itemBehavior("#Lamp2",svgdom);

}

function itemBehavior(item,svgdom){
jQuery("#Picked "+item+"Picked", svgdom).attr("visibility", "hidden");
var idgh = $("#field");
jQuery("#Items "+item, svgdom).hover(
  function () {
    jQuery("#Picked "+item+"Picked", svgdom).attr("visibility", "visible");
    idgh.detach();
  },
  function () {
     jQuery("#Picked "+item+"Picked", svgdom).attr("visibility", "hidden");
        idgh.appendTo("#sidebar");
  }
  );

}

function waterSpeed(item, svgdom){
var ti = setInterval(function() {
jQuery(item+"Label", svgdom).text(""+ Math.floor(Math.random()*100) +" l/s");
 }
, 1000);
}



function labelLoader(item, svgdom){

var ti = setInterval(function() {
jQuery("#PotLabel"+item[item.length -1]+" .PotLabelTemp", svgdom).text(""+ Math.floor(Math.random()*100) +"c");
jQuery("#PotLabel"+item[item.length -1]+" .PotLabelHum", svgdom).text(""+ Math.floor(Math.random()*100) +"%");
jQuery("#PotLabel"+item[item.length -1]+" .PotLabelGHum", svgdom).text(""+ Math.floor(Math.random()*100) +"%");
 }
, 1000);

}

function arrowHide(j, svgdom){
jQuery("#Arrow"+j, svgdom).attr("visibility", "visible");
}

function pumpPower(item, svgdom){
for (var i = 1; i < 4; i++) {
   jQuery("#Arrow"+i, svgdom).attr("visibility", "hidden");
}


setTimeout(function() {
   arrowHide(1,svgdom);
}, 1000)

setTimeout(function() {
   arrowHide(2,svgdom);
}, 2000)

setTimeout(function() {
   arrowHide(3,svgdom);
}, 3000)

setTimeout(function() {
   pumpPower(item,svgdom);
}, 4000)

}

//$("#imap").ready(svgMechanic);
