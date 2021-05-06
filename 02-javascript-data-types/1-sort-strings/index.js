/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
    let arrCopy = arr.slice();
    let mul;
    if (param === 'desc') {
        mul = -1;
    } else if (param === 'asc') {
        mul = 1;
    } else {
        throw new Error('invalid parameter');
    }
    return arrCopy.sort((a, b) => mul * a.localeCompare(b, ['ru', 'en'], { caseFirst: "upper" }));
}