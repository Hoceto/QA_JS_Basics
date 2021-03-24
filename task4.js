function find_pairs(arr, target){

    var pairs = 0;
    for (var i = 0; i < arr.length-1; i++){
        var elem = arr[i];
        for (var j = i+1; j < arr.length; j++){
            if (elem + arr[j] === target) pairs++;
        }
    }
    return pairs;
}

test_array = [1, 3, 6, 2, 2, 0, 4, 5];
target = 5;
console.log(find_pairs(test_array, target))