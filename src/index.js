function fibs(n){
    arr = []
    for(let i = 0; i < n; i++){
        if(i <= 1){
            arr.push(i);
        }
        else{
            arr.push(arr[i-1] + arr[i-2]);
        }
    }
    return arr;
}


function fibsRec(n){
    arr = []
    if(n == 1){
        return [0];
    }

    if(n == 2){
        return [0, 1];
    }

    arr = fibsRec(n - 1);

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}


console.log(fibs(8))

console.log("recursive functions:")
console.log(fibsRec(8))

function mergeSort(arr){
    if(arr.length == 1){
        return arr;
    }
    newArr = [];
    let max = arr[0];
    length = arr.length;
    arr.forEach((item) => {
        if(item > max){
            max = item;
        }
    })

    arr.splice(arr.indexOf(max), 1);

    newArr = mergeSort(arr);

    newArr.push(max);

    return newArr;
}

console.log(mergeSort([105, 79, 100, 110]));