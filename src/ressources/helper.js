import words from './wordsSorted.json';

export const searchWords = async (word) => {
    return words.map((w)=> w.indexOf(word)===0);
};





