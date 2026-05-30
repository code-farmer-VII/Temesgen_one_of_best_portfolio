import fs from 'fs';
import path from 'path';

const FILES_TO_DOWNLOAD = [
  'package.json',
  'constants/index.ts',
  'app/(root)/(home)/page.tsx',
  'app/(root)/about/page.tsx',
  'app/(root)/contact/page.tsx',
  'app/(root)/layout.tsx',
  'app/(root)/portfolio/page.tsx',
  'app/(root)/ProjectPortfolio/[id]/page.jsx',
  'app/layout.tsx',
  'app/globals.css',
  'components/Accordion.tsx',
  'components/FaqSection.jsx',
  'components/Footer.tsx',
  'components/Header.tsx',
  'components/MobileMenu.tsx',
  'components/NavLinks.tsx',
  'components/PortfolioItem.tsx',
  'components/PortfolioSection.tsx',
  'components/SectionHeading.tsx',
  'components/Skills.tsx',
  'components/TestimonialSection.tsx',
  'components/animation.jsx',
  'components/slider.jsx',
  'components/uiAndUxdesign.jsx',
  'hooks/useWindowSize.ts'
];

async function downloadFile(repoPath: string) {
  const url = `https://raw.githubusercontent.com/code-farmer-VII/Temesgen-portfolio/main/${repoPath}`;
  const localPath = path.join('src', 'original', repoPath);
  
  // create directories
  fs.mkdirSync(path.dirname(localPath), { recursive: true });
  
  console.log(`Downloading ${url} -> ${localPath}`);
  const res = await fetch(url);
  if (!res.ok) {
    console.error(`Failed to download ${repoPath}: ${res.statusText}`);
    return;
  }
  const content = await res.text();
  fs.writeFileSync(localPath, content, 'utf8');
}

async function main() {
  console.log('Downloading original files...');
  for (const file of FILES_TO_DOWNLOAD) {
    await downloadFile(file);
  }
  console.log('Download complete!');
}

main();
