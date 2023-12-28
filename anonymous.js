let arrayNum = [8,6,71,88,9,72,5,56,2,7]
let resultArray = (function (arrayNumber) {

    return (arrayNum.filter((item) => {

        return item % 2 !== 0

    }))
})(arrayNum);

console.log("Odd Numbers: " + resultArray)


//2.Convert all the strings to title caps in a string array
let sArr = ["hello world"]

let SArray= (function (stringarray) {

    return (stringarray.map((item) => {

        return item.toUpperCase()

    }))
})(sArr);

console.log("Upper Case " + SArray)

//3.Sum of all numbers in an array

let resultSumArray = (function (arrayNumber) {

    return (arrayNumber.reduce((currentTotal, item) => {

        return currentTotal + item

    }, 0)) 
})(arrayNum);

console.log("Sum of numbers in an array: " + resultSumArray)

//4.Return all the prime numbers in an array

let resultPrimeArray = (function (arrayNumber) {

    return (arrayNumber.filter((item) => {

        for (i = 2; i < item; i++) {
            if (item % i === 0)
                return false
        }

        return true

    }))
})(arrayNum);

console.log("Prime numbers : " + resultPrimeArray)

//5.Return all the palindromes in an array

let resultPallindromeArray = (function (arrayNumber) {

    return (arrayNum.filter((item) => {

        let temp = item + ""

        if ((temp.split('').reverse().join('')) === item + "")
            return true

        return false

    }))
})(arrayNum);

console.log("Pallindrome numbers in an array: " + resultPallindromeArray)

//6.Return median of two sorted arrays of same size
let arr1 = [1, 2, 3, 4, 5, 8, 10]
let arr2 = [8, 9, 10, 12, 16]

let resultMedian = function (arr1, arr2) {

    let result = []

    let lenArr1 = arr1.length

    let lenArr2 = arr2.length

    if (lenArr1 % 2 === 0) {

        console.log("Median of array 1: " + arr1[lenArr1 / 2])

    } else {

        console.log("Median of array 1: " + arr1[(lenArr1 + 1) / 2])
    }

    if (lenArr2 % 2 === 0) {

        console.log("Median of array 2: " + arr2[lenArr2 / 2])

    } else {

        console.log("Median of array 2: " + arr2[(lenArr2 + 1) / 2])
    }

    return
}(arr1, arr2)

//7.Remove duplicates from an array
let dupArray = [2,3,3,4,1,0,5,7,8,9,9,6]

let duplicateArray = ((dupArray, index) => {

    return [...new Set(dupArray)]

})(dupArray)

console.log("Array without Duplicates " + duplicateArray)

//8.Rotate an array by k times and return the rotated array

let arrforrotation = [0, 1, 5, 6, 7, 9,2,7]
let resultArrayShifted = ((array, k) => {

    for (let i = 0; i < k; i++) {
        let temp = array.shift()
        array.push(temp)
    }
    return array

})(arrforrotation, 3)

console.log("Array roatated k times: " + resultArrayShifted)