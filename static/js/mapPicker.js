
function svgMechanic(){

var svgdom;
 // Нам нужно дождаться, пока вся графика (и наша карта тоже) загрузится, поэтому используем window.onload,
  var svgobject = document.getElementById('imap'); // Находим тег <object>
  if ('contentDocument' in svgobject) {              // У нас действительно там что-то есть?
     svgdom = jQuery(svgobject.contentDocument);  // Получаем доступ к объектной модели SVG-файла
    // Теперь делаем свою работу, например:
  }

itemBehavior("#Pot1",svgdom);
itemBehavior("#Pot2",svgdom);
itemBehavior("#Pot3",svgdom);
itemBehavior("#Pot4",svgdom);
itemBehavior("#Pot5",svgdom);
itemBehavior("#Pot6",svgdom);
itemBehavior("#Pot7",svgdom);
itemBehavior("#Pot8",svgdom);
itemBehavior("#Pot9",svgdom);

itemBehavior("#Crane4",svgdom);
itemBehavior("#Crane3",svgdom);
itemBehavior("#Crane2",svgdom);
itemBehavior("#Crane1",svgdom);

itemBehavior("#WaterMeter",svgdom);
itemBehavior("#WaterPool",svgdom);
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

//$("#imap").ready(svgMechanic);
