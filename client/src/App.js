import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql} from "@apollo/client";
function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri:"http://localhost:4000/graphql"
  })

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>List Of Users</h1>
        <DisplayData></DisplayData>
      </div>
    </ApolloProvider>

  );
}
const GET_ALL_USERS = gql`
  query{
    users{
      id
      name
      email
      age
      Nationality
      }
  }
`
function DisplayData(){
  const {data,loading} = useQuery(GET_ALL_USERS);
  if(loading){
    return(
      <div>DATA IS GETTING FETCHED</div>
    )
  }
  return (
    <div>
      {data && data.users.map((user)=>{
        return(
          <div>
            <h1>ID:{user.id}</h1>
            <h1>Name: {user.name}</h1>
            <h1>Email: {user.email}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Nationality: {user.Nationality}</h1>          
          </div>
        )
      })}
    </div>
  )
}
export default App;
