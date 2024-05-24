import PropTypes from 'prop-types';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import useAxiosSecure from '../hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useCarts from '../hooks/useCarts';

const FoodCard = ({ item }) => {
    const { image, name, price, recipe, _id } = item;
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const [, refetch] = useCarts();
    const handleAddToCart = food => {
        if (user && user.email) {
            // send cart item to data base 
            console.log(food.name);
            const cartItem = {
                menuId: _id,
                email: user?.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data);
                    if (res.data.insertedId) {
                        toast.success("Cart added successfully")
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged in",
                text: "Please login to add to the cart",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { location } });
                }
            });
        }
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className='bg-slate-900 text-white absolute right-0 mr-4 p-2 rounded-lg'>{price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title ">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button onClick={handleAddToCart}
                        className="btn btn-outline bg-slate-100 border-orange-400 border-0 border-b-4 mt-4">Add to card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
FoodCard.propTypes = {
    item: PropTypes.object,
}