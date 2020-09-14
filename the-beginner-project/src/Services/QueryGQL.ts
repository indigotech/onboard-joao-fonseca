import { ApolloClient, InMemoryCache, gql, FetchResult, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import {LoginType, PaginatedUsersType, UserInputType, LoginInputType, UserType} from "./Interfaces"

const httpLink = createHttpLink({
  uri:"https://tq-template-server-sample.herokuapp.com/graphql"
});

const beginnerToken = "beginner-token"

const authLink = setContext((_, {headers}) => {
  const token = localStorage.getItem(beginnerToken);
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export const loginMutation = (loginData: LoginInputType): Promise<void> => {
  return client
    .mutate({
      mutation: gql`
        mutation Login($loginData: LoginInputType!){
          login(data: $loginData) {            
            token
          }
        }
      `,
      variables: {loginData}
    })
    .then((result: FetchResult<{ login: LoginType }>) => {
      localStorage.setItem(beginnerToken, result.data.login.token);
    })
    .catch((error) => {
      throw error;
    });
};

export const listUsersQuery = async (offSet: number, limit: number):Promise<PaginatedUsersType[]> => {
  return client 
    .query({
      query: gql `
        query getUsers {
          users(pageInfo: {offset: ${offSet}, limit: ${limit}}) {
            nodes {
              name
              email
              id
            }
          }
        }
      `,
    })
    .then((result) => {
      return result.data.users.nodes
    })
    .catch((error)=>{
      alert(error);
    })
};

export const addUserMutation = (newUserData: UserInputType): Promise<void> => {
  return client
    .mutate({
      mutation: gql`
        mutation newUser($newUserData: UserInputType!) {
          createUser(data: $newUserData) {
            id
          }
        }
      `,
      variables: {newUserData}
    })
    .then(
      () => {
      alert("Usuário cadastrado com sucesso") 
    })
    .catch((err) => {
      throw err;
    });
};

export const getUserQuery = async (userId: number):Promise<UserType> => {
  return client 
    .query({
      query: gql `
        query getUser {
          user(id: ${userId}) {
              id
              name
              phone
              birthDate
              email
              role
          }
        }
      `,
      variables: {userId}
    })
    .then((result) => {
      return result.data.user
    })
    .catch((error)=>{
      console.log(error);
    })
};