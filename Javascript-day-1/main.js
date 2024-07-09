
let longestWords = (str) => {
    if(str.trim().length === 0){
        return false
    }

    // console.log(str);
    words = str.split(' ')
    words = words.sort((a ,b) => b.length - a.length)
    console.log(words);
    console.log(words[0]);
}

longestWords('watch thapa technical javascript course on youtube')