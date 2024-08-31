import Component from '../../../node_modules/neo.mjs/src/component/Canvas.mjs';

/**
 * Convenience class to render a Chart.js component
 * @class Neo.component.wrapper.ChartJS
 * @extends Neo.component.Canvas
 */
class ChartJS extends Component {
    static config = {
        /**
         * @member {String} className='Neo.component.wrapper.ChartJS'
         * @protected
         */
        className: 'Neo.component.wrapper.ChartJS',
        /**
         * @member {String} ntype='chartjs-component'
         * @protected
         */
        ntype: 'chartjs-component'
    }
    /**
     * Triggered after the offscreenRegistered config got changed
     * @param {Boolean} value
     * @param {Boolean} oldValue
     * @protected
     */
    afterSetOffscreenRegistered(value, oldValue) {
        if (value) {
            console.log('afterSetOffscreenRegistered', this.id);
            Charts.canvas.Helper.createChartInstance({
                id: this.id
            })
        }
    }
}

export default Neo.setupClass(ChartJS);
