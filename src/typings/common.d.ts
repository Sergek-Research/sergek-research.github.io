declare module 'compiled-lang/en.json' {}

declare module 'compiled-lang/ru.json' {}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg' {
  import React, { SVGProps } from 'react';

  const SVG: React.FC<SVGProps<SVGSVGElement>>;
  export default SVG;
}
