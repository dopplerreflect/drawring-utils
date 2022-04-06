export declare type Point = {
    x: number;
    y: number;
};
export declare type Line = [Point, Point];
export declare type RadialPointOptions = {
    center?: Point;
    degrees?: boolean;
};
/**
 * Convert angle to radians.
 */
export declare const ator: (angle: number) => number;
/**
 * Convert radians to angle
 */
export declare const rtoa: (radians: number) => number;
/**
 * Return {x, y} coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
export declare const radialPoint: (angle: number, radius: number, options?: RadialPointOptions | undefined) => Point;
/**
 * Return "x,y" coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
export declare const radialPointString: (angle: number, radius: number, options?: RadialPointOptions | undefined) => string;
/**
 * Return length of chord given angle in radians and radius.
 */
export declare const chordLength: (angle: number, radius: number) => number;
/**
 * Return length of a line given start and end {x:,y:} Points.
 */
export declare const lineLength: (start: Point, end: Point) => number;
/**
 * Linear interpolation
 */
export declare const lerp: (start: number, end: number, t: number) => number;
/**
 * Divide 1 by <divs>
 * @param divs number of divs to return
 * @returns array of floats from 0...1
 */
export declare const interpolate: (divs: number) => number[];
/**
 * Return x, y coordinates of intersection of two lines
 * @params line1 Line
 * @params line2 Line
 * @returns Point
 */
export declare const intersection: (line1: Line, line2: Line) => Point;
