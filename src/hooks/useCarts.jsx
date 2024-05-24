import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCarts = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    // tan stack query 
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/carts?email=${user.email}`)
            return data;
        },
        enabled: !!user?.email,
    })
    return [cart, refetch];
}
export default useCarts;