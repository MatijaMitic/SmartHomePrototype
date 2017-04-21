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
	var temp = [];
	var sound = [];
	var flood = [];
	var flame = [];
	
	$.get('data', {type: 'temp'}, function(data) {
            data.forEach(function (d) {
                temp.push({y: parseInt(d.value), x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
            });
			
			chart1 = new Highcharts.stockChart({
				chart: {
					renderTo: 'container',
					zoomType: 'x'
				},

				exporting: {
				 enabled: true
				},

				navigator: {
					enabled: true
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
					enabled: true
				},

				yAxis: {
					title: {
						text: 'Temperature (°C)'
					}
				},

				series: [{
					name: 'Temperature',
					data: temp,
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
			
			$.get('data', {type: 'sound'}, function(data) {
				data.forEach(function (d) {
					sound.push({y: parseInt(d.value), x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
				});
				
				    chart2 = new Highcharts.stockChart({
						chart: {
							renderTo: 'container1',
							zoomType: 'x'
						},

						exporting: {
						 enabled: true
						},

						navigator: {
							enabled: true
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
							text: 'Sound'
						},

						xAxis: {
							type: 'datetime',
							tickPixelInterval: 150,
							maxZoom: 20 * 1000
						},

						rangeSelector: {
							enabled: true
						},

						yAxis: {
							title: {
								text: 'Measured sound'
							}
						},

						series: [{
							name: 'Sound',
							data: sound,
							marker: {
								enabled: true
							},
							tooltip: {
								valueDecimals: 1
							}
						}]
					});
			});
			
			$.get('data', {type: 'flame'}, function(data) {
				data.forEach(function (d) {
					flame.push({y: parseInt(d.value), x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
					console.log(d);
				});
				
				chart3 = new Highcharts.stockChart({
						chart: {
							renderTo: 'container2',
							zoomType: 'x'
						},

						exporting: {
						 enabled: true
						},

						plotOptions:{
							series:{
								turboThreshold: 0
							}
						},

						navigator: {
							enabled: true
						},

						scrollbar: {
							enabled: true
						},

						title: {
							text: 'Flame'
						},

						xAxis: {
							type: 'datetime',
							tickPixelInterval: 150,
							maxZoom: 20 * 1000
						},

						rangeSelector: {
							enabled: true
						},

						yAxis: {
							title: {
								text: 'Flame occurrence'
							}
						},

						series: [{
							name: 'Flame',
							data: flame,
							color: '#669900',
							marker: {
								enabled: true
							},
							tooltip: {
								valueDecimals: 1
							}
						}]
				});
			});
			
		$.get('data', {type: 'flood'}, function(data) {
            data.forEach(function (d) {
                flood.push({y: parseInt(d.value), x: parseInt((new Date(d.timestamp)).getTime()) - timezoneOffset});
				 chart4 = new Highcharts.stockChart({
					chart: {
						renderTo: 'container3',
						zoomType: 'x'
					},

					exporting: {
					 enabled: true
					},

					navigator: {
						enabled: true
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
						text: 'Water'
					},

					xAxis: {
						type: 'datetime',
						tickPixelInterval: 150,
						maxZoom: 20 * 1000
					},

					rangeSelector: {
						enabled: true
					},

					yAxis: {
						title: {
							text: 'Water occurrence'
						}
					},

					series: [{
						name: 'Water',
						data: flood,
						color: '#ffffff',
						marker: {
							enabled: false
						},
						tooltip: {
							valueDecimals: 1
						}
					}]
				});
            });
			
			
        });
	});
});
   