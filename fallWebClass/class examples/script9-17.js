
try {
    const myHeading = document.getElementById('my-heading');
    myHeading.style.backgroundColor = 'red';
} catch (error){
    console.error(error);
}

console.log('after the error');

//time in milliseconds
setTimeout(() => { console.log('wait for it bitch') }, 5000);

//promise = asynchronous function

async function sumNumbersAsync(number) {
    let sum = 0;
    for (let i = 0; i < number; i++){
        sum += i;
    }
    return sum;
}

console.log(sumNumbersAsync(100000));


sumNumbersAsync(1000000).then((result) => {
    console.log(result);
});

async function sumMultipleNumbers() {
    const sumThousand = await sumNumbersAsync(1000);
    console.log(sumThousand);
    console.log(await sumNumbersAsync(1000));
}

sumMultipleNumbers();