// Our first loop
for (let i = 0; i < 5; i++){
    console.log('Our fist loop');
}

//looping an array
const arr = ['Nico', 'Nadine', 'Naeyon', 'Sana'];

for (let i = 0; i < arr.length; i++){
    let val = arr[i];
    let res;
    switch (i) {
        case 0:
            res = 'First';
            break;
        case 1:
            res = 'Second';
            break;
        case 2:
            res = 'Third';
            break;
        case 3:
            res = 'Fourth'
            break;
        default:
            res = 'null';
            break;
    }
    console.log(`The ${res} value is: ${val}`);
}