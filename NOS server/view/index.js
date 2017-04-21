var chart1;
var chart2;
var chart3;
var chart4;
var chart5;

var chart1Full;
var chart2Full;
var chart3Full;
var chart4Full;
var chart5Full;

var interval = 1000;

var timezoneOffset = (new Date()).getTimezoneOffset() * 60 * 1000;

// create charts and start querying data when document is ready
$(function() {
    chart1 = new Highcharts.stockChart({
        chart: {
            renderTo: 'container',
            zoomType: 'x'
        },

        exporting: {
         enabled: false
        },

        navigator: {
            enabled: false
        },

        plotOptions:{
            series:{
                turboThreshold: 0
            }
        },

        scrollbar: {
            enabled: false
        },

        title: {
            text: 'Temperature measurements'
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },

        rangeSelector: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'Temperature (°C)'
            }
        },

        series: [{
            name: 'Temperature',
            data: [],
            color: '#ff3300',
            marker: {
                enabled: false
            },
            tooltip: {
                valueDecimals: 1,
                valueSuffix: '°C'
            }
        }]
    });

    chart2 = new Highcharts.stockChart({
        chart: {
            renderTo: 'container1',
            zoomType: 'x'
        },

        exporting: {
         enabled: false
        },

        navigator: {
            enabled: false
        },

        plotOptions:{
            series:{
                turboThreshold: 0
            }
        },

        scrollbar: {
            enabled: false
        },

        title: {
            text: 'Sound measurements'
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },

        rangeSelector: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'Sound intensity'
            }
        },

        series: [{
            name: 'Sound intensity',
            data: [],
            marker: {
                enabled: false
            },
            tooltip: {
                valueDecimals: 1
            }
        }]
    });

    chart3 = new Highcharts.stockChart({
        chart: {
            renderTo: 'container2',
            zoomType: 'x'
        },

        exporting: {
         enabled: false
        },

        plotOptions:{
            series:{
                turboThreshold: 0
            }
        },

        navigator: {
            enabled: false
        },

        scrollbar: {
            enabled: false
        },

        title: {
            text: 'Flame measurements'
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },

        rangeSelector: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'Flame occurance'
            }
        },

        series: [{
            name: 'Flame occurance',
            data: [],
            color: '#669900',
            marker: {
                enabled: false
            },
            tooltip: {
                valueDecimals: 1
            }
        }]
    });

    chart4 = new Highcharts.stockChart({
        chart: {
            renderTo: 'container3',
            zoomType: 'x'
        },

        exporting: {
         enabled: false
        },

        navigator: {
            enabled: false
        },

        plotOptions:{
            series:{
                turboThreshold: 0
            }
        },

        scrollbar: {
            enabled: false
        },

        title: {
            text: 'Water occurance'
        },

        xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },

        rangeSelector: {
            enabled: false
        },

        yAxis: {
            title: {
                text: 'Water occurance'
            }
        },

        series: [{
            name: 'VOC level',
            data: [],
            color: '#ffffff',
            marker: {
                enabled: false
            },
            tooltip: {
                valueDecimals: 1,
                valueSuffix: 'ppm'
            }
        }]
    });

    chart5 = new Highcharts.stockChart('mega-container', {
        chart: {
            zoomType: 'x'
        },

        exporting: {
                enabled: false
        },

        title: {
            text: 'Unified sensor measurements'
        },

        navigator: {
            enabled: false
        },

        plotOptions:{
            series:{
                turboThreshold: 0
            }
        },
        scrollbar: {
            enabled: false
        },
         xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
        },
        yAxis: [{
            labels: {
                format: '{value}°C',
                style: {
                    color: '#ff3300'
                }
            },
            title: {
                text: 'Temperature',
                style: {
                    color: '#ff3300'
                }
            },
            opposite: false

        }, { 
            gridLineWidth: 0,
            title: {
                text: 'Relative humidity',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            },
            labels: {
                format: '{value} % RH',
                style: {
                    color: Highcharts.getOptions().colors[0]
                }
            }

        }, { 
            gridLineWidth: 0,
            title: {
                text: 'Pressure',
                style: {
                    color: '#669900'
                }
            },
            labels: {
                format: '{value} mbar',
                style: {
                    color: '#669900'
                }
            },
            opposite: false
        },
         {
            gridLineWidth: 0,
            title: {
                text: 'VOC level',
                style: {
                    color: '#ffffff'
                }
            },
            labels: {
                format: '{value} ppm',
                style: {
                    color: '#ffffff'
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        rangeSelector: {
            enabled: false,
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            x: 80,
            verticalAlign: 'top',
            y: 55,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        series: [{
            name: 'Temperature',
            type: 'spline',
            yAxis: 0,
            color: '#ff3300',
            marker: {
                enabled: false
            },
            data: [],
            tooltip: {
                valueSuffix: ' °C'
            }

        }, {
            name: 'Relative humidity',
            type: 'spline',
            yAxis: 1,
            data: [],
            marker: {
                enabled: false
            },
            tooltip: {
                valueSuffix: '% RH'
            }

        }, {
            name: 'Pressure',
            type: 'spline',
            yAxis: 2,
            marker: {
                enabled: false
            },
            color: '#669900',
            data: [],
            tooltip: {
                valueSuffix: ' mbar'
            }
        }, 
        {
            name: 'VOC level',
            type: 'spline',
            marker: {
                enabled: false
            },
            color: '#ffffff',
            yAxis: 3,
            data: [],
            tooltip: {
                valueSuffix: ' ppm'
            }
        }]
    });
    
    // start querying data when charts are ready
    // startRecording();
});


// request temperature data from in timespan of 1 second
function requestDataTemperature() {
        $.get('data-by-date', {type: 'temperature'}, function(data) {
            console.log(data);
            data.forEach(function (d) {
                var shift = chart1.series[0].data.length > 100;
                var shiftCombined = chart5.series[0].data.length > 100;
                chart1.series[0].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shift);
                chart5.series[0].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shiftCombined);
            });
        });
}

