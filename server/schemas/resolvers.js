const resolvers = {
    Query: {
        helloWorld: () => {
            return 'Hellow world!';
        }
    }
};

module.exports = resolvers;