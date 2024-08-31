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
     * @param {Object} config
     */
    createChartInstance(config) {
        const canvas = Neo.currentWorker.map[config.id];

        const chart = new Chart(canvas, {
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
        });

        canvas.height = 400;
        canvas.width  = 600;

        chart.resize()
    }
}

export default Neo.setupClass(Helper);
