//remove all values from list a, which are present in list b keeping their order.
function arrayDiff(a, b) {
    return a.filter(element => !b.includes(element))
}

//number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
    let count = 0
    num = num.toString()

    while (num.length > 1) {
        count++
        num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    }

    return count
}

//return true if the walk will take you exactly ten minutes and return to your starting point. each block takes 1 min to walk.
function isValidWalk(walk) {
    const north = walk.filter(letter => letter === "n").length
    const south = walk.filter(letter => letter === "s").length
    const east = walk.filter(letter => letter === "e").length
    const west = walk.filter(letter => letter === "w").length

    return walk.length === 10 && north === south && east === west
}

//replace every letter with its position in the alphabet. If anything in the text isn't a letter, ignore it and don't return it.
function alphabetPosition(text) {
    const letters = text.toLowerCase().split('')
    const positions = []

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > 96 && letters[i].charCodeAt(0) < 123) {
            positions.push(letters[i].charCodeAt(0) - 96)
        }
    }
    return positions.join(' ')
}

//each word in the string will contain a single number. This number is the position the word should have in the result.
function order(words) {
    const arr = words.split(' ')
    const sorted = arr.sort((a, b) => a.match(/\d/) - b.match(/\d/))
    return sorted.join(' ')
}

//find out which one of the given numbers in the list (string) differs from the others
function iqTest(numbers) {
    const arr = numbers.split(' ')
    const odd = arr.filter(num => num % 2 !== 0)
    const even = arr.filter(num => num % 2 === 0)

    return odd.length > even.length ? arr.indexOf(even[0]) + 1 : arr.indexOf(odd[0]) + 1
}
