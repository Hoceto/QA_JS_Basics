function filter_list(arr){
    return arr.filter(elem => Number.isInteger(elem) && elem>0)
}

var test_arrs = [
    [1, 2, "a", "b"],
    [1, "a", "b", 0, 15], 
    [1, 2, "aasf", "1", "123", 123]
];

test_arrs.forEach(elem => console.log(filter_list(elem)));