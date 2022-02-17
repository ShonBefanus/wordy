import solutionSimple, {searchWords as searchWords1} from './solutionSimple';
import {words, weight as weight1} from './words';

const getWorker = (() => {
    const worker = Worker  ? new Worker(new URL('./worker.js', import.meta.url)) : null;
    if (window)
        window.addEventListener('beforeunload ', () => {
            if (worker)
                worker.terminate();
        });
    return () => worker;
})();


const callWorker = async (method, entree) =>
    new Promise(resolve => {

        const worker = getWorker();
        if (worker) {
            //console.log('call worker');
            worker.onmessage = ((result) => {
                resolve(result.data);
            });
            worker.postMessage([method, entree, words]);
        } else {
            //console.log('without worker');
            switch (method) {
                case 'searchWords':
                    resolve(searchWords1(entree));
                    break;
                case 'solution':
                    resolve(solutionSimple(entree));
                    break;
                default:
                    resolve(null);
                    break;
            }

        }
    });

export const searchWords = (word) => callWorker('searchWords', word);
export const solution = (entree) => callWorker('solution', entree);
export const weight = weight1;
export const pickWord = () => words[Math.round(Math.random()*1000)];

