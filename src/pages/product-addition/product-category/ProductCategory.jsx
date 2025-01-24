import React from 'react'
import "./ProductCategory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'
import { faCaretRight, faCompass } from '@fortawesome/free-solid-svg-icons'

const ProductCategory = () => {
    return (
        <div className='product-category-container absolute translate-x-[-0.1rem] translate-y-[-0.5rem] m-0  pl-[20rem] pt-[2rem]'>
            <div className="listing-wrapper w-[70%]">
                <div className="top-category-info pb-8">
                    <h2 className='text-[1.5rem] font-bold'>Select a product category</h2>
                    <p>Choosing the best category ensures that you see the most appropriate data fields for your products. Browse the categories directly or use search.</p>
                </div>
                <div className="favorites pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Favorites</h3>
                    <p className='fav-selected rounded text-gray-500 w-full p-2'>You haven't added any favorite categories yet</p>
                </div>
                <div className="browse pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Browse</h3>
                    <div className="browse-wrapper">
                        <p className='fav-category-list w-full text-gray-500 text-[1rem] p-2'>select a category</p>
                        <div className='max-h-[250px] overflow-scroll'>
                            <ul>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Appliances</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Arts, Crafts & Sewing</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Automotive</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Baby Products</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Beauty & Personal Care</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Books</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Building Materials</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Call Phones & Accessories</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                                <li className='border-b border-gray-900 p-2 flex flex-row justify-between'><span><FontAwesomeIcon className='mr-2' icon={faStar} />Provisions</span> <FontAwesomeIcon icon={faCaretRight} /></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="pb-8">
                    <h3 className='text-[1rem] pb-2 font-[600]'>Search</h3>
                    <p className='browse-wrapper rounded w-full text-gray-500 text-[1rem] p-2'>search for a category</p>
                    <div className='mt-4 border border-gray-700 rounded w-full  text-[1rem] w-full h-[400px]  flex items-center p-4'>
                        <div className='translate-x-[17rem]'>
                        <FontAwesomeIcon icon={faCompass} className='text-2xl'/><p className='text-[1rem] translate-x-[-4rem]'>Search for a category</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCategory
