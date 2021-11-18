import React, { useState } from 'react'

function SearchForm({ getGithub, imprimirEnConsola }) {
  const URL = `https://api.github.com/users/`;

  const [input, setInput] = useState('')

  const changeInput = e => setInput(e.target.value)

  const searchGithubUser = () => {
    fetch(`${URL}${input}`)
      .then(response => response.json())
      .then(result => getGithub(result))
      .catch(err => console.log(err))
  }

  return (
    <div>
      <input onChange={changeInput} type="text" value={input} placeholder="username" />
      <button onClick={searchGithubUser}>Search</button>
      <button onClick={() => imprimirEnConsola('mensaje a imprimir')}>Consola</button>
    </div>
  )
}

export default SearchForm
