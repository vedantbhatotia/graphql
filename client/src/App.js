import './App.css';
import {ApolloClient,InMemoryCache,ApolloProvider,useQuery,gql,useLazyQuery} from "@apollo/client";
// import {Button} from "react-bootstrap";
import {useState} from "react";
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
const GET_ALL_MOVIES = gql`
  query{
    movies{
      name
      yearOfPublication
      isInTheaters
    }
  }
`
const GET_SPECIFIC_MOVIE = gql`
  query Movie($name: String!){
    getspecificmovie(name: $name){
      name
      yearOfPublication
      isInTheaters
    }
  }
`

function DisplayData(){
  const {data,loading} = useQuery(GET_ALL_USERS);
  const {data:movieData,loading:movieLoading} = useQuery(GET_ALL_MOVIES);
  const [movieSearched,setMovieSearched] = useState("");
  const [fetchSpecificMovie,{data:SearchedData,error}] = useLazyQuery(GET_SPECIFIC_MOVIE);

  if(loading){
    return(
      <div>DATA IS GETTING FETCHED</div>
    )
  }
  return (
    <>
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
    <div>
      <div>
        <h1>List Of Movies</h1>
      </div>
      {movieData && movieData.movies.map((movie)=>{
        return(
          <div>
            <h1>Name: {movie.name}</h1>
            <h1>Year Of Publication: {movie.yearOfPublication}</h1>
            <h1>Is In Theaters: {movie.isInTheaters}</h1>
          </div>
        )
      })}
    </div>
    <div>
      <input type = "text" placeholder = "Enter Name" onChange={(e)=>{
        setMovieSearched(e.target.value);
      }}>
      </input>
      <button onClick={()=>{
        fetchSpecificMovie({
          variables:{
            name:movieSearched
          }
        })
      }}>Fetch Data</button>
      <div>
        {SearchedData &&
          <div>
            <h1>Name: {SearchedData.getspecificmovie.name}</h1>
            <h1>Year Of Publication: {SearchedData.getspecificmovie.yearOfPublication}</h1>
          </div>
        }
      </div>
    </div>
    </>
  )
}
export default App;
