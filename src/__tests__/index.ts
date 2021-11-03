import {
  radialPoint,
  radialPointString,
  ator,
  rtoa,
  chordLength,
  lineLength,
} from '../index';

const angleRadians = Math.PI;

describe('radialPoint', () => {
  test('works with no options', () => {
    expect(radialPoint(0, 5)).toStrictEqual({ x: 5, y: 0 });
  });

  test('radians', () => {
    expect(radialPoint(angleRadians, 270)).toStrictEqual({
      x: -270,
      y: 3.3065463576978534e-14,
    });
  });

  test('degrees', () => {
    expect(radialPoint(180, 270, { degrees: true })).toStrictEqual({
      x: -270,
      y: 3.3065463576978534e-14,
    });
  });

  test('offset radians', () => {
    expect(
      radialPoint(angleRadians, 270, { center: { x: -5, y: -5 } })
    ).toStrictEqual({
      x: -275,
      y: -4.999999999999967,
    });
  });

  test('offset degrees', () => {
    expect(
      radialPoint(180, 270, { degrees: true, center: { x: -5, y: -5 } })
    ).toStrictEqual({
      x: -275,
      y: -4.999999999999967,
    });
  });
});

describe('radialPointString', () => {
  test('works with no options', () => {
    expect(radialPointString(0, 5)).toBe('5,0');
  });

  test('radians', () => {
    expect(radialPointString(angleRadians, 270)).toBe(
      '-270,3.3065463576978534e-14'
    );
  });

  test('degrees', () => {
    expect(radialPointString(180, 270, { degrees: true })).toBe(
      '-270,3.3065463576978534e-14'
    );
  });

  test('offset radians', () => {
    expect(
      radialPointString(angleRadians, 270, { center: { x: -5, y: -5 } })
    ).toBe('-275,-4.999999999999967');
  });

  test('offset degrees', () => {
    expect(
      radialPointString(180, 270, { degrees: true, center: { x: -5, y: -5 } })
    ).toBe('-275,-4.999999999999967');
  });
});

test('ator', () => {
  expect(ator(180)).toBe(Math.PI);
});

test('rtoa', () => {
  expect(rtoa(Math.PI)).toBe(180);
});

test('chordLength', () => {
  expect(Math.round(chordLength((Math.PI * 2) / 6, 100))).toBe(100);
});

test('lineLength', () => {
  expect(Math.round(lineLength({ x: 0, y: 0 }, { x: 3, y: 4 }))).toBe(5);
});
