function loadData(chart){
$.getJSON( "getData/chart1", function( data ) {
        chart.load(data);
});
}

function makePlots(){
var chart1 = c3.generate({
    bindto: '#chart',
    data: {
      columns: [
        ['data1', 30, 200, 100, 400, 150, 250],
        ['data2', 50, 20, 10, 40, 15, 25]
      ],
      axes: {
        data2: 'y2' // ADD
      }
    },
    axis: {
      y2: {
        show: true // ADD
      }
    }
});

var chart2 = c3.generate({
    bindto: '#chart2',
    data: {
      columns: [
        ['data1', 30, 55, 32, 12, 3, 42],
      ]

    }
});
var ti = setInterval(function() {
loadData(chart1);
 }
, 1000);

}

function svgMechanic(){

var svgdom;

 // Нам нужно дождаться, пока вся графика (и наша карта тоже) загрузится, поэтому используем window.onload,
  var svgobject = document.getElementById('imap'); // Находим тег <object>
  if ('contentDocument' in svgobject) {              // У нас действительно там что-то есть?
     svgdom = jQuery(svgobject.contentDocument);  // Получаем доступ к объектной модели SVG-файла
    // Теперь делаем свою работу, например:
    jQuery("#pot1", svgdom).attr("style", "fill:#FF00AA");  // Находим тег с id="figure1" в SVG DOM и заливаем его красным
  }

var idgh = $("#field");

jQuery("#pot1", svgdom).hover(
  function () {
    var id = $(this).attr("style", "fill:#FF00FF");
    idgh.detach();
  },
  function () {
     var id = $(this).attr("style", "fill:#0000FF");
        idgh.appendTo("body");
  }
);


}




function clicked(){
loadData($("#chart"));
}

makePlots();
$().ready(svgMechanic());
