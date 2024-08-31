import Base  from '../../../node_modules/neo.mjs/src/core/Base.mjs';
import Chart from '../../../node_modules/chart.js/auto/auto.js';

/**
 * @class Charts.canvas.Helper
 * @extends Neo.core.Base
 * @singleton
 */
class Helper extends Base {
    static config = {
        /**
         * @member {String} className='Charts.canvas.Helper'
         * @protected
         */
        className: 'Charts.canvas.Helper',
        /**
         * @member {Object} remote
         * @protected
         */
        remote: {
            app: [
                'createChartInstance'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }

    /**
     *
     * @param {Object} opts
     * @param {Object} opts.config
     * @param {Object} opts.id
     */
    createChartInstance(opts) {
        let canvas = Neo.currentWorker.map[opts.id],
            chart  = new Chart(canvas, opts.chartConfig);

        canvas.width  = 600;
        canvas.height = 400;

        chart.resize();

        console.log(chart);
    }
}

export default Neo.setupClass(Helper);
