import fs from 'fs';

const filePath = 'src/components/PracticeHub.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/tag: 'Tutorial /g, "tag: 'Set ");
content = content.replace(/tag: 'Mock 2G'/g, "tag: 'Full Set 2G'");

fs.writeFileSync(filePath, content, 'utf8');
console.log('Done');
