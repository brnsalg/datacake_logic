// Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo 0 a n, onde n é o maior número dentro do array. Adicione os números faltando dentro do array. 

let arr = [9, 2, 3, 1, 4];

function missing(array, n) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === n) {
                return true;
            }
        }
    }
    return false;
}

console.log(missing(arr, 5));