import fs from 'fs';

const filePath = 'src/components/PracticeHub.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update item.name rendering to not incorrectly split if there's no colon.
// It was: `{item.name.split(': ')[0]} <br /> {item.name.split(': ')[1] || item.name}`
// Wait, if item.name="Valuation Fundamentals", then item.name.split(': ')[0] is "Valuation Fundamentals".
// The second part is undefined, so `|| item.name` results in "Valuation Fundamentals" again, duplicating it!
// Let's replace the JSX for this inside batch 2 map (around line 830).
// Let's replace the Mocks rendering too.

content = content.replace(
  /{item\.name\.split\(': '\)\[0\]} <br \/> {item\.name\.split\(': '\)\[1\] \|\| item\.name}/g,
  '{item.name.includes(\':\') ? <>{item.name.split(\':\')[0]}:<br/>{item.name.split(\':\')[1]}</> : item.name}'
);

content = content.replace(/name: 'Tutorial 2A: Valuation Fundamentals'/g, "name: 'Valuation Fundamentals'");
content = content.replace(/name: 'Tutorial 2B: Bond Pricing & TVM'/g, "name: 'Bond Pricing & TVM'");
content = content.replace(/name: 'Tutorial 2C: Equity Models \(NVDA\)'/g, "name: 'Equity Models (NVDA)'");
content = content.replace(/name: 'Tutorial 2D: Optimal Portfolios'/g, "name: 'Optimal Portfolios'");
content = content.replace(/name: 'Tutorial 2E: WACC & Real Options'/g, "name: 'WACC & Real Options'");
content = content.replace(/name: 'Tutorial 2F: Derivatives Logic'/g, "name: 'Derivatives Logic'");
content = content.replace(/name: 'Mock 2G: Full Syllabus Simulation'/g, "name: 'Full Syllabus Simulation'");

// Update mocks 
content = content.replace(/name: 'Full Mock: Final Exam 2024 \(Consolidated\)'/g, "name: 'Comprehensive Financial Analysis'");
content = content.replace(/tag: 'Official Simulator'/g, "tag: 'Full Mock'");

content = content.replace(/name: 'Full Mock: Resit April 2024 \(Consolidated\)'/g, "name: 'Valuation & Portfolio Management'");
content = content.replace(/tag: 'Consolidated Exam'/g, "tag: 'Full Mock'");

content = content.replace(/name: 'Full Mock: Final Jan 2025 \(Consolidated\)'/g, "name: 'Advanced Market Dynamics'");
content = content.replace(/tag: 'Latest 2025 Mock'/g, "tag: 'Full Mock'");

content = content.replace(/name: 'Full Mock: Resit April 2025 \(Consolidated\)'/g, "name: 'Integrated Scenario Analysis'");
content = content.replace(/tag: 'Advanced Simulator'/g, "tag: 'Full Mock'");

// Mocks render logic was: `{mock.name.split(': ')[1]}`
// Let's change that to just `{mock.name}` 
content = content.replace(/{mock\.name\.split\(': '\)\[1\]}/g, '{mock.name}');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Update successful');
