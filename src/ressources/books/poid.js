import words from '../words.json';
import fs from 'fs';
import poids from '../poid.json';
import sortArray from 'sort-array';


export const fetch = ()=> {
    const files = [
        './Thieves World 3 - Shadows of Sa - Asprin, Robert.txt',
        './07 - The Fire From Within - Carlos Castaneda.txt',
        './08 - The Power of Silence - Carlos Castaneda.txt',
        './09 - The Art of Dreaming - Carlos Castaneda.txt',
        './City of Fallen Angels - Cassandra Clare.txt',
        './Fablehaven 05 - Keys to the Dem - Brandon Mull.txt',
        './Thieves World 6 - Wings of Omen - Asprin, Robert.txt'
    ];
    const promises = [];
    const poid = new Array(words.length);
    poid.fill(0);

    files.forEach((file) => {
        promises.push(new Promise((resolve) => {
            fs.readFile(file, 'utf8', (err, data) => {
                const data1 = data.replace(/(\.|,|!|\?|-|:|'|\)|\(")/g, ' ');
                const data2 = data1.replace(/(\t|\s+)/g, ' ');
                const result = [];
                data2.split(' ').forEach((word) => {
                    if (word.length === 5) result.push(word);
                });

                console.log(result);
                const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
                words.forEach((word, index) => {
                    poid[index] += indexOfAll(result, word).length;
                });
                resolve();
            });
        }));
    });
    Promise.all(promises).then(() => {
        console.log(poid);
        fs.writeFile(`../poid.json`, JSON.stringify(poid),()=>{
            console.log(`file "poid.json" is ready`);
        });
    });
};

export const triage = ()=>{
    const newWords=Array(words.length);
    poids.forEach((p,i)=>{
        newWords[i]={word:words[i],poid:p};
    });
    sortArray(newWords, {
        by: 'poid',
        order: 'desc'
    });
    console.log(newWords);
    const onlyWords = newWords.map((p)=>p.word);
    fs.writeFile(`../wordsSorted.json`, JSON.stringify(onlyWords),()=>{
        console.log(`file "wordsSorted.json" is ready`);
    });
};

triage();
