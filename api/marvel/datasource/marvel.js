const { RESTDataSource } = require('apollo-datasource-rest')

class MarvelAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://gateway.marvel.com/v1/public'
    }

    getTs() {
        return 1
    }

    getApikey() {
        return ""
    }

    getHash() {
        return ""
    }

    async getCharacters(offset) {
        const limit = 100

        const characters = await this.get(`/characters?ts=${this.getTs()}&apikey=${this.getApikey()}`
            + `&hash=${this.getHash()}&limit=${limit}&offset=${offset}`)

        return characters.data.results.map(async character => ({
            name: character.name
        }))
    }

    async getComics(offset, idCharacter) {
        const limit = 100

        const comics = await this.get(`/characters/${idCharacter}/comics?ts=${this.getTs()}&apikey=${this.getApikey()}`
            + `&hash=${this.getHash()}&limit=${limit}&offset=${offset}`)

        return comics.data.results.map(async comic => ({
            title: comic.title
        }))
    }

    async getStories(offset, idCharacter) {
        const limit = 100

        const stories = await this.get(`/characters/${idCharacter}/stories?ts=${this.getTs()}`
            + `&apikey=${this.getApikey()}&hash=${this.getHash()}&limit=${limit}&offset=${offset}`)

        return stories.data.results.map(async story => ({
            id: story.id,
            title: story.title
        }))
    }
}

module.exports = MarvelAPI