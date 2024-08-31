import Base from '../../../node_modules/neo.mjs/src/core/Base.mjs';

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
