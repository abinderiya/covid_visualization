const casesData = JSON.parse(document.getElementById('casesData').textContent)
const recoveredData = JSON.parse(document.getElementById('recoveredData').textContent)
var timeFormat = 'MM/DD/YYYY HH:mm';

var color = Chart.helpers.color;
var config = {
    type: 'line',
    data: {
        labels: Object.keys(casesData),
        datasets: [{
            label: 'Батлагдсан тохиолдол',
            data: Object.values(casesData),
            fill: true,
            backgroundColor: "rgba(71, 175, 225,0.4)",
        },
        {
            label: 'Эдгэрсэн',
            data: Object.values(recoveredData),
            fill: true,
            backgroundColor: "rgba(26, 100, 156,0.6)",
        }]
    },
    options: {
        title: {
            text: 'Chart.js Time Scale'
        },
        scales: {
            xAxes: [{
                type: 'time',
                time: {
                    parser: timeFormat,
                    // round: 'day'
                    tooltipFormat: 'll',
                    unit:'day',
                },
                scaleLabel: {
                    display: false,
                    labelString: 'Date'
                }
            }],
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: ''
                }
            }]
        },
        aspectRatio: 3,
    }
};

window.onload = function() {
    var ctx = document.getElementById('orderChart').getContext('2d');;
    window.myLine = new Chart(ctx, config);

};