import React from 'react'

function Logout() {
  localStorage.setItem('token', '')
  return (
    <div className="card bg-color">
      <div className="card-header">
        <h2><label>Déconnexion</label></h2>
      </div>
      <div className="card-body">
        <label>Vous êtes maintenant déconnecté...</label>
      </div>
    </div>
  )
}

export default Logout