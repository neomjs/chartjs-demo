import ChartComponent from '../../../src/component/wrapper/ChartJS.mjs';

/**
 * @class Charts.view.LineChart
 * @extends Neo.component.wrapper.ChartJS
 */
class LineChart extends ChartComponent {
    static config = {
        /**
         * @member {String} className='Charts.view.LineChart'
         * @protected
         */
        className: 'Charts.view.LineChart',
        /**
         * @member {Object} chartConfig
         */
        chartConfig: {
            type   : 'line',
            data   : {
                labels  : ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label      : '# of Votes',
                    data       : [12, 19, 3, 5, 2, 3],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    }
}

export default Neo.setupClass(LineChart);
