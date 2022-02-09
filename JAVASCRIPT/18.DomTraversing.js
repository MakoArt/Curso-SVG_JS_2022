const lista=document.querySelector('#lista')

//Dom traversing(padres a hijos)

console.log(lista.children)

//Dom traversing(hijos a padres)
//usamos el parent element 

console.log(lista.parentElement.parentElement) 

//Dom traversing(entre hermanos)

console.log(lista.previousSibling.previousSibling)
console.log(lista.nextSibling.nextSibling) 

