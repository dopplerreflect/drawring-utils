"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineLength = exports.chordLength = exports.radialPointString = exports.radialPoint = exports.rtoa = exports.ator = void 0;
/**
 * Convert angle to radians.
 */
var ator = function (angle) { return angle * (Math.PI / 180); };
exports.ator = ator;
/**
 * Convert radians to angle
 */
var rtoa = function (radians) { return radians * (180 / Math.PI); };
exports.rtoa = rtoa;
/**
 * Return {x, y} coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
var radialPoint = function (angle, radius, options) { return ({
    x: ((options === null || options === void 0 ? void 0 : options.center) ? options.center.x : 0) +
        radius * Math.cos(angle * ((options === null || options === void 0 ? void 0 : options.degrees) ? Math.PI / 180 : 1)),
    y: ((options === null || options === void 0 ? void 0 : options.center) ? options.center.y : 0) +
        radius * Math.sin(angle * ((options === null || options === void 0 ? void 0 : options.degrees) ? Math.PI / 180 : 1)),
}); };
exports.radialPoint = radialPoint;
/**
 * Return "x,y" coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
var radialPointString = function (angle, radius, options) {
    var _a = (0, exports.radialPoint)(angle, radius, options), x = _a.x, y = _a.y;
    return [x, y].join();
};
exports.radialPointString = radialPointString;
/**
 * Return length of chord given angle in radians and radius.
 */
var chordLength = function (angle, radius) {
    return 2 * radius * Math.sin(angle / 2);
};
exports.chordLength = chordLength;
/**
 * Return length of a line given start and end {x:,y:} Points.
 */
var lineLength = function (start, end) {
    return Math.sqrt(Math.pow((end.x - start.x), 2) + Math.pow((end.y - start.y), 2));
};
exports.lineLength = lineLength;
