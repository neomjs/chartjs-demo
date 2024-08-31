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
        className: 'Charts.view.BarChart'
    }
}

export default Neo.setupClass(BarChart);
