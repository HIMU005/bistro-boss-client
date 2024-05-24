import { useForm } from "react-hook-form";
import SectionTitle from "../../Components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { toast } from "react-toastify";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
const AddItems = () => {
    const { register, handleSubmit, reset } = useForm()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {
        console.log(data);
        // image upload to imgbb and get the url 
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
        if (res.data.success) {
            // now send the menu item data to the server with the image url 
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            //
            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log(menuRes.data);
            if (menuRes.data.insertedId) {
                reset();
                toast.success('Item add successfully');
            }

        }
    }
    return (
        <div>
            <SectionTitle subHeading={"---What's new?---"}
                heading={"ADD AN ITEM"} />

            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("name")} /> */}
                    <div className="form-control w-full my-6">
                        <div className="label">
                            <span className="label-text">Recipe Name *</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Type here"
                            className="input input-bordered w-full "
                            {...register("name", { required: true })}
                        />
                    </div>
                    <div className="flex justify-between gap-5">
                        <div className="w-full">
                            <div className="label">
                                <span className="label-text">Category *</span>
                            </div>
                            <select
                                {...register("category", { required: true })}
                                defaultValue=""
                                className="select select-bordered w-full"
                            >
                                <option value="" disabled>Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                        </div>
                        <div className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price *</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full "
                                {...register("price", { required: true })}
                            />
                        </div>
                    </div>

                    <div className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe Details</span>
                        </div>
                        <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio" />
                    </div>

                    <div className="form-control w-full my-6">
                        <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <br />
                    {/* <input type="submit" /> */}
                    <button className="btn ">
                        Add Items <FaUtensils className="ml-4" />
                    </button>
                </form>
            </div>

        </div>
    );
};

export default AddItems;