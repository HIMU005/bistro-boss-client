import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handleMakeAdmin = user => {
        axiosSecure.patch(`/user/admin/${user?._id}`)
            .then(res => {
                console.log(res);
                if (res.data.modifiedCount) {
                    refetch();
                    toast.success(`${user?.name} is an Admin now`)
                }
            })
    }

    const handleDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/user/${user._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            toast.success('Delete successFully');
                            refetch();
                        }
                    }
                    )
            }
        });
    }
    return (
        <div>
            <div>
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, idx) => <tr key={user._id}>
                                <th>{idx + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>

                                    {
                                        user.role === 'admin' ? "Admin" :
                                            <button
                                                onClick={() => handleMakeAdmin(user)}
                                                className="btn text-2xl bg-orange-500"><FaUser className="text-white" />
                                            </button>
                                    }
                                </td>
                                <td>
                                    <button
                                        onClick={() => handleDelete(user)}
                                        className="btn text-2xl text-red-500"><FaTrashAlt />
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;