"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersection = exports.interpolate = exports.lerp = exports.lineLength = exports.chordLength = exports.radialPointString = exports.radialPoint = exports.rtoa = exports.ator = void 0;
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
        radius * Math.cos((options === null || options === void 0 ? void 0 : options.degrees) ? (0, exports.ator)(angle) : angle),
    y: ((options === null || options === void 0 ? void 0 : options.center) ? options.center.y : 0) +
        radius * Math.sin((options === null || options === void 0 ? void 0 : options.degrees) ? (0, exports.ator)(angle) : angle),
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
/**
 * Linear interpolation
 */
var lerp = function (start, end, t) { return start + (end - start) * t; };
exports.lerp = lerp;
/**
 * Divide 1 by <divs>
 * @param divs number of divs to return
 * @returns array of floats from 0...1
 */
var interpolate = function (divs) {
    //@ts-ignore
    return __spreadArray([0], __spreadArray([], Array(divs).keys(), true).map(function (k) { return (1 / divs) * (k + 1); }), true);
};
exports.interpolate = interpolate;
/**
 * Return x, y coordinates of intersection of two lines
 * @params line1 Line
 * @params line2 Line
 * @returns Point
 */
var intersection = function (line1, line2) {
    var _a = line1[0], x1 = _a.x, y1 = _a.y, _b = line1[1], x2 = _b.x, y2 = _b.y;
    var _c = line2[0], x3 = _c.x, y3 = _c.y, _d = line2[1], x4 = _d.x, y4 = _d.y;
    var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);
    var x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;
    var y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;
    if (x === -0)
        x = 0;
    if (y === -0)
        y = 0;
    console.log({ x: x, y: y });
    return { x: x, y: y };
};
exports.intersection = intersection;
