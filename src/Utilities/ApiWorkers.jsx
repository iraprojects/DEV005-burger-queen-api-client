import { useState, useEffect } from 'react';
import AdminItem from '../Components/AdminItem';

export default function ApiWorkers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('http://localhost:8080/users', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener los usuarios');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error:', error);
        setUsers([]);
      }
    };

    fetchUsers();
  }, []);

  return (
    <>
      {users.map((user) => (
        <AdminItem key={user.id} worker={user} />
      ))}
    </>
  );
}