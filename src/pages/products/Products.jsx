import { useContext, useEffect } from "react";
import "./Products.css";
import { ProductContext } from "../../contexts/ProductsContext";
import ItemCard from "../../components/item-card/ItemCard";
import { NavLink } from "react-router-dom";
import { FormContext } from "../../contexts/FormContext";

const Products = () => {
    const { products, error } = useContext(ProductContext);
    const { formArray } = useContext(FormContext);


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
                <div className='display-data-container p-8'>
                    <h2 className='text-xl font-bold'>Submitted Product Details</h2>
                    {formArray.length === 0 ? (
                        <p>No product details submitted yet.</p>
                    ) : (
                        formArray.map((formData, index) => (
                            <div key={index} className='mt-4 border p-4 rounded flex flex-row items-center justify-between shadow'>
                                {formData.image && (
                                    <div className="w-[40%]">
                                        <img src={formData.image} alt="Uploaded" className='mt-2 w-full rounded h-48 object-cover' />
                                    </div>
                                )}
                                <div className="w-[55%] h-[200px] p-4 bg-blue-100">
                                    <p><strong>Product ID:</strong> {formData.id}</p>
                                    <p><strong>Title:</strong> {formData.title}</p>
                                    <p><strong>Brand:</strong> {formData.brand}</p>
                                    <p><strong>Manufacturer:</strong> {formData.manufacturer}</p>
                                    <p><strong>Category:</strong> {formData.category}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className="relative">
                    <NavLink to="/product-listing" className="bg-blue-500 absolute left-[30rem] rounded text-[13px] font-bold  p-4  hover:bg-blue-400 ">Add a Product</NavLink>
                </div>
            </div>
        </>
    );
};

export default Products;