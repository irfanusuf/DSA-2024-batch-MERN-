// function fibonacci(n) {
//     let fibSeq = [0, 1];    // array
//     //indexing 0  1   
//     for (let i = 2; i < n; i++) {
//     //     fibSeq[2] = fibSeq[1] + fibSeq[0]
//     //     fibSeq[3] = fibSeq[2] + fibSeq[1]
//     //     fibSeq[4] = fibSeq[3] + fibSeq[2]
//     //   // .......so on 
//         fibSeq[i] = fibSeq[i - 1] + fibSeq[i - 2];
//     }

//     return fibSeq;
// }


// console.log(fibonacci(10))







function fibonacci(n, fibSeq = [0, 1]) {
    if (n <= 2) return fibSeq.slice(0, n);
    const nextFib = fibSeq[fibSeq.length - 1] + fibSeq[fibSeq.length - 2];

    
    return fibonacci(n - 1, [...fibSeq, nextFib]);
}


console.log(fibonacci(10))



