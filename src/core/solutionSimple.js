import {words, weight as weight1} from './words';

export const searchWords = (word) => {
    const result = [];
    words.forEach(w=>{
        if (w.indexOf(word)===0) result.push(w);
    });
    return result;
};

const removeLetter = (currentList, letter, i, elm)=>{

    let count = (elm.word.match(new RegExp(letter,'g')) || []).length;
    if (count > 1){
        count = 0;
        elm.hint.forEach((hint,index)=>{
           if (hint>0 && elm.word[index]===letter) count++;
        });
    }else {
        count = 0;
    }
    const temp = [];

        currentList.forEach((word)=>{

        switch (count) {
            case 0:if(word.indexOf(letter) === -1) temp.push(word);break;
            case 1:if ((word.match(new RegExp(letter,'g')) || []).length ===1) temp.push(word);break;
            case 2:if ((word.match(new RegExp(letter,'g')) || []).length ===2) temp.push(word);break;
            case 3:if ((word.match(new RegExp(letter,'g')) || []).length ===4) temp.push(word);break;
            case 4:if ((word.match(new RegExp(letter,'g')) || []).length ===5) temp.push(word);break;
            default:break;
        }

    });
    return temp;
};

const trunkLetter = (currentList, letter, i ) =>{
    return currentList.filter(e=>e[i] === letter);
};

const filterLetter = (currentList, letter, i, counter) =>
     currentList.filter(word=>
        word.indexOf(letter) !== -1
        && word[i] !== letter
        && (word.match(new RegExp(letter,'g')) || []).length >= counter
    );


const solution = (entree) =>{
    let currentList = [...words];
    entree.forEach((elm)=>{
        let groups = {};
        elm.hint.forEach((h,i)=>{
            const letter = elm.word[i];
            if (h === 1) {
                if (groups[letter])
                    groups[letter] += 1;
                else
                    groups[letter] = 1;
            }
            switch (h) {
                case 0: currentList = removeLetter(currentList,letter , i, elm );break;
                case 1: currentList = filterLetter(currentList, letter, i, groups[letter]);break;
                case 2: currentList = trunkLetter(currentList, letter, i);break;
                default:break;
            }
        });
    });
    return currentList;
};
const entree = [];
entree[0] = {
    word:'again',
    hint:[1,0,0,0,0]
};
entree[1] = {
    word:'suite',
    hint:[1,0,0,0,2]
};


export  default solution;

export const weight = weight1;


