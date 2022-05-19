// Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela palavra-chave. O output da sua função deve ser o caminho até chegar no item procurado. Por exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -> morango -> Goibana”.

let arvore = {
    left: {
      left: undefined,
      right: {
        value: "Maçã"
      },
      value: "Morango"
    },
    right: undefined,
    value: "Goiaba"
}

function inOrder(tree) {
    tree.left && inOrder(tree.left)
  
    console.log(tree.value)
  
    tree.right && inOrder(tree.right)
}
  
inOrder(arvore)