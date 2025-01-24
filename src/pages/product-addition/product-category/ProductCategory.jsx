import React, { useContext, useState } from 'react';
import "./ProductCategory.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faCompass, faTrash} from '@fortawesome/free-solid-svg-icons';
import { ProductContext } from '../../../contexts/ProductsContext';
import { NavLink } from 'react-router-dom';

const ProductCategory = () => {
    const { products, error } = useContext(ProductContext);
    const [favorites, setFavorites] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [
        "Appliances",
        "Arts, Crafts & Sewing",
        "Automotive",
        "Baby Products",
        "Beauty & Personal Care",
        "Books",
        "Building Materials",
        "Call Phones & Accessories",
        "Provisions"
    ];

    const seenCategories = new Set();
    const combinedCategories = [...categories, ...products.map(product => product.category)]
        .filter(category => {
            if (seenCategories.has(category)) {
                return false; // Skip duplicates
            }
            seenCategories.add(category);
            return true; // Include unique categories
        });

    const addFavorite = (category) => {
        if (!favorites.includes(category)) {
            setFavorites((prev) => [...prev, category]);
            setSelectedCategory(category);
        }
    };

    const filteredCategories = combinedCategories.filter(category =>
        category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (fav) => {
        setFavorites((prev) => prev.filter(category => category !== fav));
        if(fav === selectedCategory){
            setSelectedCategory(null);
        }
    };

    return (
        <div className='product-category-container absolute translate-x-[-0.1rem] translate-y-[-0.5rem] m-0 pl-[20rem] pt-[2rem]'>
            <div className="listing-wrapper w-[70%]">
                <div className="top-category-info pb-8">
                    <h2 className='text-[1.5rem] font-bold'>Select a product category</h2>
                    <p>Choosing the best category ensures that you see the most appropriate data fields for your products. Browse the categories directly or use search.</p>
                </div>
                <div className="favorites pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Favorites</h3>
                    {favorites.length === 0 ? (
                        <p className='fav-selected rounded text-gray-500 w-full p-2'>You haven't added any favorite categories yet</p>
                    ) : (
                        <ul className='grid grid-cols-4 gap-8'>
                            {favorites.map((fav, index) => (
                                <li key={index} className='rounded bg-blue-200 border-gray-700 p-2 text-blue-900 flex flex-row items-center justify-between relative'>{fav}<span><FontAwesomeIcon className='text-[12px] absolute bottom-2 right-2' icon={faTrash} onClick={() => handleDelete(fav)} /></span></li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="browse pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Browse</h3>
                    <div className="browse-wrapper">
                        <p className='fav-category-list w-full text-gray-500 text-[1rem] p-2'>Select a category</p>
                        <div className='max-h-[250px] overflow-scroll'>
                            <ul>
                                {combinedCategories.map((category) => (
                                    <li
                                        key={category}
                                        onClick={() => addFavorite(category)}
                                        className='border-b border-gray-700 p-2 flex flex-row justify-between'
                                    >
                                        <span>
                                            <FontAwesomeIcon className='mr-2' icon={faStar} />
                                            {category}
                                        </span>
                                        <NavLink to="/fill-detail" className="bg-blue-400 text-[12px] p-2 rounded font-bold hover:bg-blue-200">Select Category</NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Search</h3>
                    <input type='text' placeholder="Search for a category" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className='browse-wrapper rounded w-full text-gray-500 text-[1rem] p-2'/>
                    <div className='mt-4 border border-gray-700 rounded w-full text-[1rem] h-[400px] flex p-4'>
                        <div >
                            
                            {searchQuery.length === 0 ? (<div className='translate-x-[17rem] translate-y-[9rem]'><FontAwesomeIcon icon={faCompass} className='text-2xl' /><p className='text-[1rem] translate-x-[-4rem]'>Search for a category</p></div>) : (
                                <ul className='w-[540px] '>
                                    {filteredCategories.map((category) => (
                                        <li
                                            key={category}
                                            onClick={() => addFavorite(category)}
                                            className='border-b border-gray-700 w-full p-2 flex flex-row justify-between'
                                        >
                                            <span>
                                                <FontAwesomeIcon className='mr-2' icon={faStar} />
                                                {category}
                                            </span>
                                            <NavLink to="/fill-detail" className="bg-blue-400 text-[12px] p-2 rounded font-bold hover:bg-blue-200">Select Category</NavLink>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;