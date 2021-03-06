/**
 * pick - Creates an object composed of the picked object properties:
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to pick
 * @returns {object} - returns the new object
 */
export const pick = (obj, ...fields) => {
    const result = {};
    for (const arr of Object.entries(obj)) {
        if (fields.includes(arr[0])) {
            result[arr[0]] = arr[1];
        }
    }
    return result;
};
