import fs from 'fs';


const generateWords = (n) => {
    console.log('Generating ', n, 'words...');
    const f = [];
    const poid =[]
    for (let i = 97; i < 97 + 26; i++) {
        for (let u = 97; u < 97 + 26; u++) {
            for (let t = 97; t < 97 + 26; t++) {
                for (let p = 97; p < 97 + 26; p++) {
                    for (let k = 97; k < 97 + 1; k++) {
                        const word = String.fromCharCode(i).concat(String.fromCharCode(u)).concat(String.fromCharCode(t)).concat(String.fromCharCode(p)).concat(String.fromCharCode(k));
                        f.push(
                            word
                        );
                        poid.push({
                            word,
                            poid: Math.round(Math.random()*1500)
                        });
                    }

                }

            }

        }

    }
    console.log('Length is ', f.length, poid.length);
    fs.writeFile(`./wordsSortedBIG.json`, JSON.stringify(f),()=>{
        console.log(`file "wordsSortedBIG.json" is ready`);
    });
    fs.writeFile(`./wordsByWeightBIG.json`, JSON.stringify(poid),()=>{
        console.log(`file "wordsByWeightBIG.json" is ready`);
    });

};

generateWords(11881376);
