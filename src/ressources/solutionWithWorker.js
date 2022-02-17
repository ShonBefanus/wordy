import solutionSimple, {weight as weight1, searchWords as searchWords1} from './solution';
import words from './wordsSorted';

const getWorker = (() => {
    const worker = window && window.Worker ? new window.Worker('worker.js') : null;
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
            worker.onmessage = ((result) => {
                resolve(result.data);
            });
            worker.postMessage([method,entree, words]);
        } else {
            switch (method) {
                case 'searchWords': resolve(searchWords1(entree)); break;
                case 'solution': resolve(solutionSimple(entree));break;
                default: resolve(null);break;
            }

        }
    });

export const searchWords = (word) => callWorker('searchWords', word);
export const solution = (entree) => callWorker('solution', entree);
export const weight = weight1;

