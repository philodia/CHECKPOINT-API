import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    // Fonction pour obtenir la liste des utilisateurs depuis JSONPlaceholder
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setListOfUsers(response.data);
      } catch (error) {
        console.error("Une erreur s'est produite lors de la récupération des utilisateurs.", error);
      }
    };

    // Appelez la fonction pour récupérer les utilisateurs lorsque le composant est monté
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Liste des Utilisateurs</h1>
      <ul>
        {listOfUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;