var NativeWebAnimationPlayer = /** @class */ (function () {
    function NativeWebAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NativeWebAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NativeWebAnimationPlayer.prototype.play = function () {
        var _this = this;
        var animation = this.element['animate'](this.keyframes, { duration: this.duration,
            easing: this.easing,
            fill: 'forwards' });
        animation.addEventListener('finish', function () { return _this.onDoneCallback.forEach(function (fn) { return fn(); }); });
    };
    return NativeWebAnimationPlayer;
}());
export { NativeWebAnimationPlayer };
var NoopAnimationPlayer = /** @class */ (function () {
    function NoopAnimationPlayer(element, keyframes, duration, easing) {
        this.element = element;
        this.keyframes = keyframes;
        this.duration = duration;
        this.easing = easing;
        this.onDoneCallback = [];
    }
    NoopAnimationPlayer.prototype.onDone = function (fn) {
        this.onDoneCallback.push(fn);
    };
    NoopAnimationPlayer.prototype.play = function () {
        this.onDoneCallback.forEach(function (fn) { return fn(); });
    };
    return NoopAnimationPlayer;
}());
export { NoopAnimationPlayer };
var Animations = /** @class */ (function () {
    function Animations() {
    }
    return Animations;
}());
export { Animations };
var NativeWebAnimations = /** @class */ (function () {
    function NativeWebAnimations() {
    }
    NativeWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NativeWebAnimationPlayer(element, keyframes, duration, easing);
    };
    return NativeWebAnimations;
}());
export { NativeWebAnimations };
var NoopWebAnimations = /** @class */ (function () {
    function NoopWebAnimations() {
    }
    NoopWebAnimations.prototype.animate = function (element, keyframes, duration, easing) {
        return new NoopAnimationPlayer(element, keyframes, duration, easing);
    };
    return NoopWebAnimations;
}());
export { NoopWebAnimations };
//# sourceMappingURL=animations.js.map