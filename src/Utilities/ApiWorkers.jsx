import { useState, useEffect } from 'react';
import AdminItem from '../Components/AdminItem';

export default function ApiWorkers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await fetch('https://burger-queen-api-mock-production-b29d.up.railway.app/users', {
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