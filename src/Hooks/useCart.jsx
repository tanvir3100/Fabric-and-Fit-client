import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


const useCart = () => {
    const axiosAxios = useAxios();
    const { data: tShirt = [] } = useQuery({
        queryKey: ['tShirt'],
        queryFn: async () => {
            const res = await axiosAxios.get('/tShirts')
            return res.data;
        }
    });
    return [tShirt]
};

export default useCart;









[
    {
      "name": "Classic Cotton T-shirt",
      "price": 19.99,
      "sizes": ["S", "M", "L", "XL"],
      "description": "A comfortable and versatile cotton T-shirt for everyday wear.",
      "colors": ["White", "Black", "Red", "Blue"],
      "image": "https://example.com/classic_cotton_tshirt.jpg"
    },
    {
      "name": "Graphic Print Tee",
      "price": 24.99,
      "sizes": ["M", "L", "XL"],
      "description": "Express yourself with stylish graphic prints on this premium T-shirt.",
      "colors": ["Gray", "Navy", "Green"],
      "image": "https://example.com/graphic_print_tee.jpg"
    },
    {
      "name": "Sporty Performance Shirt",
      "price": 29.99,
      "sizes": ["S", "L", "XL"],
      "description": "Ideal for sports and active lifestyles, moisture-wicking fabric keeps you dry.",
      "colors": ["Black", "Blue", "Green"],
      "image": "https://example.com/sporty_performance_shirt.jpg"
    },
    {
      "name": "Vintage V-neck",
      "price": 22.99,
      "sizes": ["S", "M", "XL"],
      "description": "A classic V-neck design with a touch of vintage charm.",
      "colors": ["White", "Gray", "Burgundy"],
      "image": "https://example.com/vintage_vneck.jpg"
    },
    {
      "name": "Casual Striped T-shirt",
      "price": 18.99,
      "sizes": ["S", "M", "L"],
      "description": "Stay stylish and comfortable with this casual striped T-shirt.",
      "colors": ["Blue/White", "Black/Gray", "Red/Black"],
      "image": "https://example.com/casual_striped_tshirt.jpg"
    },
    {
      "name": "Fitted Long Sleeve Tee",
      "price": 27.99,
      "sizes": ["M", "L", "XL"],
      "description": "A fitted long sleeve T-shirt for a sleek and modern look.",
      "colors": ["Black", "Charcoal", "Navy"],
      "image": "https://example.com/fitted_long_sleeve_tee.jpg"
    },
    {
      "name": "Bold Graphic Hoodie",
      "price": 34.99,
      "sizes": ["M", "L", "XL"],
      "description": "Make a statement with this bold graphic hoodie for colder days.",
      "colors": ["Red", "Blue", "Black"],
      "image": "https://example.com/bold_graphic_hoodie.jpg"
    },
    {
      "name": "Essential Plain Tank Top",
      "price": 14.99,
      "sizes": ["S", "M", "L"],
      "description": "A basic and essential plain tank top for hot summer days.",
      "colors": ["White", "Black", "Gray"],
      "image": "https://example.com/essential_plain_tank_top.jpg"
    },
    {
      "name": "Retro Tie-Dye Tee",
      "price": 26.99,
      "sizes": ["M", "L", "XL"],
      "description": "Bring back the retro vibes with this colorful tie-dye T-shirt.",
      "colors": ["Rainbow", "Pastel", "Vibrant"],
      "image": "https://example.com/retro_tie_dye_tee.jpg"
    },
    {
      "name": "Slim Fit Polo Shirt",
      "price": 32.99,
      "sizes": ["S", "L", "XL"],
      "description": "Stay polished with this slim fit polo shirt for a smart casual look.",
      "colors": ["Navy", "White", "Burgundy"],
      "image": "https://example.com/slim_fit_polo_shirt.jpg"
    },
    {
      "name": "Floral Print Summer Tee",
      "price": 21.99,
      "sizes": ["M", "L", "XL"],
      "description": "Embrace the summer vibes with this floral print T-shirt.",
      "colors": ["Yellow", "Blue", "Pink"],
      "image": "https://example.com/floral_print_summer_tee.jpg"
    },
    {
      "name": "Athletic Compression Shirt",
      "price": 39.99,
      "sizes": ["M", "L", "XL"],
      "description": "Designed for maximum support and comfort during intense workouts.",
      "colors": ["Black", "Red", "Gray"],
      "image": "https://example.com/athletic_compression_shirt.jpg"
    },
    {
      "name": "Vintage Baseball Jersey",
      "price": 28.99,
      "sizes": ["S", "M", "L"],
      "description": "Step into a classic look with this vintage-inspired baseball jersey.",
      "colors": ["Blue/White", "Red/White", "Black/Gray"],
      "image": "https://example.com/vintage_baseball_jersey.jpg"
    },
    {
      "name": "Cropped Oversized Tee",
      "price": 23.99,
      "sizes": ["M", "L", "XL"],
      "description": "Achieve a trendy and relaxed style with this cropped oversized tee.",
      "colors": ["White", "Pink", "Black"],
      "image": "https://example.com/cropped_oversized_tee.jpg"
    },
    {
      "name": "Tech Fabric Performance Tee",
      "price": 31.99,
      "sizes": ["S", "L", "XL"],
      "description": "Stay cool and dry during workouts with this high-tech performance tee.",
      "colors": ["Blue", "Green", "Gray"],
      "image": "https://example.com/tech_fabric_performance_tee.jpg"
    },
    {
      "name": "Striped Henley Long Sleeve",
      "price": 25.99,
      "sizes": ["M", "L", "XL"],
      "description": "Elevate your casual look with this striped Henley long sleeve.",
      "colors": ["Navy/White", "Gray/Black", "Red/Gray"],
      "image": "https://example.com/striped_henley_long_sleeve.jpg"
    },
    {
      "name": "Camouflage Print T-shirt",
      "price": 20.99,
      "sizes": ["S", "M", "L"],
      "description": "Blend in with style in this camouflage print T-shirt.",
      "colors": ["Green Camo", "Desert Camo", "Urban Camo"],
      "image": "https://example.com/camouflage_print_tshirt.jpg"
    },
    {
      "name": "Mock Neck Ribbed Top",
      "price": 29.99,
      "sizes": ["M", "L", "XL"],
      "description": "Add a touch of sophistication with this mock neck ribbed top.",
      "colors": ["Black", "Burgundy", "Charcoal"],
      "image": "https://example.com/mock_neck_ribbed_top.jpg"
    },
    {
      "name": "Artistic Watercolor Tee",
      "price": 22.99,
      "sizes": ["S", "L", "XL"],
      "description": "Express your creativity with this artistic watercolor-inspired tee.",
      "colors": ["Blue/Green", "Purple/Pink", "Yellow/Orange"],
      "image": "https://example.com/artistic_watercolor_tee.jpg"
    }
  ]
  