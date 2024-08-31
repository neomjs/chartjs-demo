import Component from '../../../node_modules/neo.mjs/src/controller/Component.mjs';

/**
 * @class Charts.view.ViewportController
 * @extends Neo.controller.Component
 */
class ViewportController extends Component {
    static config = {
        /**
         * @member {String} className='Charts.view.ViewportController'
         * @protected
         */
        className: 'Charts.view.ViewportController'
    }

    /**
     * @param {Object} data
     */
    onAddDataButtonClick(data) {
        Charts.canvas.Helper.addRandomData()
    }

    /**
     * @param {Object} data
     */
    onRemoveDataButtonClick(data) {
        Charts.canvas.Helper.removeLastDataPoint()
    }
}

export default Neo.setupClass(ViewportController);
