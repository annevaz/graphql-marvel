const comicResolvers = {
    Query: {
        comics: (root, { idCharacter }, { dataSources }) => {
            const total = 2397 // refatorar
            const limit = 100
            let totalOfRequests = ~~(total / limit) + 1

            const promises = [];

            for (let offset = 0; offset < totalOfRequests; offset++) {
                promises.push(dataSources.marvelAPI.getComics(offset * limit, idCharacter))
            }

            return Promise.all(
                promises
            )
            .then(result => {
                let comics = []

                for (let i = 0; i < result.length; i++) {
                    comics = comics.concat(result[i])
                }

                return comics
            })
        }
    }
}

module.exports = comicResolvers