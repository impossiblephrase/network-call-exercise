import { useState, useEffect } from "react";
import axios from "axios"
import IUser from "../../interface/user.interface";
import { useDispatch } from 'react-redux';
import { setUserCount } from "../redux/userSlice";

function Home () {
    const [users, setUsers] = useState<IUser[]>([]);
    const dispatch = useDispatch();
    const getUsers = async() => {
        try {
            const { data } = await axios.get(
                "https://66fd3bcfc3a184a84d199197.mockapi.io/api/v1/users");
                setUsers(data);
                dispatch(setUserCount(data.length));
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="min-h-screen rounded-xl bg-gray py-10">
            <h1 className="text-3xl font-serif font-bold text-center text-black mb-8">User List</h1>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full bg-white rounded-lg shadow-md overflow-hidden">
                        <thead className="bg-violet-500">
                            <tr>
                                <th className="px-4 py-2 text-left text-sm font-medium text-white">Name</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-white">Email</th>
                                <th className="px-4 py-2 text-left text-sm font-medium text-white">Password</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users?.map((item) => (
                                <tr key={item.id} className="border-t border-gray-200">
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.name}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.email}</td>
                                    <td className="px-4 py-2 text-left text-sm text-gray-700">{item.password}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default Home;