import words from '../words.json';
import fs from 'fs';
import poids from '../poid.json';
import sortArray from 'sort-array';


export const fetch = ()=> {
    const filesCount = 140;
    const promises = [];
    const poid = new Array(words.length);
    poid.fill(0);

    for (let i = 1; i<=filesCount; i++){
        promises.push(new Promise((resolve) => {
            fs.readFile(`./library/${i}.txt`, 'utf8', (err, data) => {
                const data1 = data.replace(/(\.|,|!|\?|-|:|'|\)|\(")/g, ' ');
                const data2 = data1.replace(/(\t|\s+)/g, ' ');
                const result = [];
                data2.split(' ').forEach((word) => {
                    if (word.length === 5) result.push(word.toLowerCase());
                });

                console.log(result);
                const indexOfAll = (arr, val) => arr.reduce((acc, el, i) => (el === val ? [...acc, i] : acc), []);
                words.forEach((word, index) => {
                    poid[index] += indexOfAll(result, word).length;
                });
                resolve();
            });
        }));
    }

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

export const createWordWeightArray = () =>{
    const newWords=Array(words.length);
    poids.forEach((p,i)=>{
        newWords[i]={word:words[i],poid:p};
    });
    sortArray(newWords, {
        by: 'poid',
        order: 'desc'
    });
    let result = [];
    let count1=0, count2= 0;

    newWords.forEach((e)=> {
        const {word, poid} = e;

        result[word] = poid;
        poid>0 ? count1++ : count2 ++;
    } );
    console.log(result);
    fs.writeFile(`../wordsByWeight.json`, JSON.stringify(newWords),()=>{
        console.log(`file "wordsByWeight.json" is ready`);
    });
    console.log(count1, count2);
};

//triage();
//createWordWeightArray();
//fetch();

