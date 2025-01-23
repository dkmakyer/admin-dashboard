import { useContext, useEffect } from "react";
import "./Products.css";
import { ProductContext } from "../../contexts/ProductsContext";
import ItemCard from "../../components/item-card/ItemCard";

const Products = () => {
    const { products, error } = useContext(ProductContext);

    useEffect(() => {
        if (error) {
            console.log("Error during fetch: " + error.message);
        } else {
            console.log("Products fetched successfully: ", products);
        }
    }, [products, error]);

    return (
        <>
            <div className="absolute trending-products-container p-8">
                <div className="category-section mb-[3rem]">
                    <h2 className="category-header text-2xl font-medium underline pb-4">Trending Products</h2>
                    <div className="category-items flex flex-row overflow-hidden">
                        {error ? (
                            <p>Error loading products: {error.message}</p>
                        ) : (
                            products.slice(0, 4).map((item, i) => (
                                <div>
                                    <ItemCard
                                        key={item.price}
                                        title={item.title}
                                        category={item.category}
                                        image={item.image}
                                        price={item.price}
                                        rating={item.rating.rate}
                                    />
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div>
                    <button className="bg-blue-500 rounded h-[2rem] text-[13px] font-bold translate-x-[30rem] p-4 pb-8 hover:bg-blue-400">Add a Product</button>
                </div>
            </div>
        </>
    );
};

export default Products;