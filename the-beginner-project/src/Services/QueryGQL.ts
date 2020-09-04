import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

export const mutation = () => {
  client
.mutate({
  mutation: gql`
    mutation{
login(data: {
  email: "admin@taqtile.com.br"
  password: "1234qwer"
}){
  token
}
}
`
}).then((result:any) => {
localStorage.setItem("beginner-token", result.data.login.token)
}).catch(err => {
throw err;
})
}


