import { useState, useContext } from 'react'
import "./FillDetail.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk, faExclamation, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { FormContext } from '../../../contexts/FormContext';
import { NavLink } from 'react-router-dom';

const FillDetail = () => {
    const {formData, setFormData, addFormDataToArray} = useContext(FormContext);
    const [image, setImage] = useState(null);
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({...prev, [name]: value}))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a URL for the image
            setImage(imageUrl);
            setFormData(prev => ({ ...prev, image: imageUrl })); // Store the image URL in the context
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addFormDataToArray();
    };
    return (
        <div className='fill-detail-container p-8'>
            <div className='bg-blue-400 p-4 rounded flex flex-rows items-center justify-between'>
                <div className='exclamation-container'>
                    <FontAwesomeIcon icon={faExclamation} />
                </div>
                <p className='w-[90%]'>When multiple sellers sell the same product through a single detail page, we combine and present the best product data to ensure customers get the best experience.</p>
            </div>
            <form onSubmit={handleSubmit} className='mt-8'>
                <div className='flex items-center justify-between p-8'>
                        <span><FontAwesomeIcon icon={faAsterisk} className='text-[10px] text-blue-500' /></span>
                    <label htmlFor="id" className='flex items-center justify-between w-[15%]'>Product ID <FontAwesomeIcon icon={faQuestionCircle} className='text-blue-300' />:</label>
                    <input
                        id="id"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="text"
                        placeholder='1234567890'
                        name="id"
                        value={formData.id}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex items-center justify-between p-8'>
                    <label htmlFor="title" className='flex items-center justify-between w-[15%]'>
                        <span><FontAwesomeIcon icon={faAsterisk} className='text-[10px] text-blue-500' /></span>
                        Title
                        <span><FontAwesomeIcon icon={faQuestionCircle} className='text-blue-300' /></span>:
                    </label>
                    <input
                        id="title"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="text"
                        placeholder='Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops'
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex items-center justify-between p-8'>
                    <label htmlFor="category" className='flex items-center justify-between w-[15%]'>
                        <span><FontAwesomeIcon icon={faAsterisk} className='text-[10px] text-blue-500' /></span>
                        Category
                        <span><FontAwesomeIcon icon={faQuestionCircle} className='text-blue-300' /></span>:
                    </label>
                    <input
                        id="category"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="text"
                        placeholder='SB-122'
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>
                <div className='flex items-center justify-between p-8'>
                    <label htmlFor="brand" className='flex items-center justify-between w-[15%]'>Brand
                        <span><FontAwesomeIcon icon={faQuestionCircle} className='text-blue-300' /></span>:
                    </label>
                    <input
                        id="brand"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="text"
                        placeholder='BCMS International'
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex items-center justify-between p-8'>
                    <label htmlFor="manufacturer" className='flex items-center justify-between w-[15%]'>Manufacturer
                        <span><FontAwesomeIcon icon={faQuestionCircle} className='text-blue-300' /></span>:
                    </label>
                    <input
                        id="manufacturer"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="text"
                        placeholder='SB-122'
                        name="manufacturer"
                        value={formData.manufacturer}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex items-center justify-between p-8'>
                        <span><FontAwesomeIcon icon={faAsterisk} className='text-[10px] text-blue-500' /></span>
                    <label htmlFor="image" className='flex items-center justify-between w-[15%]'>Image:</label>
                    <input
                        id="image"
                        className='w-[80%] border rounded p-2 border-gray-700'
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </div>
                <div className='w-[30%] flex flex-row items-center justify-between translate-x-[25rem]'>
                <button className='bg-blue-500 w-[100px] h-[48px] rounded hover:bg-blue-400 ' type='submit'>Submit</button>
                <NavLink to="/products" className='bg-blue-500  p-[0.7rem] rounded hover:bg-blue-400' >Go to Products Page</NavLink>
                </div>
            </form>
        </div>
    )
}

export default FillDetail
