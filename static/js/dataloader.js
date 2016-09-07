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


function clicked(){
loadData($("#chart"));
}

makePlots();

