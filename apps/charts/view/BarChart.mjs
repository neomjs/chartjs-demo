import ChartComponent from '../../../src/component/wrapper/ChartJS.mjs';

/**
 * @class Charts.view.BarChart
 * @extends Neo.component.Base
 */
class BarChart extends ChartComponent {
    static config = {
        /**
         * @member {String} className='Charts.view.BarChart'
         * @protected
         */
        className: 'Charts.view.BarChart',
        /**
         * @member {Object} chartConfig=null
         */
        chartConfig: {
            type   : 'bar',
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

export default Neo.setupClass(BarChart);
