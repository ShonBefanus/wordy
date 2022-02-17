import fs from 'fs'
import words from '../core/wordsByWeightHUGE';


const f = words.reduce(
    (obj, item) => Object.assign(obj, { [item.word]: item.poid }), {});

console.log('Ready');


fs.writeFile(`../core/wordsByWeightObjHuge.json`, JSON.stringify(f),()=>{
    console.log(`file "wordsByWeightObj.json" is ready`);
});
