const palindromes = function (word) {
    const wordArr = word.split('');
    const newWordArr = wordArr.filter(letter => { 
        if(
            letter !== " " &&
            letter !== "!" &&
            letter !== "," &&
            letter !== "."
        )
            return true;
    })
    const newWord = newWordArr.join('');
    const newWordReverse = newWordArr.reverse().join('');
    return newWord.toLowerCase() == newWordReverse.toLowerCase();
};

// Do not edit below this line
module.exports = palindromes;
