const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function convertToIco() {
  try {
    // Read the PNG file
    const inputPath = path.join(__dirname, 'public', 'UW-optimized.png');
    
    // Create a larger favicon - 64x64 pixels
    await sharp(inputPath)
      .resize(64, 64)
      .toFile(path.join(__dirname, 'public', 'favicon-64x64.png'));
    
    // Copy this larger favicon to the app directory as favicon.ico
    fs.copyFileSync(
      path.join(__dirname, 'public', 'favicon-64x64.png'),
      path.join(__dirname, 'src', 'app', 'favicon.ico')
    );
    
    console.log('Larger favicon created and copied successfully');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

convertToIco();