import words from './wordsSorted.json';

export const searchWords = async (word) => {
    const result = [];
    words.forEach(w=>{
        if (w.indexOf(word)===0) result.push(w);
    });
    return result;
};






