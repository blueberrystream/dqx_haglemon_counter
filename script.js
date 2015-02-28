// Gauge Chart
var i, width = (window.innerWidth - 50) / 5, height = window.innerHeight - 100,
	AIMS = [1, 1, 1, 1, 1.5, 1.5, 1.5, 2, 2, 1], t = Date.now();

$.get('temp.csv?_=' + t, function(data) {
	data = data.split(',');
	for (i = 0; i < 10; i++) {
		c3.generate({
			bindto: '#gauge-chart' + (i + 1),
			size: {
				width: width,
			},
			data: {
				columns: [['Target' + (i + 1), data[i] / 10000 / AIMS[i]]],
				type: 'gauge'
			},
			color: {
				pattern: ['#ff8888', '#ffcc88', '#ffff88', '#88ff88'],
				threshold: {
					values: [30, 50, 90, 100]
				}
			}
		});
	}
});

// Line Chart
c3.generate({
	bindto: '#line-chart',
	size: {
		height: height
	},
	data: {
		url: 'count.csv?_=' + t,
		x: 'timestamp'
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				fit: true,
				format: '%Y/%m/%d %H:%M'
			}
		},
		y: {
			max: 2000000
		}
	},
	grid: {
		y: {
			lines: [
				{value: 1000000, text: 'for Target1, 2, 3, 4, 10 / 1,000,000'},
				{value: 1500000, text: 'for Target5, 6, 7 / 1,500,000'},
				{value: 2000000, text: 'for Target8, 9 / 2,000,000'}
			]
		}
	}
});

// Bar Chart
c3.generate({
	bindto: '#bar-chart',
	size: {
		height: height
	},
	data: {
		url: 'count.csv?_=' + t,
		x: 'timestamp',
		type: 'bar',
		groups: [['Target1','Target2','Target3','Target4','Target5','Target6','Target7','Target8','Target9','Target10']],
		order: null
	},
	axis: {
		x: {
			type: 'timeseries',
			tick: {
				fit: true,
				format: '%Y/%m/%d %H:%M'
			}
		}
	}
});
