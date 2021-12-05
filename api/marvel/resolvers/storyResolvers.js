const storyResolvers = {
    Query: {
        stories: (root, { idCharacter }, { dataSources }) => {
            const total = 3380 // refatorar
            const limit = 100
            let totalOfRequests = ~~(total / limit) + 1

            const promises = [];

            for (let offset = 0; offset < totalOfRequests; offset++) {
                promises.push(dataSources.marvelAPI.getStories(offset * limit, idCharacter))
            }

            return Promise.all(
                promises
            )
            .then(result => {
                let stories = []

                for (let i = 0; i < result.length; i++) {
                    stories = stories.concat(result[i])
                }

                return stories
            })
        }
    }
}

module.exports = storyResolvers