

const searchWords = (word, words) => {
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
    const temp = [];

    currentList.forEach((word)=>{
        if(word[i] === letter) {
            temp.push(word);

        }
    });
    return temp;
};

const filterLetter = (currentList, letter, i) => {
    const temp = [];
    currentList.forEach((word)=>{
        if(word.indexOf(letter) !== -1 && word[i] !== letter)  temp.push(word);
    });
    return temp;
};


const solution = (entree, words) =>{
    let currentList = [...words];
    entree.forEach((elm)=>{

        elm.hint.forEach((h,i)=>{
            switch (h) {
                case 0: currentList = removeLetter(currentList, elm.word[i], i, elm );break;
                case 1: currentList = filterLetter(currentList, elm.word[i], i);break;
                case 2: currentList = trunkLetter(currentList, elm.word[i], i);break;
                default:break;
            }
        });
    });
    return currentList;
};


onmessage = function(e) {
    //console.log('Message received from main script');
    let workerResult;
    switch (e.data[0]) {
        case 'solution': workerResult = solution(e.data[1], e.data[2]);break;
        case 'searchWords': workerResult = searchWords(e.data[1], e.data[2]);break;
        default: workerResult = [];break;
    }
    // console.log('Posting message back to main script');
    postMessage(workerResult);
};
