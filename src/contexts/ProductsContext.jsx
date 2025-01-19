import { useState, useEffect, createContext, useMemo } from 'react';
import axios from 'axios';

export const ProductContext = createContext();

export const  ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]); 
    const [error, setError] = useState(null); 

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data); 
            } catch (err) {
                setError(err.message);
                console.log("Error encountered during fetch:", err.message);
            }
        };
        fetchProducts();
    }, []);

    const value = useMemo(() => ({ products, error }), [products, error]); 

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};