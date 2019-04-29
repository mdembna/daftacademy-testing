const functions = { 
    fib: (num) => {
        try {
            if(isNaN(num) || typeof num !== 'number') {
                throw "not a number!";
            }
            else if (num < 0 || (num !== 0 && num / Math.floor(num) !== 1)) {
                throw "not a positive integer";
            }
            let result = [];
            for (let i = 0; i < num; i++) {
                if (i === 0 || i === 1) {
                    result.push(i);
                }
                else {
                    result.push(result[i-1] + result[i-2]);
                }
            }
            return result;
        }
        catch(err) {
            console.log(err);
        }
    }
}
module.exports = functions;

