var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Wrapper for mdl error messages.
 */
var MdlError = /** @class */ (function (_super) {
    __extends(MdlError, _super);
    function MdlError(value) {
        /* istanbul ignore next */
        return _super.call(this, value) || this;
    }
    return MdlError;
}(Error));
export { MdlError };
var MdlStructureError = /** @class */ (function (_super) {
    __extends(MdlStructureError, _super);
    function MdlStructureError(child, requiredParent) {
        /* istanbul ignore next */
        return _super.call(this, "\"" + child + "\" requires \"" + requiredParent + "\" as a parent.") || this;
    }
    return MdlStructureError;
}(MdlError));
export { MdlStructureError };
//# sourceMappingURL=mdl-error.js.map