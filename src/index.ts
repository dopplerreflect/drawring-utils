export type Point = {
  x: number;
  y: number;
};
export type PointOptions = {
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
  options?: PointOptions
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
  options?: PointOptions
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