// request humidity data from in timespan of 1 second
function requestDataHumidity() {
    $.get('data-by-date', {type: 'humidity'}, function(data) {
                data.forEach(function (d) {
                    var shift = chart2.series[0].data.length > 100;
                    var shiftCombined = chart5.series[1].data.length > 100;
                    chart2.series[0].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shift);
                    chart5.series[1].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shiftCombined);
                }); 
            });
}

// request pressure data from in timespan of 1 second
function requestDataPressure() {
    $.get('data-by-date', {type: 'pressure'}, function(data) {
                data.forEach(function (d) {
                    var shift = chart3.series[0].data.length > 100;
                    var shiftCombined = chart5.series[2].data.length > 100;
                    chart3.series[0].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shift);
                    chart5.series[2].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shiftCombined);
                });
            });
}

// request VOC data from in timespan of 1 second
function requestDataVOC() {
        $.get('data-by-date', {type: 'VOC'}, function(data) {
            data.forEach(function (d) {
                var shift = chart4.series[0].data.length > 100;
                var shiftCombined = chart5.series[3].data.length > 100;
                chart4.series[0].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shift);
                chart5.series[3].addPoint({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset}, true, shiftCombined);
            });
        });
}

// start querying functions and repeat them every second
function startRecording() {
	alert("Lubis mi kulac")
    setInterval(requestDataTemperature, 1000);
    setInterval(requestDataHumidity, 1000);
    setInterval(requestDataPressure, 1000);
    setInterval(requestDataVOC, 1000);
}

