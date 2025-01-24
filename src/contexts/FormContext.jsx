import React, { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        id: "",
        title: "",
        brand: "",
        manufacturer: "",
        category: "",
        image: ""
    });
    const [formArray, setFormArray] = useState([]);
    
    const addFormDataToArray = () => {
        setFormArray(prev => [...prev, formData]);
        setFormData({
            id: "",
            title: "",
            brand: "",
            manufacturer: "",
            category: "",
            image: ""
        });
    };

    return (
        <FormContext.Provider value={{formArray, formData, setFormData, addFormDataToArray }}>
            {children}
        </FormContext.Provider>
    );
};