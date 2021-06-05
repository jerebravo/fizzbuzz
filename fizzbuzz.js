function fizzbuzz(num){

    const minimum_number_positive = 1;

    const divisible = (divisor, dividendo) => dividendo % divisor === 0;

    if(typeof num != 'number'){
        return 'Error: this is not a number'
    }

    if(num < minimum_number_positive){
        return 'Error: the number if less to 1'
    }

    if(divisible(3, num) && divisible(5, num)){
        return 'fizzbuzz'
    }

    if(divisible(3, num)){
        return 'fizz'
    }

    if(divisible(5, num)){
        return 'buzz'
    }

    return num
}

module.exports = fizzbuzz