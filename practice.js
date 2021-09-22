//remove all values from list a, which are present in list b keeping their order. 
//use a set
function arrayDiff(a, b) {
    const set = new Set(b)
    return a.filter(element => !set.has(element))
}
console.log(arrayDiff([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [2, 4, 6, 8, 10]))

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
console.log(persistence(45))

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
console.log(order('butt3 cat4 d2og'))

//find out which one of the given numbers in the list (string) differs from the others
function iqTest(numbers) {
    const arr = numbers.split(' ')
    const odd = arr.filter(num => num % 2 !== 0)
    const even = arr.filter(num => num % 2 === 0)

    return odd.length > even.length ? arr.indexOf(even[0]) + 1 : arr.indexOf(odd[0]) + 1
}

//return index where each sum of items on either side of index is the same
function findEvenIndex(arr) {
    const reducer = (acc, current) => acc + current
    let left = [0]
    let right = [0]
    let sumLeft = 0
    let sumRight = 0
    for (let i = 0; i < arr.length; i++) {
        if (i > 0) {
            left = arr.slice(0, i)
        }
        right = arr.slice(i + 1)
        sumLeft = left.reduce(reducer)
        sumRight = right.reduce(reducer)
        if (sumLeft === sumRight) {
            return i
        }
    }
    return -1
}
console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))


//converts dash/underscore delimited words into camel casing,first word capitalized only if the original word was capitalized
function toCamelCase(str) {
    const arr = str.split(/[\W\_]/g)
    const words = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].charCodeAt(0) > 90) {
            const firstLetter = arr[i].slice(0, 1).toUpperCase()
            words.push(firstLetter + arr[i].slice(1))
        } else {
            words.push(arr[i])
        }

    }
    return words.join('')
}

console.log(toCamelCase("the_stealth-warrior"))

//pangram contains all letters of alphabet. return true if its a pangram
function isPangram(string) {
    const arr = string.toLowerCase().split(/[\W\_\d]/g).join('').split('')
    const set = new Set(arr)
    return set.size === 26
}
console.log(isPangram("The quick brown fox jumps over the lazy dog."))

//return true if the sum of its own digits equals sum of each raised to the power of the number of digits (ex 153) 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
function narcissistic(value) {
    let sum = 0
    const digits = value.toString().split('')
    const power = digits.length
    digits.map(digit => sum += Math.pow(parseInt(digit), power))
    return sum === value
}
console.log(narcissistic(153))

//iterate over objs, return the name values in a list with the last 2 names seperated by '&'
function list(names) {
    const people = names.map(item => item.name)
    if (people.length == 1) {
        return people[0]
    }
    if (people.length == 2) {
        return `${people[0]} & ${people[1]}`
    }
    if (people.length > 2) {
        const beginning = people.slice(0, people.length - 2)
        const ending = people.slice(people.length - 2)
        return `${beginning.join(', ')}, ${ending.join(' & ').trim()}`
    }
    return ''
}
console.log(list([{ name: 'Derek' }, { name: 'Nicky' }, { name: 'Blanco' }, { name: 'BB' }]))


//find the unique number, take time complexity into account
function findUniq(arr) {
    const sorted = arr.sort((a, b) => b - a)
    console.log(sorted)
    if (sorted[0] !== sorted[1] && sorted[0] !== sorted[2]) {
        return sorted[0]
    }
    return sorted[sorted.length - 1]
}
console.log(findUniq([3, 3, 7, 3, 3, 3, 3]))


//split string into pairs. if odd number of characters replace the missing second character of the final pair with an underscore ('_').
function solution(str) {
    if (!str) { return [] }
    let string
    str.length % 2 === 0 ? string = str : string = str + '_'
    return string.match(/[a-z\D]{2}/g)
}
console.log(solution('aajnvkenruhgk'))





