// src/deskmain/Service.jsx

import React from 'react';
import { FaGift, FaBook, FaShippingFast, FaStore, FaLaptop, FaTags } from 'react-icons/fa';

const services = [
    { icon: <FaTags size={32} />, title: 'Offers' },
    { icon: <FaShippingFast size={32} />, title: 'Delivery' },
    { icon: <FaStore size={32} />, title: 'Shop' },
    { icon: <FaGift size={32} />, title: 'Gifts' },
    { icon: <FaBook size={32} />, title: 'Book' },
    { icon: <FaLaptop size={32} />, title: 'Laptop Service' }
];

const Service = () => {
    return (
        <div className="py-6 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="text-center transition transform hover:scale-105">
                            <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 bg-purple-600 text-white rounded-full">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-medium text-gray-900">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
