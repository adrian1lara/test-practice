const analyzeArray = (arr) => {
    if(arr.length === 0) {
        return null;
    }

    const avgArr = arr.reduce((a, b) => a + b, 0) / arr.length;

    const minArr = Math.min(...arr);

    const maxArr = Math.max(...arr);

    const lengthArr = arr.length;

    return {
        avg: avgArr,
        min: minArr,
        max: maxArr,
        length: lengthArr
    }

}

module.exports = analyzeArray;