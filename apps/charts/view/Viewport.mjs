import BarChart     from './BarChart.mjs';
import BaseViewport from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';

/**
 * @class Charts.view.Viewport
 * @extends Neo.container.Viewport
 */
class Viewport extends BaseViewport {
    static config = {
        /**
         * @member {String} className='Charts.view.Viewport'
         * @protected
         */
        className: 'Charts.view.Viewport',
        /**
         * @member {Object[]} items
         */
        items: [{
            module: BarChart,
            height: 400,
            width : 600,
            style : {flex: 'none'}
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }
}

export default Neo.setupClass(Viewport);
