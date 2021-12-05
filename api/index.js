const { ApolloServer } = require('apollo-server')

const characterResolvers = require('./marvel/resolvers/characterResolvers.js')
const comicResolvers = require('./marvel/resolvers/comicResolvers.js')
const storyResolvers = require('./marvel/resolvers/storyResolvers.js')

const marvelSchema = require('./marvel/schema/marvel.graphql')
const MarvelAPI = require('./marvel/datasource/marvel.js')

const typeDefs = marvelSchema
const resolvers = [characterResolvers, comicResolvers, storyResolvers]

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            marvelAPI: new MarvelAPI()
        }
    },
    introspection: true,
    playground: true
})

server.listen().then(({ url }) => {
    console.log(`Servidor rodando na porta ${url}`)
})