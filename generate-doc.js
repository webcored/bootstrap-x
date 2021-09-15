// moves files from stencils to vue press
const fs = require('fs');
const path = require('path');

const baseReadDir = path.resolve('./output');
const baseWriteDir = path.resolve('./docs/src/guide');


const writeFile = (fileReadPath, dirName) => {
  const dirs = fs.readdirSync(fileReadPath);
  dirs.forEach((dir) => {
    if (dir.startsWith('bx')) {
      let fileContent = fs.readFileSync(`${fileReadPath}/${dir}/readme.md`, 'utf-8');
      console.log(`${baseWriteDir}/${dirName}/${dir}.md`)
      fs.writeFileSync(`${baseWriteDir}/${dirName}/${dir}.md`, fileContent);
    }
  });
}

// component
writeFile(`${baseReadDir}/components`, 'components');
writeFile(`${baseReadDir}/components/layouts`, 'layouts');
