const createFontStyle = (
  family: string,
  weight: number,
  size: number,
  lineHeight: number,
  letterSpacing: number,
) => `
  font-family: "${family}", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
  font-weight: ${weight};
  font-variation-settings: 'wght' ${weight};
  font-size: ${size}px;
  line-height: ${lineHeight}%;
  letter-spacing: ${letterSpacing}%;
`;

export const fonts = {
  h1: createFontStyle('Pretendard Variable', 700, 40, 140, -2),
  h2: createFontStyle('Pretendard Variable', 600, 32, 130, -2),
  h3: createFontStyle('Pretendard Variable', 600, 24, 130, -2),
  sub1: createFontStyle('Pretendard Variable', 600, 20, 130, 0),
  sub2: createFontStyle('Pretendard Variable', 600, 18, 130, 0),
  body1: createFontStyle('Pretendard Variable', 600, 16, 130, -2),
  body2: createFontStyle('Pretendard Variable', 500, 16, 130, -2),
  body3: createFontStyle('Pretendard Variable', 600, 14, 130, -2),
  body4: createFontStyle('Pretendard Variable', 500, 14, 130, -2),
  button1: createFontStyle('Pretendard Variable', 600, 16, 130, 0),
  button2: createFontStyle('Pretendard Variable', 600, 12, 130, -2),
};

export type FontsType = typeof fonts;
