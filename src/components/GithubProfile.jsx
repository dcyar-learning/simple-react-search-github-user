import React from 'react'

function GithubProfile({ user }) {
  return (
    <div className="info">
      {user.avatar_url.length
        ? <img src={user.avatar_url} width="50" height="50" alt={user.name} />
        : ''
      }
      <div>
        <h2>{user.name}</h2>
        <ul>
          <li>Usuario: {user.login}</li>
          <li>Fecha de creacion: {user.created_at}</li>
          <li>Biografia: {user.bio}</li>
          <li>Repositorios: {user.public_repos}</li>
          <li>Seguidores: {user.followers}</li>
          <li>Siguiendo: {user.following}</li>
          <li>Ubicacion: {user.location}</li>
        </ul>
      </div>
    </div>
  )
}

export default GithubProfile
