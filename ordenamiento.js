let numeros = [10, 40, 30, 20, 15, 5];

function ordenamientoBurbuja(lista) {
    let tmp;
  for (let i = 0; i < lista.length - 1; i++) {
    for (let j = 0; j < lista.length - 1; j++) {
        if (lista[j] > lista[j + 1]) {
            tmp = lista[j];
            lista[j] = lista[j + 1];
            lista[j + 1] = tmp;
        }
    }
  }
}

ordenamientoBurbuja(numeros);

console.log(numeros);
