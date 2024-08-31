import BarChart           from './BarChart.mjs';
import BaseViewport       from '../../../node_modules/neo.mjs/src/container/Viewport.mjs';
import LineChart          from './LineChart.mjs';
import Toolbar            from '../../../node_modules/neo.mjs/src/toolbar/Base.mjs';
import ViewportController from './ViewportController.mjs';

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
         * @member {String[]} cls=['charts-viewport']
         */
        cls: ['charts-viewport'],
        /**
         * @member {Neo.controller.Component} controller=ViewportController
         */
        controller: ViewportController,
        /**
         * @member {Object[]} items
         */
        items: [{
            ntype : 'container',
            layout: {ntype: 'vbox'},
            style : {padding: '10px'},

            items: [{
                module: BarChart,
                cls   : 'chart-canvas'
            }, {
                module: LineChart,
                cls   : 'chart-canvas'
            }, {
                module: Toolbar,
                cls   : 'charts-action-toolbar',
                flex  : 'none',

                items: [{
                    handler: 'onAddDataButtonClick',
                    text   : 'Add Data'
                }, {
                    handler: 'onRemoveDataButtonClick',
                    text   : 'Remove Data'
                }]
            }]
        }],
        /*
         * @member {Object} layout={ntype:'fit'}
         */
        layout: {ntype: 'fit'}
    }
}

export default Neo.setupClass(Viewport);
