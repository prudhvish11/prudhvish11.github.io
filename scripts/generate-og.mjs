// Build-time OG image generator. Run manually with `node scripts/generate-og.mjs`
// whenever the brand card copy changes — not part of the page-render runtime.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/og');
mkdirSync(outDir, { recursive: true });

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0C1012" />
  <text x="80" y="160" font-family="Helvetica, Arial, sans-serif" font-size="56" font-weight="700" fill="#F5F1E9">PN.</text>
  <rect x="80" y="210" width="64" height="3" fill="#8F3037" />
  <text x="80" y="320" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="700" letter-spacing="-2" fill="#F5F1E9">PRUDHVISH NARAYANAM</text>
  <text x="80" y="380" font-family="Helvetica, Arial, sans-serif" font-size="30" font-weight="500" letter-spacing="4" fill="#8E8D88">SOFTWARE ENGINEER</text>
  <text x="80" y="520" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="500" letter-spacing="3" fill="#F5F1E9">WORK / WRITING / IDEAS</text>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile(path.join(outDir, 'default.png'));
console.log('Generated public/og/default.png');
