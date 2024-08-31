import Component    from '../../../node_modules/neo.mjs/src/component/Base.mjs';
import TabContainer from '../../../node_modules/neo.mjs/src/tab/Container.mjs';
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
            module: Component,
            height: 300,
            id    : 'my-canvas', // todo
            width : 500,
            style : {backgroundColor: 'lightblue', flex: 'none', margin: '20px'},
            tag   : 'canvas'

        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }
}

export default Neo.setupClass(Viewport);
