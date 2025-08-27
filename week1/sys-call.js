// ===== Step 1: File System Operations =====
const fs = require('fs');

fs.readFile('sample.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
  } else {
    console.log('File contents:', data);

 
    fs.writeFile('output.txt', 'This is some sample data.', (err2) => {
      if (err2) {
        console.error('Error writing file:', err2);
      } else {
        console.log('Data written to output.txt');
      }

      
      printOsInfo();
    });
  }
});

// ===== Step 2: Operating System Information =====
const os = require('os');

function printOsInfo() {
  console.log('\n=== OS Information ===');
  // a) Hostname
  console.log('Hostname:', os.hostname());
  // b) Platform
  console.log('Platform:', os.platform());
  // c)  CPU
  console.log('CPU cores:', os.cpus().length);

  // (tham khảo thêm, không bắt buộc)
  console.log('Architecture:', os.arch());
}


