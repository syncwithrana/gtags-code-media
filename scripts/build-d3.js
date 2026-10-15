const esbuild = require('esbuild');
const path = require('path');
const fs = require('fs');

const entryCode = `
// 1. d3-array: only min and max
export { default as min } from "d3-array/src/min.js";
export { default as max } from "d3-array/src/max.js";

// 2. d3-scale: only scaleOrdinal
export { default as scaleOrdinal } from "d3-scale/src/ordinal.js";

// 3. d3-scale-chromatic: only schemeCategory10
export { default as schemeCategory10 } from "d3-scale-chromatic/src/categorical/category10.js";

// 4. d3-shape: only linkHorizontal
export { linkHorizontal } from "d3-shape/src/link/index.js";

// 5. d3-selection: select, selectAll, selection
export { select, selectAll, selection } from "d3-selection/src/index.js";

// 6. d3-transition: binds to selection prototype and exports
import "d3-transition/src/selection/index.js";
export { default as transition } from "d3-transition/src/transition/index.js";
export { default as active } from "d3-transition/src/active.js";
export { default as interrupt } from "d3-transition/src/interrupt.js";

// 7. d3-zoom: zoom, zoomTransform, zoomIdentity
export { default as zoom } from "d3-zoom/src/zoom.js";
export { default as zoomTransform, identity as zoomIdentity } from "d3-zoom/src/transform.js";

// 8. d3-flextree: flextree layout engine
export { flextree } from "d3-flextree";
`;

const licenseBanner = `/*!
 * D3.js (custom ultra-lean build) v6.7.0
 * Copyright (c) 2010-2021 Mike Bostock. Released under the BSD-3-Clause license.
 * Includes d3-flextree (c) Chris Horvath (WTFPL License).
 * https://d3js.org | https://github.com/klortho/d3-flextree
 */`;

async function build() {
  const rootDir = path.resolve(__dirname, '..');
  const outFile = path.join(rootDir, 'media/d3.ultralean.min.js');

  console.log('Building ultra-lean D3 + flextree bundle with esbuild...');
  const startTime = Date.now();

  await esbuild.build({
    stdin: {
      contents: entryCode,
      resolveDir: rootDir,
      sourcefile: 'd3-entry.js',
      loader: 'js',
    },
    bundle: true,
    minify: true,
    format: 'iife',
    globalName: 'd3',
    banner: {
      js: licenseBanner,
    },
    outfile: outFile,
  });

  const duration = Date.now() - startTime;
  const stats = fs.statSync(outFile);
  const sizeKb = (stats.size / 1024).toFixed(1);

  console.log(`✓ Built ${outFile}`);
  console.log(`  Size: ${stats.size} bytes (${sizeKb} KB)`);
  console.log(`  Time: ${duration}ms`);
}

build().catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
