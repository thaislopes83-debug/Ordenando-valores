const swap = (vetor, pos1, pos2) => {
    [vetor[pos1], vetor[pos2]] = [vetor[pos2], vetor[pos1]];
};

const shuffle = (vetor, trocas) => {
    for (let i = 0; i < trocas; i++) {
        const p1 = Math.floor(Math.random() * vetor.length);
        const p2 = Math.floor(Math.random() * vetor.length);
        swap(vetor, p1, p2);
    }
};

const bubble_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (vetor[j] > vetor[j + 1]) swap(vetor, j, j + 1);
        }
    }
};

const selection_sort = (vetor) => {
    let n = vetor.length;
    for (let i = 0; i < n - 1; i++) {
        let min = i;
        for (let j = i + 1; j < n; j++) {
            if (vetor[j] < vetor[min]) min = j;
        }
        swap(vetor, i, min);
    }
};

const quick_sort = (vetor, inicio, fim) => {
    if (inicio >= fim) return;
    let pivo = vetor[fim];
    let i = inicio;
    for (let j = inicio; j < fim; j++) {
        if (vetor[j] < pivo) {
            swap(vetor, i, j);
            i++;
        }
    }
    swap(vetor, i, fim);
    quick_sort(vetor, inicio, i - 1);
    quick_sort(vetor, i + 1, fim);
};
