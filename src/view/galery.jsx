import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';

const GalleryView = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await api.get('/posts');
            const imagesData = response.data.map(post => ({
                id: post.id,
                url: post.img,
                description: post.description
            }));
            setImages(imagesData);
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <nav className="bg-white shadow-lg p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-gray-800">Nombre del Estudio</h1>
                <Link to="/home" className="text-gray-600 hover:text-gray-800 font-semibold hover:border-b hover:shadow-sm border-gray-800">Volver al Landing</Link>
            </nav>
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-8">Galería</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <div key={index} className="bg-white rounded shadow-lg overflow-hidden">
                            <img src={image.url} alt={`Image ${index + 1}`} className="w-full h-48 object-cover" />
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryView;
