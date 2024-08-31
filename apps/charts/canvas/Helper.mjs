import Base  from '../../../node_modules/neo.mjs/src/core/Base.mjs';
import Chart from '../../../node_modules/chart.js/auto/auto.js';

console.log(Chart);

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
         * @member {Boolean} singleton=true
         * @protected
         */
        singleton: true
    }
}

export default Neo.setupClass(Helper);
