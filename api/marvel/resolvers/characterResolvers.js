const { GraphQLScalarType } = require('graphql')

const characterResolvers = {
    Query: {
        characters: (root, args, { dataSources }) => {
            const total = 1559 // refatorar
            const limit = 100
            let totalOfRequests = ~~(total / limit) + 1

            const promises = [];

            for (let offset = 0; offset < totalOfRequests; offset++) {
                promises.push(dataSources.marvelAPI.getCharacters(offset * limit))
            }

            return Promise.all(
                promises
            )
            .then(result => {
                let characters = []

                for (let i = 0; i < result.length; i++) {
                    characters = characters.concat(result[i])
                }

                return characters
            })
        }
    }
}

module.exports = characterResolvers