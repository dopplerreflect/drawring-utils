export type Point = {
  x: number;
  y: number;
};
export type Line = [Point, Point];

export type RadialPointOptions = {
  center?: Point;
  degrees?: boolean;
};

/**
 * Convert angle to radians.
 */
export const ator = (angle: number): number => angle * (Math.PI / 180);

/**
 * Convert radians to angle
 */
export const rtoa = (radians: number): number => radians * (180 / Math.PI);

/**
 * Return {x, y} coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
export const radialPoint = (
  angle: number,
  radius: number,
  options?: RadialPointOptions
): Point => ({
  x:
    (options?.center ? options.center.x : 0) +
    radius * Math.cos(options?.degrees ? ator(angle) : angle),
  y:
    (options?.center ? options.center.y : 0) +
    radius * Math.sin(options?.degrees ? ator(angle) : angle),
});

/**
 * Return "x,y" coordinates of a point on a circle given an angle and radius.
 * Optionally define center {x, y} and/or whether to use radians or degrees.
 */
export const radialPointString = (
  angle: number,
  radius: number,
  options?: RadialPointOptions
): string => {
  const { x, y } = radialPoint(angle, radius, options);
  return [x, y].join();
};

/**
 * Return length of chord given angle in radians and radius.
 */
export const chordLength = (angle: number, radius: number): number =>
  2 * radius * Math.sin(angle / 2);

/**
 * Return length of a line given start and end {x:,y:} Points.
 */
export const lineLength = (start: Point, end: Point): number =>
  Math.sqrt((end.x - start.x) ** 2 + (end.y - start.y) ** 2);

/**
 * Linear interpolation
 */
export const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

/**
 * Divide 1 by <divs>
 * @param divs number of divs to return
 * @returns array of floats from 0...1
 */
export const interpolate = (divs: number): number[] => {
  //@ts-ignore
  return [0, ...[...Array(divs).keys()].map(k => (1 / divs) * (k + 1))];
};

/**
 * Return x, y coordinates of intersection of two lines
 * @params line1 Line
 * @params line2 Line
 * @returns Point
 */
export const intersection = (line1: Line, line2: Line): Point => {
  const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = line1;
  const [{ x: x3, y: y3 }, { x: x4, y: y4 }] = line2;
  const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  let x = ((x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4)) / denominator;

  let y = ((x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4)) / denominator;

  if (x === -0) x = 0;
  if (y === -0) y = 0;

  console.log({ x, y });
  return { x, y };
};
