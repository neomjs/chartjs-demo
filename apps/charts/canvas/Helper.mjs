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
                'addRandomData',
                'createChartInstance',
                'removeLastDataPoint'
            ]
        },
        /**
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }

    /**
     * @member {Map} charts=new Map()
     */
    charts = new Map()

    /**
     * @param {Object} opts
     * @param {Number} [opts.max=20]
     * @param {Number} [opts.min=0]
     */
    addRandomData(opts) {
        let max   = Neo.isNumber(opts?.max) ? opts.max : 20,
            min   = Neo.isNumber(opts?.min) ? opts.min :  0,
            value = Math.floor(Math.random() * (max - min + 1) + min);

        this.charts.forEach(chart => {
            chart.data.datasets[0].data.push(value);
            chart.data.labels.push('Random ' + (value));
            chart.update()
        })
    }

    /**
     * @param {Object} opts
     * @param {Object} opts.config
     * @param {Object} opts.id
     */
    createChartInstance(opts) {
        let canvas = Neo.currentWorker.map[opts.id],
            chart  = new Chart(canvas, opts.chartConfig);

        this.charts.set(opts.id, chart);

        console.log(this.charts);

        canvas.width  = 600;
        canvas.height = 400;

        chart.resize();

        console.log(chart);
    }


    /**
     *
     */
    removeLastDataPoint() {
        this.charts.forEach(chart => {
            chart.data.datasets[0].data.pop();
            chart.data.labels.pop();
            chart.update()
        })
    }
}

export default Neo.setupClass(Helper);
