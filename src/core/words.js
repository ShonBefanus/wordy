import poid from './wordsByWeightObj';
export const weight = poid;
export const words = (() => Object.keys(weight))();
