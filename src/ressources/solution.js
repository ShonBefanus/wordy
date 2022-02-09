import words from './wordsSorted.json';

let solution = [...words];


const removeLetter = ((letter, i, elm)=>{

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

        solution.forEach((word, index)=>{

        switch (count) {
            case 0:if(word.indexOf(letter) === -1) temp.push(word);break;
            case 1:if ((word.match(new RegExp(letter,'g')) || []).length ===1) temp.push(word);break;
            case 2:if ((word.match(new RegExp(letter,'g')) || []).length ===2) temp.push(word);break;
            case 3:if ((word.match(new RegExp(letter,'g')) || []).length ===4) temp.push(word);break;
            case 4:if ((word.match(new RegExp(letter,'g')) || []).length ===5) temp.push(word);break;
        }

    });
    solution = temp;

});
const trunckLetter = (letter, i ) =>{
    const temp = [];

    solution.forEach((word, index)=>{
        if(word[i] === letter) {
           temp.push(word);

        }
    });
    solution = temp;
};

const filterLetter = (letter, i) => {
    const temp = [];
    solution.forEach((word, index)=>{
        if(word.indexOf(letter) !== -1 && word[i] !== letter)  temp.push(word);
    });
    solution = temp;
};

const recomendation = () => {

};

const entree = [];
entree[0] = {
    word:'oosso',
    hint:[1,2,1,2,0]
};
entree[1] = {
    word:'suite',
    hint:[1,0,0,0,2]
};
entree.forEach((elm)=>{
   elm.hint.forEach((h,i)=>{
      switch (h) {
          case 0: removeLetter(elm.word[i], i, elm );break;
          case 1: filterLetter(elm.word[i], i);break;
          case 2: trunckLetter(elm.word[i], i);break;
      }
   });
});
console.log('---------------------');
console.log(solution);
recomendation();
