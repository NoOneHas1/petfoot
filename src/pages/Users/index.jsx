import './index.css';
import usersApi from '../../api/users';
import { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await usersApi();
                console.log('Users component mounted and fetching users', response?.users);
                setUsers(response?.users);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div>
            <h1>Lista de Usuarios hsaufsusushd</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Rol</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.role}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Users;