function splitAndMerge(string, separator) {
    let words = string.split(" ");
    let chars = [];
    for (let i = 0; i < words.length; i++) {
        chars.push(words[i].split("").join(separator)) }
    return chars.join(" ")
}