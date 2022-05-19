// Dado o Array de inteiros abaixo, ordene-o de tal forma que os números “1” estejam à esquerda. Os itens devem ser modificados no lugar, ou seja, você não ira trocar posições e sim colocar os números “1” no inicio do Array.
// [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

let arr = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
        arr.splice(i, 1);
        arr.unshift(1);
    }
}

console.log(arr);
