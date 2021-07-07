import config from './config.js';

/**
 * Returns min value in an array ignoring undefined, null, and NaN inputs
 * @param {Object[]} array
 * @returns minimum value
 */
export const min = (array) => (
  Math.min(array.filter((e) => (e === undefined || e === null || Number.isNaN(e) ? 0 : e)))
);

export const amountLimit = (limit) => min([limit, config.AMOUNT_LIMIT]);
