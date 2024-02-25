

function multiplyAll (arr) {

    let result = 1;
    let index = 0;

    while(index <= arr.length  - 1) {
        result = result * arr[index]
        index++;
        console.log(result)
    } 
    return result;
}

const array = [1, 2, 3, 4] 

console.log(multiplyAll(array))