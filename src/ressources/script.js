import words from './words.json';
import fs from 'fs';



for (let i = 0; i<5; i++) {
    let data = [];
    words.forEach((word) => {
        data.push(word.slice(i, i+1));
    });

    fs.writeFile(`letter${i}.json`, JSON.stringify(data),()=>{
        console.log(`file "letter${i}.json" is ready`);
    });
}

const data = new Array(words.length);
data.fill(0);
fs.writeFile(`poid.json`, JSON.stringify(data),()=>{
    console.log(`file "poid.json" is ready`);
});


