var calculManager = {
    addition: function (number) {
        let total = 0;
        for (let index = 1; index <= number; index++) {
            total += index;
        }
        return total
    },

    factorielle: function (number) {
        if (number > 1) {
            return number * calculManager.factorielle(number - 1);
        } else {
            return 1;
        }
    }
}

module.exports = calculManager;