// define charts on-click handlers, so modals with full charts can open when clicked
$( document ).ready(function() {
    $("#container").click(function() {
         $.get('data', {type: 'temperature'}, function(data) {
            var temperatures = [];

            data.forEach(function (d) {
                temperatures.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
            });

            chart1Full = new Highcharts.stockChart({
                chart: {
                    renderTo: 'modal-container-temperature',
                    zoomType: 'x'
                },

                plotOptions:{
                    series:{
                        turboThreshold: 0
                    }
                },

                scrollbar: {
                    enabled: true
                },

                title: {
                    text: 'Temperature measurements'
                },

                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150,
                    maxZoom: 20 * 1000
                },

                rangeSelector: {
                    enabled: true,

                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: '3d'
                    }, {
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3
                },

                yAxis: {
                    title: {
                        text: 'Temperature (°C)'
                    }
                },

                series: [{
                    name: 'Temperature',
                    data: temperatures,
                    color: '#ff3300',
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: '°C'
                    }
                }]
            });
            $('#temperature-modal').modal('show');
        });
    });

    $("#container1").click(function() {
        $.get('data', {type: 'humidity'}, function(data) {
         
         var humidities = [];

                data.forEach(function (d) {
                    humidities.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
                }); 

        chart2Full = new Highcharts.stockChart({
            chart: {
                renderTo: 'modal-container-humidity',
                zoomType: 'x'
            },

            plotOptions:{
                series:{
                    turboThreshold: 0
                }
            },

            scrollbar: {
                enabled: true
            },

            title: {
                text: 'Relative humidity measurements'
            },

            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                maxZoom: 20 * 1000
            },

            rangeSelector: {
                enabled: true,

                buttons: [{
                    type: 'day',
                    count: 3,
                    text: '3d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                selected: 3
            },

            yAxis: {
                title: {
                    text: 'Relative humidity (% RH)'
                }
            },

            series: [{
                name: 'Relative humidity',
                data: humidities,
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: '% RH'
                }
            }]
            });
            $('#humidity-modal').modal('show');
        });
    });

    $("#container2").click(function(){
        $.get('data', {type: 'pressure'}, function(data) {
         var pressures = [];

                data.forEach(function (d) {
                    pressures.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
                });

                chart3Full = new Highcharts.stockChart({
            chart: {
                renderTo: 'modal-container-pressure',
                zoomType: 'x'
            },

            plotOptions:{
                series:{
                    turboThreshold: 0
                }
            },

            scrollbar: {
                enabled: true
            },

            title: {
                text: 'Pressure measurements'
            },

            xAxis: {
                type: 'datetime',
                tickPixelInterval: 150,
                maxZoom: 20 * 1000
            },

            rangeSelector: {
                enabled: true,

                buttons: [{
                    type: 'day',
                    count: 3,
                    text: '3d'
                }, {
                    type: 'week',
                    count: 1,
                    text: '1w'
                }, {
                    type: 'month',
                    count: 1,
                    text: '1m'
                }, {
                    type: 'month',
                    count: 6,
                    text: '6m'
                }, {
                    type: 'year',
                    count: 1,
                    text: '1y'
                }, {
                    type: 'all',
                    text: 'All'
                }],
                selected: 3
            },

            yAxis: {
                title: {
                    text: 'Pressure (mbar)'
                }
            },

            series: [{
                name: 'Pressure',
                data: pressures,
                color: '#669900',
                tooltip: {
                    valueDecimals: 1,
                    valueSuffix: 'mbar'
                }
                }]
            });

            $('#pressure-modal').modal('show');
        });
    });

    $('#container3').click(function(){
        $.get('data', {type: 'VOC'}, function(data) {
            
            var measurements = [];

            data.forEach(function (d) {
                measurements.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
            });

            chart4Full = new Highcharts.stockChart({
                chart: {
                    renderTo: 'modal-container-VOC',
                    zoomType: 'x'
                },

                plotOptions:{
                    series:{
                        turboThreshold: 0
                    }
                },

                scrollbar: {
                    enabled: true
                },

                title: {
                    text: 'VOC level measurements'
                },

                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150,
                    maxZoom: 20 * 1000
                },

                rangeSelector: {
                    enabled: true,

                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: '3d'
                    }, {
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3
                },

                yAxis: {
                    title: {
                        text: 'VOC level (ppm)'
                    }
                },

                series: [{
                    name: 'VOC level',
                    data: measurements,
                    color: '#ffffff',
                    tooltip: {
                        valueDecimals: 1,
                        valueSuffix: 'ppm'
                    }
                }]
            });
    
            $('#VOC-modal').modal('show');
        });
    });

    $("#mega-container").click(function() {
         $.get('data-all', function(data) {
             var temperatureArray = [];
             var humidityArray = [];
             var pressureArray = [];
             var VOCArray = [];

             data.forEach(function(d) {
                if (d.type == "temperature")
                    temperatureArray.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
                else if (d.type == "humidity")
                    humidityArray.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
                else if (d.type == "pressure")
                    pressureArray.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
                else if (d.type == "VOC")
                    VOCArray.push({y: d.value, x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
             });

             chart5Full = new Highcharts.stockChart('modal-graph-container', {
                chart: {
                    zoomType: 'x',
                    width: 900,
                    height: 730,
                     events: {
                        load: function () {
                            $('#checkboxContainerModal').css('display', 'table');
                            $('#all-modal').modal('show');
                        }
                     }
                },
                title: {
                    text: 'Unified sensor measurements'
                },

                rangeSelector: {
                    enabled: true,

                    buttons: [{
                        type: 'day',
                        count: 3,
                        text: '3d'
                    }, {
                        type: 'week',
                        count: 1,
                        text: '1w'
                    }, {
                        type: 'month',
                        count: 1,
                        text: '1m'
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6m'
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1y'
                    }, {
                        type: 'all',
                        text: 'All'
                    }],
                    selected: 3
                },

                plotOptions:{
                    series:{
                        turboThreshold: 0
                    }
                },
                scrollbar: {
                    enabled: true
                },
                xAxis: {
                    type: 'datetime',
                    tickPixelInterval: 150,
                    maxZoom: 20 * 1000
                },
                yAxis: [{
                    labels: {
                        format: '{value}°C',
                        style: {
                            color: '#ff3300'
                        }
                    },
                    title: {
                        text: 'Temperature',
                        style: {
                            color: '#ff3300'
                        }
                    },
                    opposite: false

                }, { 
                    gridLineWidth: 0,
                    title: {
                        text: 'Relative humidity',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    labels: {
                        format: '{value} % RH',
                        style: {
                            color: Highcharts.getOptions().colors[0]
                        }
                    },
                    opposite: false
                }, { 
                    gridLineWidth: 0,
                    title: {
                        text: 'Pressure',
                        style: {
                            color: '#669900'
                        }
                    },
                    labels: {
                        format: '{value} mbar',
                        style: {
                            color: '#669900'
                        }
                    },
                    opposite: true
                },
                {
                    gridLineWidth: 0,
                    title: {
                        text: 'VOC level',
                        style: {
                            color: '#ffffff'
                        }
                    },
                    labels: {
                        format: '{value} ppm',
                        style: {
                            color: '#ffffff'
                        }
                    },
                    opposite: true
                }],

                tooltip: {
                    shared: true
                },

                legend: {
                    layout: 'vertical',
                    align: 'left',
                    x: 80,
                    verticalAlign: 'top',
                    y: 55,
                    floating: true,
                    backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
                },
                series: [{
                    name: 'Temperature',
                    type: 'spline',
                    yAxis: 0,
                    color: '#ff3300',
                    marker: {
                        enabled: false
                    },
                    data: temperatureArray,
                    tooltip: {
                        valueSuffix: ' °C'
                    }

                }, {
                    name: 'Relative humidity',
                    type: 'spline',
                    yAxis: 1,
                    data: humidityArray,
                    marker: {
                        enabled: false
                    },
                    tooltip: {
                        valueSuffix: '% RH'
                    }

                }, {
                    name: 'Pressure',
                    type: 'spline',
                    yAxis: 2,
                    marker: {
                        enabled: false
                    },
                    color: '#669900',
                    data: pressureArray,
                    tooltip: {
                        valueSuffix: ' mbar'
                    }
                }, 
                {
                    name: 'VOC level',
                    type: 'spline',
                    marker: {
                        enabled: false
                    },
                    color: '#ffffff',
                    yAxis: 3,
                    data: VOCArray,
                    tooltip: {
                        valueSuffix: ' ppm'
                    }
                }]
            });
         });
    });
});

function toggleCheckbox(val) {
    if (val == "temperature") {
        if($("#checkboxTemperature").is(':checked'))
            chart5.series[0].setVisible(true);
        else
             chart5.series[0].setVisible(false);
    }
    else if (val == "humidity") {
        if($("#checkboxHumidity").is(':checked'))
            chart5.series[1].setVisible(true);
        else
             chart5.series[1].setVisible(false);
    }
    else if (val == "pressure") {
        if($("#checkboxPressure").is(':checked'))
            chart5.series[2].setVisible(true);
        else
             chart5.series[2].setVisible(false);
    }
    else if (val == "VOC") {
        if($("#checkboxVOC").is(':checked'))
            chart5.series[3].setVisible(true);
        else
             chart5.series[3].setVisible(false);
    }
}

function toggleCheckboxModal(val) {
    if (val == "temperature") {
        if($("#checkboxTemperatureModal").is(':checked'))
            chart5Full.series[0].setVisible(true);
        else
             chart5Full.series[0].setVisible(false);
    }
    else if (val == "humidity") {
        if($("#checkboxHumidityModal").is(':checked'))
            chart5Full.series[1].setVisible(true);
        else
             chart5Full.series[1].setVisible(false);
    }
    else if (val == "pressure") {
        if($("#checkboxPressureModal").is(':checked'))
            chart5Full.series[2].setVisible(true);
        else
             chart5Full.series[2].setVisible(false);
    }
    else if (val == "VOC") {
        if($("#checkboxVOCModal").is(':checked'))
            chart5Full.series[3].setVisible(true);
        else
             chart5Full.series[3].setVisible(false);
    }
}