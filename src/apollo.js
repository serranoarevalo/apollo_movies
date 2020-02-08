import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  resolvers: {
    Movie: {
      isLiked: () => false
    },
    Mutation: {
      likeMovie: (_, { id }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: true } });
      },
      unLikeMovie: (_, { id }, { cache }) => {
        cache.writeData({ id: `Movie:${id}`, data: { isLiked: false } });
      }
    }
  }
});

export default client;
