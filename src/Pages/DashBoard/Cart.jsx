import { FaEdit, FaTrashAlt } from "react-icons/fa";
import useCarts from "../../hooks/useCarts";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const Cart = () => {
    const [cart, refetch] = useCarts();
    const totalPrice = cart.reduce((total, item) => total = total + item.price, 0)
    const axiosSecure = useAxiosSecure();
    // const handleEdit = id => {

    // }
    const handleDelete = id => {
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
                axiosSecure.delete(`/cart/${id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount) {
                            toast.success('Delete successFully');
                            refetch();
                        }
                    })
                // Swal.fire({
                //     title: "Deleted!",
                //     text: "Your file has been deleted.",
                //     icon: "success"
                // });
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly mb-3">
                <h2 className="text-4xl">Items: {cart.length}</h2>
                <h2 className="text-4xl">Total Price: {totalPrice} </h2>
                {cart.length ? <Link to={'/dashboard/payment'}>
                    <button className="btn btn-primary">Pay</button>
                </Link> : <button disabled className="btn btn-primary">Pay</button>}
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, idx) =>
                                <tr key={item._id}>
                                    <td>{idx + 1}</td>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>

                                        </div>
                                    </td>

                                    <td>
                                        {item.name}
                                    </td>

                                    <td>
                                        {item.price}
                                    </td>
                                    <td><button
                                        // onClick={() => handleEdit(item._id)} 
                                        className="btn text-2xl text-accent"><FaEdit /></button></td>
                                    <td><button onClick={() => handleDelete(item._id)} className="btn text-2xl text-red-500"><FaTrashAlt /></button></td>

                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Cart;