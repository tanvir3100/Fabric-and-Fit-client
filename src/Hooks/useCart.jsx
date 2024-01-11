import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCart = () => {
  const axiosAxios = useAxios();
  const { data: tShirts = [] } = useQuery({
    queryKey: ['tShirt'],
    queryFn: async () => {
      const res = await axiosAxios.get('/tShirts')
      return res.data;
    }
  });
  return [tShirts]
};

export default useCart;




