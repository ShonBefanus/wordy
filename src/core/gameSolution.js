export const gameSolution = (word, secret) =>{
    let hint = [0,0,0,0,0];
  for(let i=0; i < word.length; i++){
      const w = word[i], s = secret[i];
      if(w === s) {
          hint[i] = 2;
      } else {
          if(secret.indexOf(w)>i) hint[i] = 1;
      }
  }
  return {word,hint};
};
