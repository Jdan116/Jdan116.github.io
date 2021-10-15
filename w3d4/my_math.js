const MyMaths = {
    pi: 3.14,
     
    add: (x, y) => {
        return x + y;
    },
    subtract: (x, y) => {
        return x - y;
    },

    multiply: (x, y) => {
        return x * y;
    },

    divide: (x, y) => {
        if(y !== 0) {
            return x/y;
        }
    }
};

module.exports = MyMaths;