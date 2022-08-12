function isPrime(num) {
    let is_prime = true;
    if(num <= 1) {
        return 'Not prime';
    } else if(num > 1) {
        for(let i = 2; i < num; i ++) {
            if(num % i === 0) {
                is_prime = false;
                break;
            }
        }
        if(is_prime) {
            return 'Prime';
        } else {
            return 'Not Prime';
        }
    }
}
