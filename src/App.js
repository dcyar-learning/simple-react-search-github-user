import { useState } from 'react'
import GithubProfile from "./components/GithubProfile";
import SearchForm from "./components/SearchForm";

function App() {
  const [user, setUser] = useState({})

  const getGithubUser = (githubUser) => setUser(githubUser)

  const consolee = (mensaje) => console.log(mensaje)

  return (
    <div className="App">
      <SearchForm getGithub={getGithubUser} imprimirEnConsola={consolee} />
      <GithubProfile user={user} />
    </div>
  );
}

export default App;
