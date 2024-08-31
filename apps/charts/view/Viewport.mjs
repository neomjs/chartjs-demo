import BaseViewport   from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import ChartComponent from '../../../src/component/wrapper/ChartJS.mjs';

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
            module: ChartComponent,
            height: 300,
            width : 500,
            style : {backgroundColor: 'lightblue', flex: 'none', margin: '20px'}
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }
}

export default Neo.setupClass(Viewport);
