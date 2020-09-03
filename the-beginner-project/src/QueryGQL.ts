import { ApolloClient, InMemoryCache } from '@apollo/client';
import { gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://tq-template-server-sample.herokuapp.com/graphql',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      mutation{
  login(data: {
    email: "admin@taqtile.com.br"
    password: "1234qwer"
  }){
    user {
      	id   
        email   
        name
      	phone
      	birthDate
        role
    }  
    	token
	}
}
    `
  })
  .then(result => console.log(result));