import React from 'react';

const flagSquares = Array.from({ length: 12 }, (_, i) => {
  const row = Math.floor(i / 4);
  const col = i % 4;
  return { x: 8 + col * 11, y: 10 + row * 11, dark: (row + col) % 2 === 0 };
});

export const ThemeWipe = () => (
  <div className="theme-wipe is-running" aria-hidden="true">
    <div className="flag-curtain" />
    <div className="skater-rider">
      <svg viewBox="0 0 280 220" fill="none">
        <g className="rider-flag">
          <path className="rider-detail" d="M50 12 93 74" />
          <g className="flag-cloth">
            {flagSquares.map(({ x, y, dark }, i) => <rect key={i} x={x} y={y} width="11" height="11" className={dark ? 'rider-flag-square-dark' : 'rider-flag-square-light'} />)}
            <path d="M8 10c17-3 34-3 44 0v33c-15-3-31-3-44 0V10Z" fill="none" stroke="#22211e" strokeWidth="3" />
          </g>
        </g>
        <path className="rider-outline" d="M146 126c-2 15-19 25-41 29l10 13c28-5 47-15 57-31l-26-11Z" />
        <path className="rider-outline" d="M158 126c15 0 25 12 40 24l-11 14c-25-7-39-17-51-33l22-5Z" />
        <path className="rider-fill" d="M141 76c10-12 32-11 43 1l8 48c-14 12-36 15-57 3l6-52Z" />
        <path className="rider-outline" d="M151 83c-9-3-20-1-28 7L96 75l-8 10 30 24c10 3 23-2 30-12l3-14Z" />
        <path className="rider-outline" d="M175 83c10-5 23-1 34 7l13 1 2 10-19 1-30-10V83Z" />
        <path className="rider-detail" d="m94 75-2-7m-5 17-7-4m130 11 7-7" />
        <circle className="rider-outline" cx="170" cy="54" r="18" />
        <path className="rider-fill" d="M151 49c1-17 27-25 39-10l2 9c-12-4-27-4-41 1Z" />
        <path className="rider-detail" d="m161 57 1 1m14-1 1 1" />
        <path className="rider-fill" d="M97 165c37 8 78 8 120-1l-4 10c-38 10-77 10-113 0l-3-9Z" />
        <circle className="rider-wheel" cx="119" cy="181" r="8" />
        <circle className="rider-wheel" cx="197" cy="181" r="8" />
        <path className="rider-detail" d="M109 194c26 6 56 6 81 0" />
      </svg>
    </div>
  </div>
);
