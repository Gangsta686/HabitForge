const fs = require('fs');
const path = require('path');

console.log('📁 Проверка структуры проекта...\n');

const files = ['package.json', 'app.json', 'App.js'];
const folders = ['src/screens', 'assets'];

// Проверяем файлы
files.forEach(file => {
  if (fs.existsSync(file)) {
    console.log(`✅ ${file} - найден`);
  } else {
    console.log(`❌ ${file} - ОТСУТСТВУЕТ!`);
  }
});

// Проверяем папки
folders.forEach(folder => {
  const fullPath = path.join(...folder.split('/'));
  if (fs.existsSync(fullPath)) {
    console.log(`✅ Папка ${folder} - найдена`);
  } else {
    console.log(`❌ Папка ${folder} - ОТСУТСТВУЕТ!`);
  }
});

console.log('\n🎯 Если все ✅ - проект готов к запуску!');