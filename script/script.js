
let numbers = '2 54 1 -2 13'

function MinAndMax(string) {

    //divide el string en string sein los espacios, los transforma en números y los guarda en un array
    //llamado numbersArray
    let numbersArray = string.split(' ').map(Number);

    //inicializa min y max como el primer elemento del array
    let min = numbersArray[0]
    let max = numbersArray[0]

    //Compara cada elemento del array con el min y el max
    for (let i = 0; i < numbersArray.length; i++) {

        if (min > (numbersArray[i])) {

            min = (numbersArray[i])
        }
        if (max < (numbersArray[i])) {

            max = (numbersArray[i])
        }
    }
    return [min, max]
}

console.log(MinAndMax(numbers))
console.log(MinAndMax('2 5 7 14 -6 0'))



