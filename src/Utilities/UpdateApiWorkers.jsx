export const updateUser = async (userId, newEmail, newRole) => {
  try {
    const token = localStorage.getItem('accessToken');
    const response = await fetch(`http://localhost:8080/users/${userId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email: newEmail, role: newRole }),
    });

    if (!response.ok) {
      throw new Error('Error al actualizar el usuario');
    }else {
      console.log('Usuario editado correctamente');
    }

    // Aquí puedes realizar alguna acción adicional después de actualizar los datos,
    // como refrescar la lista de usuarios.

  } catch (error) {
    console.error('Error:', error);
  }

  
};