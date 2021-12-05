# GraphQL and Marvel API

## Commands

```javascript
// Starting a GraphQL API
npm start
```
## GraphQL
[Apollo Server](https://www.apollographql.com/docs/apollo-server/)

## Marvel API
[Endpoints](https://developer.marvel.com/docs)

[Getting started](https://developer.marvel.com/documentation/getting_started)

[Credencials](https://developer.marvel.com/account)

## Playground
https://studio.apollographql.com/sandbox/explorer

## Examples of queries
```
# Names of characters
query {
  characters {
    name
  }
}
```

```
# Comics from a character
# Captain America ID: 1009220
query {
  comics(idCharacter: 1009220) {
    title
  }
}
```

```
# Stories from a character
# Captain America ID: 1009220
query {
  stories(idCharacter: 1009220) {
    id
    title
  }
}
```