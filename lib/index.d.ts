export declare type Point = {
    x: number;
    y: number;
};
export declare type PointOptions = {
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
export declare const radialPoint: (angle: number, radius: number, options?: PointOptions | undefined) => Point;
/**
 * Return "x,y" coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
export declare const radialPointString: (angle: number, radius: number, options?: PointOptions | undefined) => string;
/**
 * Return length of chord given angle in radians and radius.
 */
export declare const chordLength: (angle: number, radius: number) => number;
/**
 * Return length of a line given start and end {x:,y:} Points.
 */
export declare const lineLength: (start: Point, end: Point) => number;
